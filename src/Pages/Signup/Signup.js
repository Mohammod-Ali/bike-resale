import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaMotorcycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext)

    const {register, formState: { errors }, handleSubmit} = useForm()

    const handleSignUp = data => {
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => {
            console.error(err)
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
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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
      
    </form>
      <p className='mt-3'>Already have an account. Please <Link className="text-primary" to='/login'>Login</Link></p>
      <div className="divider">OR</div>
        <button className="btn btn-outline w-full"><FaGoogle className='m-2 text-2xl'></FaGoogle> Continue with Google</button>
      </div>
    </div>
    );
};

export default Signup;