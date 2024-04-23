import React, { useState, useEffect } from 'react';

const ActiveUserBox = ({ user }) => (
  <div className="bg-white border rounded shadow p-4 mb-4">
    <h5 className="font-bold text-purple-600">{user.name}</h5>
    <p className="text-gray-600">{user.email}</p>
    <p className="text-gray-600">Time Spent: {user.timeSpent}</p>
  </div>
);

const AdminDashboard = () => {
  // State variables to store counts
  const [adminCount, setAdminCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);
  const [activeUsers, setActiveUsers] = useState([]);

  // Dummy data - replace with actual API calls to fetch counts
  const fetchCounts = () => {
    // Simulating API calls to fetch counts
    // Replace with actual API calls
    const adminCount = 10;
    const userCount = 100;
    const courseCount = 50;
    const paymentCount = 80;

    setAdminCount(adminCount);
    setUserCount(userCount);
    setCourseCount(courseCount);
    setPaymentCount(paymentCount);
  };

  // Dummy data - replace with actual API calls to fetch active users
  const fetchActiveUsers = () => {
    // Simulating API calls to fetch active users
    // Replace with actual API calls
    const activeUsersData = [
      { id: 1, name: 'John Doe', email: 'john@example.com', timeSpent: '2 hours' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', timeSpent: '1 hour' },
      { id: 3, name: 'Alice Smith', email: 'alice@example.com', timeSpent: '3 hours' },
      { id: 4, name: 'Bob Johnson', email: 'bob@example.com', timeSpent: '4 hours' },
    ];

    setActiveUsers(activeUsersData);
  };

  useEffect(() => {
    fetchCounts();
    fetchActiveUsers();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0 top-0 w-[83%] overflow-y-scroll">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-black border rounded shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-blue-600 text-white">
                  <svg className="fill-current h-8 w-8" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V9l5.25 4L11 17z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-purple-200">Admins</h5>
                <h3 className="font-bold text-3xl text-white">{adminCount}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-black border rounded shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-blue-600 text-white">
                  <svg className="fill-current h-8 w-8" viewBox="0 0 24 24">
                    <path d="M22 5.84L12.01 1 2 5.84V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5.84zM12 15l-4-4h8l-4 4zm0-8.17L16.17 11H7.83L12 6.83z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-purple-200">Users</h5>
                <h3 className="font-bold text-3xl text-white">{userCount}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-black border rounded shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-blue-600 text-white">
                  <svg className="fill-current h-8 w-8" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V9l5.25 4L11 17z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-purple-200">Courses</h5>
                <h3 className="font-bold text-3xl text-white">{courseCount}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-black border rounded shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-3 bg-blue-600 text-white">
                  <svg className="fill-current h-8 w-8" viewBox="0 0 24 24">
                    <path d="M22 5.84L12.01 1 2 5.84V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5.84zM12 15l-4-4h8l-4 4zm0-8.17L16.17 11H7.83L12 6.83z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-purple-200">Payments</h5>
                <h3 className="font-bold text-3xl text-white">{paymentCount}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="bg-black border rounded shadow p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <h5 className="font-bold uppercase text-purple-200">Active Users</h5>
                {activeUsers.map(user => (
                  <ActiveUserBox key={user.id} user={user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
