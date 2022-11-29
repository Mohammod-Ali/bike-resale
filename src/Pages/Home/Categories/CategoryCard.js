import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category, setCategory}) => {
    const {name, categoryId} = category

    const handleCategory = () => {
        setCategory(categoryId)
    }
    return (
        <div>
            <Link to={``}><button onClick={handleCategory} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">{name}</button></Link>

        </div>
    );
};

export default CategoryCard;