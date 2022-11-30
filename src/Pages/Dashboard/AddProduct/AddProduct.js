import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()

    const handleSignUp = (data) => {
        console.log(data)
    }


    return (
        <div>
            <h1 className='text-4xl mb-8'>Add Your Products:</h1>
            <div className="h-[800px]  flex justify-center ">
            
      <div className="w-96 p-7">
      {/* <h1 className="text-3xl text-center font-bold"><FaMotorcycle className='h-40 w-80 text-black	'></FaMotorcycle>Sign Up</h1> */}
      
      <form onSubmit={handleSubmit(handleSignUp)}>
    
      {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            {...register("seller", 
            {required: 'Seller name is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.seller && <p className='text-red-600'>{errors.seller?.message}</p>}
        </div> */}
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("product", 
            {required: 'Product name is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.product && <p className='text-red-600'>{errors.product?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", 
            {required: 'Location is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", 
            {required: 'Original price is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            {...register("resalePrice", 
            {required: 'Resale Price is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Years of Use</span>
          </label>
          <input
            type="number"
            {...register("useTime", 
            {required: 'Years of use is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.useTime && <p className='text-red-600'>{errors.useTime?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Post Date</span>
          </label>
          <input
            type="date"
            {...register("postDate", 
            {required: 'Post date is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.postDate && <p className='text-red-600'>{errors.postDate?.message}</p>}
        </div>
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            {...register("phoneNumber", 
            {required: 'Phone Number is required'})}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phoneNumber && <p className='text-red-600'>{errors.phoneNumber?.message}</p>}
        </div>
       {/* dropdown */}
        <select  className="select select-bordered w-full max-w-xs mt-5" {...register("condition", { required: 'Select a option' })}>
        <option value="">Condition Type</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="fair">Fair</option>
      </select>
      {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}

      {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Add a Photo</span>
          </label>
          <input
            type="file"
            {...register("img", {required: 'Add a Picture'
        })}
            className="input input-bordered w-full max-w-xs"
          />
           {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
          
        </div> */}
      
      <input className="btn btn-outline w-full mt-8" value='save' type="submit" />
      
    </form>

      </div>
    </div>
        </div>
    );
};

export default AddProduct;