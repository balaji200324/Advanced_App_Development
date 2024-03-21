import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const isValid = validateForm();

    if (isValid) {
      toast.success('submitted successfully');
      resetForm();
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const message = document.getElementById('message').value;

    if (firstName === '') {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (lastName === '') {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
      isValid = false;
    }

    if (message === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);return isValid;
  };

  const resetForm = () => {
    document.getElementById('contact-form').reset();
    setErrors({});
  };

  return (
    <>
      <div className="h-[95vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 ...">
        <div className="container mx-auto px-6 w-full bg-slate-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="text-center mt-6 font-bold text-3xl">Contact us</div>
          <div className="mx-auto mt-8 px-4 w-full sm:mt-8 flex justify-center items-center">
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              <div>
                <div className=" mt-2.5">
                  <input
                    type="text"
                    placeholder="First name"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ..."
                  />
                  {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                </div>
              </div>
              <div>
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder="Last name"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ..."/>
                  {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="sm:col-2">
                <div className="mt-2.5">
                  <input
                    type="email"
                   placeholder="Email address"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ..."
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="sm:col-2">
                <div className="mt-2.5">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-red-400 bg-red-100 shadow-lg shadow-violet-400/50 ..."
                  />
                  {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    placeholder="Message"
                    id="message"
                    rows={3}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    defaultValue={''}
                  />
                  {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-5'>
            <button type="button" className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 justify-center items-center" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Contact;