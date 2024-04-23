import React, { useState } from 'react';

const MyCoursePage = ({ enrolledCourses }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-8">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {enrolledCourses.map(course => (
          <div key={course.id} className="bg-black rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-white">{course.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursePage;
