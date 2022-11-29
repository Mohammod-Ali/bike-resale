import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BikeCard from '../BikeCard/BikeCard';
import Categories from '../Categories/Categories';
import CategoryCart from '../CategoryCart/CategoryCart';



const Home = () => {
    // const [bikes, setBikes] = useState()
    const [category, setCategory] = useState()
console.log(category)

const {data: bikes = []} = useQuery({
    queryKey: ["bikeCollections"],
    queryFn: () => fetch('http://localhost:5000/bikeCollections')
    .then(res => res.json())
})

    // useEffect( () =>{
    //     fetch('http://localhost:5000/bikeCollections')
    //     .then(res => res.json())
    //     .then(data => setBikes(data))
    // },[])

    
    return (
        <div>
            <Banner></Banner>
            <Categories setCategory={setCategory}></Categories>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
            {
                bikes?.map(bike => <CategoryCart
                key={bike._id}
                bike={bike}
                ></CategoryCart>)
            }
          
            </div>
          
            <BikeCard></BikeCard>
        </div>
    );
};

export default Home;