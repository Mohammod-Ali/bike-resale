import React from 'react';
import { FaMotorcycle } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-24">
  <div className='mx-auto'>
    <FaMotorcycle className='w-24 h-24 '></FaMotorcycle>
    <p>ACME Industries Ltd.<br/>Providing bike resale since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
   <a href='' className="link link-hover">Branding</a> 
   <a href='' className="link link-hover">Design</a> 
   <a href='' className="link link-hover">Marketing</a> 
   <a href='' className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
   <a href='' className="link link-hover">About us</a> 
   <a href='' className="link link-hover">Contact</a> 
   <a href='' className="link link-hover">Jobs</a> 
   <a href='' className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
   <a href='' className="link link-hover">Terms of use</a> 
   <a href='' className="link link-hover">Privacy policy</a> 
   <a href='' className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;