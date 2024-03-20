import { useState } from "react";

const AddInquiry = ({ newInquiry, setNewInquiry, addInquiry }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newInquiry.trim()) {
      addInquiry();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor="newInquiry" className="block text-sm font-medium text-gray-700">
        Add a new inquiry
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="newInquiry"
          id="newInquiry"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter your inquiry here"
          value={newInquiry}
          onChange={(e) => setNewInquiry(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-2 py-2 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Inquiry
      </button>
    </form>
  );
};

export default AddInquiry;