import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from  'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true)

    // sign up with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile name
    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo)

    }

    // Google login provider
    const googleLoginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // logout
    const logOUt = () => {
        setLoading(true)
        return signOut(auth)
    }

    // manage user
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing')
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    },[])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        googleLoginProvider,
        logOUt,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;