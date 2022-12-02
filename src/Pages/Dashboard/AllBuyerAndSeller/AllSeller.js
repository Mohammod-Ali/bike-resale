import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const {data: usersCollections, isLoading, refetch} = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch('http://localhost:5000/users')
    .then(res => res.json())
  })

  const sellerDeleteHandler= (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      refetch()
      toast.success('Delete Successfully')
    })
  }

if(isLoading){
  return <h2>loading</h2>
}
  return (
    <div>
      <h1 className="text-4xl mb-8">All Seller:</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              usersCollections.map((user, i) => <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button onClick={() => sellerDeleteHandler(user._id)} className="btn btn-sm">Delete</button></td>
              </tr>)
            }
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
