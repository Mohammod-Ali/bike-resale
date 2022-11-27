import React from 'react';

const BikeCard = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-24 mx-8">
  <figure><img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title mb-4">Up-coming modified Bike!</h2>
    <p>We have many modified bike, which are different from the market in front of us. The modified bike lunching in market very soon.</p>
    <div className="card-actions justify-end">
    <label htmlFor="bike-modal" className="btn">Show More</label>

    {/* bike modal */}
    <input type="checkbox" id="bike-modal" className="modal-toggle" />
<label htmlFor="bike-modal" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold">Thank You!</h3>
    <p className="py-4">Our new modified bike are coming soon. Please stay with us.</p>
  </label>
</label>
    </div>
  </div>
</div>
    );
};

export default BikeCard;