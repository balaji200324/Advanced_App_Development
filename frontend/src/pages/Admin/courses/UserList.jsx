import React, { useState } from 'react';

const UserList = () => {
  // State for user list, search input value, and new user form fields
  const [users, setUsers] = useState([
    { id: 1, username: 'John Doe', email: 'john.doe@example.com', password: 'password1' },
    { id: 2, username: 'Jane Doe', email: 'jane.doe@example.com', password: 'password2' },
    { id: 3, username: 'Mike Smith', email: 'mike.smith@example.com', password: 'password3' },
    { id: 4, username: 'Sarah Lee', email: 'sarah.lee@example.com', password: 'password4' },
  ]);
  const [search, setSearch] = useState('');
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Function to handle new user form field changes
  const handleNewUserChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Function to add a new user to the list
  const addUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ username: '', email: '', password: '' });
    setShowAddForm(false);
  };

  // Function to delete a user from the list
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Function to edit user details
  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  // Filtered users based on search input value
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0 top-0 w-[83%] overflow-y-scroll">
      <div className="m-auto w-full max-w-xl bg-white rounded-xl p-8">
        {/* Search bar */}
        <div className="flex items-center justify-start mb-8">
          <input
            type="text"
            placeholder="Search users"
            value={search}
            onChange={handleSearch}
            className="w-full shadow-md rounded-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent"
          />
          <button onClick={() => setShowAddForm(!showAddForm)} className="mx-2 rounded-full bg-blue-300 shadow-md hover:bg-blue-400 text-white font-bold h-10 w-10 flex items-center justify-center">
            +
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={newUser.username}
              onChange={handleNewUserChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={handleNewUserChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handleNewUserChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-4"
            />
            <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add User
            </button>
          </div>
        )}

        {/* User list */}
        <div className="mt-8">
          {filteredUsers.map((user) => (
            <div key={user.id} className="rounded-xl shadow-md p-4 mb-4 flex justify-between">
              <div>
                <div>{user.username}</div>
                <div>{user.email}</div>
              </div>
              <div>
                <button onClick={() => editUser(user.id, { ...user, username: 'Updated Name' })} className="bg-orange-500 text-white px-4 py-2 rounded-md mr-2">
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;