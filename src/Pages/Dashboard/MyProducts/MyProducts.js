import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import MyProductCart from "./MyProductCart";

const MyProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(`https://bike-resale-server-chi.vercel.app/bikeCollections`).then(
        (res) => res.json()
      ),
  });

  const productDeleteHandler = (product) => {
    fetch(
      `https://bike-resale-server-chi.vercel.app/bikeCollections/${product._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast(`${product.categoryId} Delete Successfully`);
      });
  };

  if (isLoading) {
    return (
      <div className="flex align-middle justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl">My Products: </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <MyProductCart
                key={i}
                product={product}
                productDeleteHandler={productDeleteHandler}
              ></MyProductCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
