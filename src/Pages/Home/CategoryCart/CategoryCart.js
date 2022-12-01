import React from "react";
import { Link } from "react-router-dom";

const CategoryCart = ({ bike, setBikeModal }) => {
    // console.log(bike)
    const { img, descriptions, useTime, condition, location, originalPrice,
      phoneNumber, postDate, productName,
      resalePrice, categoryId, _id } = bike
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Post Date: {postDate}</p>
        <p> {descriptions}</p>
        <p>Location: {location}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Condition: {condition}</p>
        <div className="card-actions justify-between">
        <div>
          <h5>Original Price: {originalPrice}</h5>
          <h4 className="font-bold">Resale Price: {resalePrice}</h4>
          <p className="font-semibold">Use Time: {useTime} year.</p>
         
          
        
        </div>
        <Link to={`/services/${_id}`}>
        
       
        </Link>
        <label onClick={() => setBikeModal(bike)} htmlFor="bike-booking-modal" className="btn btn-outline btn-error">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCart;
