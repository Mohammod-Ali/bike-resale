import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import MyOrdersCard from "./MyOrdersCard";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(
        `https://bike-resale-server-chi.vercel.app/bookings?email=${user?.email}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div className="flex align-middle justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }

  return (
    <div>
      {myOrders.length ? (
        <>
          <h1 className="text-4xl mb-8">My Orders:</h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              {myOrders.map((myOrder, i) => (
                <MyOrdersCard key={i} myOrder={myOrder} i={i}></MyOrdersCard>
              ))}
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-4xl">
          You have not add your product. Please add your fev Bike.
        </h1>
      )}
    </div>
  );
};

export default MyOrder;
