import React, { useState, useEffect } from 'react';
import { Avatar, Dropdown, Button } from 'flowbite-react';
import { Avatar as MaterialAvatar } from '@material-tailwind/react';

const AdminProfile = () => {
  const [profilePicture, setProfilePicture] = useState('');

  const handleImageChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSave = () => {
    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        localStorage.setItem('profilePicture', base64);
      };
      reader.readAsDataURL(profilePicture);
    } else {
      localStorage.removeItem('profilePicture');
    }
  };

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0top-0 w-[83%] overflow-y-scroll">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          <p className="text-gray-500 mb-8">Update your profile picture and information.</p>
        </div>
        <div className="w-64 relative">
          <MaterialAvatar
            src={profilePicture || ''}
            alt="Profile picture"
            className="w-64 h-64 border-4 border-blue-500"
          />
          <label htmlFor="image-upload" className="absolute bottom-0 right-0 bg-blue-500 text-white py-1 px-2 rounded-full cursor-pointer">
            <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            Change
          </label>
        </div>
        <div className="w-64 mt-8">
          <Dropdown label={<Avatar alt="User settings" img={profilePicture|| '/images/people/profile-picture-5.jpg'} />}>
            <Dropdown.Item onClick={handleSave}>Save changes</Dropdown.Item>
            <Dropdown.Item>Cancel</Dropdown.Item>
          </Dropdown>
          <p className="text-center mt-4 text-gray-500">
            <Button onClick={() => setProfilePicture('')}>Remove current picture</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;