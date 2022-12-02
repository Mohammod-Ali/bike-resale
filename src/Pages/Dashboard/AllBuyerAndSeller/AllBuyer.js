import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const {
    data: usersCollections,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://bike-resale-server-chi.vercel.app/users").then((res) =>
        res.json()
      ),
  });

  const userDeleteHandler = (id) => {
    fetch(`https://bike-resale-server-chi.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("Delete Successfully");
      });
  };

  if (isLoading) {
    return <h2>loading</h2>;
  }
  return (
    <div>
      <h1 className="text-4xl mb-8">All Buyer:</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete Button</th>
            </tr>
          </thead>
          <tbody>
            {usersCollections.map((buyer, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button onClick={() => userDeleteHandler(buyer._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
