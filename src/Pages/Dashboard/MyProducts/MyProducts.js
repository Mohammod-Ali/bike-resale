import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyProductCart from './MyProductCart';

const MyProducts = () => {

    const {data: products, isLoading} = useQuery({
        queryKey: ["bookings"],
        queryFn: () => fetch(`http://localhost:5000/bikeCollections`).then(res => res.json())
      })

      if(isLoading){
        return <div className='flex align-middle justify-center'>
            <progress className='progress w-56 '></progress>
        </div>
      }

    return (
        <div>
            <h1 className='text-4xl'>My Products: </h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        products?.map( (product, i) => <MyProductCart
        key={i}
        product={product}
        ></MyProductCart>)
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyProducts;