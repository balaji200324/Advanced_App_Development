import React from 'react';
import AdminUser from './AdminUser'; // Assuming AdminUser component is in the same directory

const Dummy = () => {
  // Dummy data
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://via.placeholder.com/150",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    // Add more dummy users as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      {users.map((user, index) => (
        <AdminUser key={index} user={user} />
      ))}
    </div>
  );
};

export default Dummy;
