import { async } from "@firebase/util";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const BookingModal = ( {bikeModal, setBikeModal, refetch}) => {
    const {user} = useContext(AuthContext) 
    
    const { img, descriptions, useTime, condition, location, originalPrice,
        phoneNumber, postDate, productName,
        resalePrice, categoryId, _id } = bikeModal

    const handleBooking = event => {
        event.preventDefault()
        const from = event.target;
        const productName = from.productName.value
        const name = from.name.value
        const email = from.email.value
        const price = from.price.value
        const clientPhone = from.clientPhone.value
        const clientLocation = from.clientLocation.value;
       
        const booking = {
            productName, 
            name, 
            email, 
            price, 
            clientPhone, 
            clientLocation
        }
        console.log( booking)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setBikeModal(null)
                toast.success('Booking Confirm')
                refetch()
            } else {
                toast.error(data.message)
            }
           
        })

    }


  return (
    <>
      <input type="checkbox" id="bike-booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bike-booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            {categoryId}
          </h3>
         <form onSubmit={handleBooking}  className="grid grid-cols-1 gap-2 mt-6">
         {/* <label className="label">
    <span className="label-text">Product Name:</span>
  </label> */}
         <input type="text" 
         name="productName"
         placeholder="Type here" 
         defaultValue={productName}
         disabled
         className="input w-full input-bordered" />
         <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
          <input
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              disabled
              className="input w-full input-bordered"
              required
            />
          <input
              name="price"
              type="number"
              placeholder="Price"
              defaultValue={resalePrice}
              disabled
              className="input w-full input-bordered"
              required
            />
        
          <input
              name="clientPhone"
              type="number"
              placeholder="Your Phone Number"
              
              className="input w-full input-bordered"
              required
            />
          <input
              name="clientLocation"
              type="text"
              placeholder="Meeting Location"
              
              className="input w-full input-bordered"
              required
            />
        
         <br />
         <input className="btn btn-primary w-full " type="submit" value="submit" />
         </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
