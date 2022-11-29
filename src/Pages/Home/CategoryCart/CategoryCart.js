import React from "react";
import { Link } from "react-router-dom";

const CategoryCart = ({ bike }) => {
    
    const {name, img, descriptions, categoryId, _id } = bike
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{descriptions.slice(0, 100)}{'...'}</p>
        <div className="card-actions justify-between">
        <h4 className="font-bold">Price: ${}</h4>
          
        <Link to={`/services/${_id}`}>
        <button className="btn btn-outline btn-error">Details</button>
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryCart;
