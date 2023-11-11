'use client'
import Image from 'next/image'
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Guide = () => {
 
 
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_a4ti7od',
        'template_i36ys5d',
        {
          from_name: form.name,
          to_name: "Adom Fosu",
          email: form.email,
          to_email: "adomfosu2000@gmail.com",
          message: form.message,
        },
        'qKcs0-60JEaHBzgTv'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oops, something went wrong. Please try again.");
        }
      );
  };
  return (
    <section className="flexCenter flex-col sm:flex-row mb-[150px]">
      <div className="padding-container pb-20">
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-600">
          About
        </p>
        <div className="flex flex-wrap justify-between gap-5 ">
          
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Discover a hassle-free way to explore the world with GOODLIFE travel and tour. From securing of essential documents like birth certificate and passport to assisting with visa application, we are your trusted partner in seamless travel. Our services extend beyond
          paperwork to ensure your journey is stress-free, including expert assistance in finding accomodations. </p>
        </div>
      
      </div>
      <div>

        
    <div
      className={` flex xl:flex-row flex-col-reverse  overflow-hidden ring-offset ring-blue-600 ring-2 rounded-xl p-4 mx-auto`}
    >
      
        

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col w-full  '
        >
        <p className='text-blue-600 font-bold flex'>Get in touch</p>
          <label className='flex flex-col'>
          <span className='text-gray-900 font-medium'> Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="name"
              className='bg-gray-100 py-4 px-6 placeholder:text-secondary text-gray-900 mb-2 rounded-lg ring-1 ring-blue-600 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium '>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              className='bg-gray-100 py-4 px-6 mb-4 placeholder:text-secondary text-gray-900 rounded-lg ring-1 ring-blue-600 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium'>Phone</span>
            <input
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder='Phone'
              className='bg-gray-100 py-4 px-6 mb-4 placeholder:text-secondary text-gray-900 ring-1 ring-blue-600 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium '>Service</span>
            <input
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please Leave a Message'
              className='bg-gray-100 py-4 px-6 placeholder:text-secondary text-gray-900 ring-1 ring-blue-600 rounded-lg outline-none border-none font-medium'
            />
            
          </label>

          <button
            type='submit'
            className='bg-blue-600 mt-2 mx-auto w-full py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      
      </div>
      </div>

      
    </section>
  )
}

export default Guide