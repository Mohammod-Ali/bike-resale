import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_59tyy72', 'template_anezc8g', form.current, 'kNwztQYr4W2J63n7m')
        .then((result) => {
            console.log(result.text);
            toast.success('Email Send Successfully!')

        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
      
      <div className='py-20 bg-gray-800 '>
        <h1 className='text-5xl font-mono text-white p-5'>Contact:</h1>
        <div className="card  bg-neutral text-neutral-content shadow-xl">
  <div className="card-body">
  <form  data-aos="fade-up" className='flex align-middle justify-center flex-col sm:mx-24 my-16' ref={form} onSubmit={sendEmail}>
        <label className='text-white'>Name</label>
        <input type="text" placeholder="Type Your Name" className="input input-bordered w-full text-black" name="user_name" />
        <br />
        <label className='text-white'>Email</label>
        <input type="email" placeholder="Type Your Email" className="input input-bordered w-full text-black" name="user_email" />
        <br />
        <label className='text-white'>Message</label>
        <textarea className="textarea  textarea-primary text-black" name="message" placeholder="Message"/>
        <input className='btn btn-outline text-white mt-5' type="submit" value="Send" />
      </form>
  </div>
</div>
      </div>
    );
};

export default ContactForm;