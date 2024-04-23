import React, { useState } from 'react';

const UserInquiryPage = () => {
  // State for managing user input and previous inquiries
  const [inquiry, setInquiry] = useState('');
  const [previousInquiries, setPreviousInquiries] = useState([]);

  // Function to handle submission of new inquiry
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inquiry.trim() === '') {
      return; // Prevent empty inquiries
    }
    // Add the new inquiry to the list of previous inquiries
    setPreviousInquiries([...previousInquiries, inquiry]);
    // Clear the input field
    setInquiry('');
  };

  return (
    <div className="flex h-screen bg-grey-200 absolute right-0 top-0 w-[83%] overflow-y-scroll">
    <div className="flex h-screen w-full bg-gray-200 overflow-y-scroll">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">User Inquiry Page</h1>
        {/* Form for typing new inquiries */}
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            placeholder="Type your inquiry here..."
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4"
          >
            Submit Inquiry
          </button>
        </form>
        {/* List to display previous inquiries */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Previous Inquiries</h2>
          <ul>
            {previousInquiries.map((inquiry, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
                {inquiry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserInquiryPage;
