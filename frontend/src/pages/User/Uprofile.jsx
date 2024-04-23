import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  // State variables for user data, form fields, and profile image
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture file

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to fetch user data (simulated)
  const fetchUserData = () => {
    // Simulated user data
    const dummyUserData = {
      name: 'balaji',
      email: 'balaji@g.com',
      dob: '2003-12-24',
      profilePicture: 'https://via.placeholder.com/150', // Placeholder profile image URL
    };
    // Set user data
    setUserData(dummyUserData);
    // Set form fields
    setName(dummyUserData.name);
    setEmail(dummyUserData.email);
    setDob(dummyUserData.dob);
  };

  // Function to handle edit button click
  const handleEditProfile = () => {
    setEditMode(true);
  };

  // Function to handle file selection for profile image
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  // Function to handle save button click
  const handleSaveProfile = () => {
    // Save updated user details (simulated)
    const updatedUserData = { ...userData, name, email, dob };
    setUserData(updatedUserData);
    setEditMode(false);
    // In a real application, you would upload the profile picture to the server
    // along with other user details.
  };

  return (
    <div className="flex h-screen bg-grey-200 absolute right-0 top-0 w-[83%] overflow-y-scroll">
      <div className="flex h-screen w-full bg-gray-200 items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          {userData ? (
            <div>
              <div className="flex items-center justify-center mb-6">
                <label htmlFor="profilePictureInput" className="cursor-pointer">
                  <img
                    src={profilePicture ? URL.createObjectURL(profilePicture) : userData.profilePicture}
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-20 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100">
                    <FontAwesomeIcon icon={faEdit} size="8px" />
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="profilePictureInput"
                  onChange={handleProfilePictureChange}
                  className="hidden"
                />
              </div>
              {editMode ? (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={handleSaveProfile}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p><span className="font-bold">Name:</span> {userData.name}</p>
                  <p><span className="font-bold">Email:</span> {userData.email}</p>
                  <p><span className="font-bold">Date of Birth:</span> {userData.dob}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
