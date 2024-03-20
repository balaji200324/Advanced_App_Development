// import React from 'react';

// export default function PaymentHistory() {
//   const payments = [
//     { id: 1, date: '03/16/2024', amount: '$150.00',Courses: 'General English',Status: 'pending'},
//     { id: 2, date: '03/12/2024', amount: '$100.00',Courses: 'General English',Status: 'payed' },
//     { id: 3, date: '03/02/2024', amount: '$200.00',Courses: 'General English',Status: 'pending' },
//   ];

//   return (
//     <div className="p-4 bg-white shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Payment History</h2>
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Date</th>
//             <th className="px-4 py-2">Amount</th>
//             <th className="px-4 py-2">Courses</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map((payment) => (
//             <tr key={payment.id}>
//               <td className="border px-4 py-2">{payment.date}</td>
//               <td className="border px-4 py-2">{payment.amount}</td>
//               <td className="border px-4 py-2">{payment.Courses}</td>
//               <td className="border px-4 py-2">{payment.Status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import React from 'react';
// export default function PaymentHistory() {
//   const payments = [
//     {
//       id: 1,
//       date: '03/16/2024',
//       amount: '$150.00',
//       courses: 'General English',
//       status: 'pending',
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//     },
//     {
//       id: 2,
//       date: '03/12/2024',
//       amount: '$100.00',
//       courses: 'General English',
//       status: 'payed',
//       name: 'Jane Smith',
//       email: 'jane.smith@example.com',
//     },
//     {
//       id: 3,
//       date: '03/02/2024',
//       amount: '$200.00',
//       courses: 'General English',
//       status: 'pending',
//       name: 'Mike Lee',
//       email: 'mike.lee@example.com',
//     },
//   ];

//   return (
//     <div className="p-4 bg-white shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Payment History</h2>
//       <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
//         {payments.map((payment) => (
//           <div key={payment.id} className="bg-gray-100 p-4 rounded shadow">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-lg font-bold mb-2">{payment.name}</h3>
//                 <p className="text-gray-600 mb-2">{payment.email}</p>
//                 <p className="text-gray-600 mb-2">{payment.courses}</p>
//               </div>
//               <div>
//                 <p className="text-gray-600 mb-2">{payment.date}</p>
//                 <p className="text-gray-600 mb-2">{payment.amount}</p>
//                 <p className="text-gray-600 mb-2">{payment.status}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react';

const PaymentHistory = () => {
  const payments = [
    {
      email: 'user1@example.com',
      purchase: 'Laptop',
      price: '$1000',
      discount: '$100',
      amountReceived: '$900',
      status: 'success',
    },
    {
      email: 'user2@example.com',
      purchase: 'Phone',
      price: '$500',
      discount: '$50',
      amountReceived: '$450',
      status: 'failed',
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Payment History</h1>
        <div className="rounded-lg shadow-md overflow-x-auto bg-white p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Purchase</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Discount</th>
                <th className="px-4 py-2">Amount Received</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{payment.email}</td>
                  <td className="px-4 py-2">{payment.purchase}</td>
                  <td className="px-4 py-2">{payment.price}</td>
                  <td className="px-4 py-2">{payment.discount}</td>
                  <td className="px-4 py-2 text-right">
                    <span
                      className={`font-medium ${
                        payment.status === 'success' ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {payment.amountReceived}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

