import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category, handleFilter}) => {
    const {name, categoryId} = category

    
    return (
        <div>
            <Link to={``}><button onClick={() => handleFilter (categoryId)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">{name}</button></Link>

        </div>
    );
};

export default CategoryCard;