import React, { useState } from 'react';

// Dummy data for course enquiries
const dummyEnquiries = [
  {
    id: 1,
    name: 'dhanush',
    email: 'dhanush@example.com',
    message: 'I am interested in your grammer english course. Can you provide more details?',
    status: 'pending'
  },
  {
    id: 2,
    name: 'harish',
    email: 'harish@example.com',
    message: 'Do you offer any discounts for the british english course?',
    status: 'pending'
  }
];

const EnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState(dummyEnquiries);

  // Function to handle responding to an enquiry
  const respondToEnquiry = (id) => {
    // Here you would implement the logic to respond to the enquiry
    // For demonstration purposes, let's just update the status to 'responded'
    const updatedEnquiries = enquiries.map(enquiry =>
      enquiry.id === id ? { ...enquiry, status: 'responded' } : enquiry
    );
    setEnquiries(updatedEnquiries);
  };

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0 top-0 w-[83%] overflow-y-scroll">
    <div className="container mx-auto justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Enquiries</h1>
      <div className="grid grid-cols-1 gap-4">
        {enquiries.map(enquiry => (
          <div key={enquiry.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{enquiry.name}</h2>
            <p className="text-gray-600">{enquiry.email}</p>
            <p className="mt-2">{enquiry.message}</p>
            <p className="mt-2">
              Status: <span className={`font-semibold ${enquiry.status === 'pending' ? 'text-yellow-600' : 'text-green-600'}`}>{enquiry.status}</span>
            </p>
            {enquiry.status === 'pending' && (
              <button onClick={() => respondToEnquiry(enquiry.id)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Respond</button>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EnquiriesPage;
