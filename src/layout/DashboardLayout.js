import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Footer from "../Pages/Shared/Footer/Footer";

import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext)
  const [ isAdmin ] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  

  if(loading){
    return <div className='flex align-middle justify-center'>
        <progress className='progress w-56 '></progress>
    </div>
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <li>
              <Link to="/dashboard">My Dashboard</Link>
            </li> */}
            {
              <div>
              {
                isAdmin || isSeller || <li>
                <Link to="/dashboard">My orders</Link>
              </li>
              }
                
               {
                isSeller && <>
                <li>
                 <Link to="/dashboard/addproduct">Add A product</Link>
               </li>
               <li>
                 <Link to="/dashboard/myproducts">My Products</Link>
               </li>
               <li>
                 <Link to="/dashboard/mybuyers">My Buyers</Link>
               </li>
                </>
                 
               }
                {
                  isAdmin && <> 
                <li>
                  <Link to="/dashboard/allseller">
                    All Seller
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">
                    All Buyer
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditems">
                    Reported Items
                  </Link>
                </li>
                  </>
                }
              </div>
            }
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
