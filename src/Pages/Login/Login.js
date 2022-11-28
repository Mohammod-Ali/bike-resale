import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMotorcycle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()

    const {signIn, googleLoginProvider} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';

  //  login handler
    const handleLogin = data => {
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err.message)
            setLoginError(err.message)
        })
      }

      // google login handler
      const googleLoginHandler = () => {
        setLoginError('')
        googleLoginProvider(googleProvider)
        .then(result => {
          const user = result.user;
          console.log(user)
          navigate(from, { replace: true})
        })
        .catch(error => {
          console.error(error)
          setLoginError(error.message)
        })
      }

      
    return (
        <div className="h-[800px]  flex justify-center items-center">
            
      <div className="w-96 p-7">
      <h1 className="text-3xl text-center font-bold"><FaMotorcycle className='h-40 w-80 text-black	'></FaMotorcycle> Login</h1>
      
      <form onSubmit={handleSubmit(handleLogin)}>
    
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
          <label className="label">
            <span className="label-text">Forgat Password</span>
          </label>
        </div>
      
      {/* <p>{data}</p> */}
      <input className="btn btn-outline w-full" value='Login' type="submit" />
      {/* login error */}
      {
        loginError && <p className='text-red-600'>{loginError}</p>
      }

    </form>
      <p className='mt-3'>New to Bike Resale. Please <Link className="text-primary" to='/signup'>Sign Up</Link></p>
      <div className="divider">OR</div>
        <button onClick={googleLoginHandler} className="btn btn-outline w-full"><FaGoogle className='m-2 text-2xl'></FaGoogle> Continue with Google</button>
      </div>
    </div>
    );
};

export default Login;