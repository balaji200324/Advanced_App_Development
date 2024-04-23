import React, { useState, useEffect } from 'react';

const PaymentHistoryPage = () => {
  // State variable for payment data
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch payment data when the component mounts
  useEffect(() => {
    fetchPaymentData();
  }, []);

  // Function to fetch payment data (simulated)
  const fetchPaymentData = () => {
    // Simulated payment data
    const dummyPayments = [
      {
        id: 1,
        userName: 'John Doe',
        userEmail: 'john@example.com',
        courseName: 'advance english',
        paymentAmount: 50,
        paidDateTime: '2024-04-25T10:30:00',
        status: 'Success',
      },
      {
        id: 2,
        userName: 'Jane Smith',
        userEmail: 'jane@example.com',
        courseName: 'spoken english',
        paymentAmount: 60,
        paidDateTime: '2024-04-24T15:45:00',
        status: 'Failure',
      },
      {
        id: 3,
        userName: 'Michael Brown',
        userEmail: 'michael@example.com',
        courseName: 'English Literature',
        paymentAmount: 70,
        paidDateTime: '2024-04-23T12:00:00',
        status: 'Success',
      },
      {
        id: 4,
        userName: 'Emily Johnson',
        userEmail: 'emily@example.com',
        courseName: 'Advanced English Grammar',
        paymentAmount: 80,
        paidDateTime: '2024-04-22T09:30:00',
        status: 'Failure',
      },
      {
        id: 5,
        userName: 'David Wilson',
        userEmail: 'david@example.com',
        courseName: 'Business English',
        paymentAmount: 90,
        paidDateTime: '2024-04-21T14:15:00',
        status: 'Success',
      },
      {
        id: 6,
        userName: 'Sophia Martinez',
        userEmail: 'sophia@example.com',
        courseName: 'English for Academic Purposes',
        paymentAmount: 100,
        paidDateTime: '2024-04-20T11:45:00',
        status: 'Failure',
      },
      {
        id: 7,
        userName: 'William Anderson',
        userEmail: 'william@example.com',
        courseName: 'English Conversation',
        paymentAmount: 110,
        paidDateTime: '2024-04-19T08:30:00',
        status: 'Success',
      }
      
      // Add more payment data as needed
    ];
    // Set payment data
    setPayments(dummyPayments);
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filtered payments based on search input value
  const filteredPayments = payments.filter((payment) =>
    payment.userName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0 top-0 w-[83%] overflow-y-scroll">
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="ml-14  w-full bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-semibold mb-6">Payment History</h1>
        {/* Search bar */}
        <div className="flex items-center justify-start mb-8">
          <input
            type="text"
            placeholder="Search users"
            value={search}
            onChange={handleSearch}
            className="w-full shadow-md rounded-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent"
          />
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">User Name</th>
              <th className="border border-gray-300 px-4 py-2">User Email</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">Payment Amount</th>
              <th className="border border-gray-300 px-4 py-2">Paid Date & Time</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td className="border border-gray-300 px-4 py-2">{payment.id}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.userName}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.userEmail}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.courseName}</td>
                <td className="border border-gray-300 px-4 py-2">${payment.paymentAmount}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.paidDateTime}</td>
                <td className={`border border-gray-300 px-4 py-2 text-center ${payment.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default PaymentHistoryPage;
