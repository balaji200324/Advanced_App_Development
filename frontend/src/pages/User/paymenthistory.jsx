import React, { useState } from 'react';

const UserPaymentHistory = () => {
  // Sample payment history data
  const [paymentHistory, setPaymentHistory] = useState([
    { id: 1, date: '2024-04-20', amount: 50, status: 'Success' },
    { id: 2, date: '2024-04-18', amount: 60, status: 'Failure' },
    { id: 3, date: '2024-04-15', amount: 70, status: 'Success' },
    // Add more payment history data as needed
  ]);

  // Filter successful payments
  const successfulPayments = paymentHistory.filter((payment) => payment.status === 'Success');

  // Filter failed payments
  const failedPayments = paymentHistory.filter((payment) => payment.status === 'Failure');

  return (
    <div className="flex h-screen bg-grey-200 absolute right-0 top-0 w-[83%] overflow-y-scroll">
    <div className="flex h-screen w-full bg-gray-200 overflow-y-scroll">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Payment History</h1>

        {/* Section for successful payments */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Successful Payments</h2>
          {successfulPayments.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {successfulPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No successful payments</p>
          )}
        </div>

        {/* Section for failed payments */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Failed Payments</h2>
          {failedPayments.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {failedPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No failed payments</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserPaymentHistory;
