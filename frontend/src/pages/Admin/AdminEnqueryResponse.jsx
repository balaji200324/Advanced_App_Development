import React, { useState } from 'react';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      email: 'user1@example.com',
      subject: 'i need a advance english course',
      response: '',
      status: 'not answered',
    },
    {
      id: 2,
      email: 'user2@example.com',
      subject: 'java program',
      response: 'sorry only english courses',
      status: 'answered',
    },
  ]);

  // Update enquiry status
  const updateStatus = (enquiryId, status) => {
    setEnquiries((prevEnquiries) =>
      prevEnquiries.map((enquiry) =>
        enquiry.id === enquiryId ? { ...enquiry, status } : enquiry
      )
    );
  };

  // Add a response to an enquiry
  const addResponse = (enquiryId, response) => {
    setEnquiries((prevEnquiries) =>
      prevEnquiries.map((enquiry) =>
        enquiry.id === enquiryId ? { ...enquiry, response } : enquiry
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0 top-0 w-[83%] overflow-y-scroll">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Enquiries</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => {}}
            >
              <div className="flex items-center mb-2">
                <div className="text-gray-800 font-semibold">
                  {enquiry.email}
                </div>
              </div>
              <div className="text-gray-700">{enquiry.subject}</div>
              <div className="mt-4">
                <div className="text-gray-600">Response:</div>
                {enquiry.response && (
                  <div className="bg-gray-100 p-2 rounded-lg mt-2">
                    {enquiry.response}
                  </div>
                )}
                {!enquiry.response && (
                  <textarea
                    className="w-full p-2 rounded-lg mt-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => {
                      addResponse(enquiry.id, e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="mt-4 flex items-center">
                <div className="text-gray-600">Status:</div>
                <div className="ml-2">
                  <button
                    onClick={() => {
                      updateStatus(enquiry.id, 'answered');
                    }}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-lg mr-2 ${
                      enquiry.status === 'answered' &&
                      'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={enquiry.status === 'answered'}
                  >
                    Answered
                  </button>
                  <button
                    onClick={() => {
                      updateStatus(enquiry.id, 'not answered');
                    }}
                    className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg ${
                enquiry.status === 'not answered' &&
                      'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={enquiry.status === 'not answered'}
                  >
                    Not answered
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enquiries;