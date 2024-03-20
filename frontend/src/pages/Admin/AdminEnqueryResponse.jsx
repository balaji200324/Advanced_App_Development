import React, { useState } from 'react';

const dummyEnquiries = [
    {
        id: 1,
        subject: 'Course recommendation for beginners',
        message: 'Hi, I am a beginner and I am looking for a good course to get started with web development. Can you recommend any?',
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Open',
        response: null,
      },
      {
        id: 2,
        subject: 'Website design help needed',
        message: 'Hi, I am working on a website design and I am stuck on the layout. Can you provide some tips?',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        status: 'Open',
        response: null,
      },
      {
        id: 3,
        subject: 'Question about a specific feature',
        message: 'I have a question about a specific feature in your product. Can you help me understand how to use it?',
        name: 'Mike Lee',
        email: 'mike.lee@example.com',
        status: 'Open',
        response: null,
      },
      {
        id: 4,
        subject: 'General feedback',
        message: 'I just wanted to send some general feedback about your product. I really like it!',
        name: 'Sarah Jones',
        email: 'sarah.jones@example.com',
        status: 'Open',
        response: null,
      },
];

const AdminEnquiryResponse = () => {
  const [enquiries, setEnquiries] = useState(dummyEnquiries);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);



  return (
    <div className="flex h-screen">
      <div className="flex-grow overflow-y-auto px-4 py-8 lg:pl-64">
        <h1 className="text-xl font-bold mb-4">Admin Enquiries</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="overflow-y-auto h-screen">
            <ul className="list-none space-y-4">
              {enquiries.map((enquiry) => (
                <li key={enquiry.id}>
                  <button
                    className="w-full flex items-center justify-between bg-gray-100 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={() => handleSelectEnquiry(enquiry)}
                  >
                    <div className="text-left">
                      <h3 className="font-bold">{enquiry.subject}</h3>
                      <p className="text-gray-600">{enquiry.name}</p>
                    </div>
                    {selectedEnquiry?.id === enquiry.id && (
                      <span className="text-green-500 font-bold">Responding</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {selectedEnquiry && (
            <div>
              <Enquiry enquiry={selectedEnquiry} />
              <EnquiryForm
                onSubmit={(response) => handleRespond(selectedEnquiry.id, response)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEnquiryResponse;
