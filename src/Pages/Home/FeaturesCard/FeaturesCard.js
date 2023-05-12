import React from "react";
import { Link } from "react-router-dom";

const FeaturesCard = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
      <div className="card  bg-base-100 shadow-xl image-full ">
        <figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661900991997-81d451f37c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Bike"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">NEW ARRIVALS</h2>
          <p>Launched in 2023, Find all the latest bike launched in all over the world. Explore the 2023 newly launched bikes price, reviews, images. New Arrivals is meant to inject luxury into the everyday.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={'/dashboard'}>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661900991997-81d451f37c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Bike"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">BEST SELLER</h2>
          <p>We have a range of more than10 brands including Honda, Suzuki, Yamaha ONLY and NAME IT. We sell fashionable Bikes and accessories for all ages, Bikers.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to={'/dashboard'}>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661900991997-81d451f37c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Bike"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">NEW ARRIVALS</h2>
          <p>Launched in 2023, Find all the latest bike launched in all over the world. Explore the 2023 newly launched bikes price, reviews, images. New Arrivals is meant to inject luxury into the everyday.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={'/dashboard'}>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default FeaturesCard;
