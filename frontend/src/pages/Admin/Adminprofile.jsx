import React, { useState } from "react";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    photo: "https://example.com/profile-photo.jpg",
    bio: "I am a software engineer and avid learner.",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save changes to the server
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex">
        <div className="w-1/6">
          <img src={profile.photo} alt="Profile" className="w-full h-full rounded-full" />
        </div>
        <div className="w-5/6 ml-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={profile.name}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={profile.email}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                value={profile.bio}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                Photo
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={(e) => setProfile({ ...profile, photo: URL.createObjectURL(e.target.files[0]) })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;