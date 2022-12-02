import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = ({handleFilter, categories}) => {

 

    return (
        <div className='mt-32 mb-20'>
            <h1 className='text-center text-5xl mb-10 font-semibold'>Choose Your Brand</h1>
           <div className='flex justify-evenly '>
           {
                categories?.map(category => <CategoryCard
                key={category._id}
                category={category}
                handleFilter={handleFilter}
                ></CategoryCard>)
            }
           </div>
        </div>
    );
};

export default Categories;