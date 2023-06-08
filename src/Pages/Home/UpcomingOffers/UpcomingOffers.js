import React from "react";

const UpcomingOffers = () => {
  return (
    <div>
      <h1 className="mt-20 mb-5 font-bold text-4xl text-center">Upcoming Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bikes</h2>
          <p>Launched in 2023, Find all the latest bike launched in all over the world. Get the 10% discount of pre-order.</p>
        </div>
        <figure>
          <img
            src='https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
            alt="Bike"
          />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bikes</h2>
          <p>Launched in 2023, Find all the latest bike launched in all over the world. Get the 10% discount of pre-order.</p>
        </div>
        <figure>
          <img
            src='https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yYmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
            alt="Bike"
          />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bikes</h2>
          <p>Launched in 2023, Find all the latest bike launched in all over the world. Get the 10% discount of pre-order.</p>
        </div>
        <figure>
          <img
            src='https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
            alt="Bike"
          />
        </figure>
      </div>
      </div>
    </div>
  );
};

export default UpcomingOffers;
