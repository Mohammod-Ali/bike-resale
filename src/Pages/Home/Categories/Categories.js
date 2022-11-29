import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = ({setCategory}) => {
    // const [categories, setCategories] = useState()

    const {data: categories = []} = useQuery({
        queryKey: ['bikeCategories'],
        queryFn: () => fetch('http://localhost:5000/bikeCategories')
        .then(res => res.json())
    })

    // useEffect( () => {
    //     fetch('http://localhost:5000/bikeCategories')
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // },[])

    return (
        <div className='mt-32 mb-20'>
            <h1 className='text-center text-5xl mb-10 font-semibold'>Choose Your Brand</h1>
           <div className='flex justify-evenly '>
           {
                categories?.map(category => <CategoryCard
                key={category._id}
                category={category}
                setCategory={setCategory}
                ></CategoryCard>)
            }
           </div>
        </div>
    );
};

export default Categories;