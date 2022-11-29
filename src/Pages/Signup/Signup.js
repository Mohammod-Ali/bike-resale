import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle, FaMotorcycle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser, updateUser, googleLoginProvider} = useContext(AuthContext)
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();


    const {register, formState: { errors }, handleSubmit} = useForm()
    const [signUpError, setSignUpError] = useState('')

    // sign in with email and pass handler
    const handleSignUp = data => {
      console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            toast('User Created Successfully')
            
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
              
            })
            .catch(err => console.log(err))

            navigate('/')
        })
        .catch(err => {
            console.error(err)
            setSignUpError(err.message)
        })
    }

    // google signup handler
    const googleSignInHandler = () => {
      setSignUpError('')
      googleLoginProvider(googleProvider)
      .then(res => {
        const user = res.user;
        console.log(user)

        navigate('/')
      })
      .catch(error => {
        console.error(error)
        setSignUpError(error.message)
      })
    }

    return (
        <div className="h-[800px]  flex justify-center items-center">
            
      <div className="w-96 p-7">
      <h1 className="text-3xl text-center font-bold"><FaMotorcycle className='h-40 w-80 text-black	'></FaMotorcycle>Sign Up</h1>
      
      <form onSubmit={handleSubmit(handleSignUp)}>
    
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", 
            {required: 'Name is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", 
            {required: 'Email is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>
       {/* dropdown */}
        <select  className="select select-bordered w-full max-w-xs mt-5" {...register("category", { required: 'Select a option' })}>
        <option value="">Select Buyer or Seller account</option>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}

      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {required: 'password is required', 
            minLength: {value: 6, message: 'Password must be 6 characters.'}
        })}
            className="input input-bordered w-full max-w-xs"
          />
           {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          
        </div>
      
      {/* <p>{data}</p> */}
      <input className="btn btn-outline w-full mt-8" value='Sign Up' type="submit" />
      {
        signUpError && <p className='text-red-500'> {signUpError}</p>
      }
    </form>
      <p className='mt-3'>Already have an account. Please <Link className="text-primary" to='/login'>Login</Link></p>
      <div className="divider">OR</div>
        <button onClick={googleSignInHandler} className="btn btn-outline w-full"><FaGoogle className='m-2 text-2xl'></FaGoogle> Continue with Google</button>
      </div>
    </div>
    );
};

export default Signup;