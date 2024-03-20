import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from '../assets/img/book1.png'
const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/courses');
  };

  return (
    <div className="h-[95vh] bg-gradient-to-b from-sky-500 to-indigo-500 flex flex-col justify-center items-center px-7 py-14">
      <img src={book} alt="A book icon" className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cover" />
      <h1 className="text-4xl font-bold text-white mb-8">English Certification Exam Course</h1>
      <p className="text-xl text-white text-center mb-12">
        Prepare for your English certification exam with our comprehensive online course.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">What you'll learn</h3>
          <ul className="list-disc space-y-2 text-gray-700">
            <li>Master all four language skills: reading, writing, speaking, and listening.</li>
            <li>Learn strategies for test-taking success.</li>
            <li>Gain access to practice tests and mock exams.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">Who this course is for</h3>
          <ul className="list-disc space-y-2 text-gray-700">
            <li>Students aiming for English certifications (TOEFL, IELTS, etc.).</li>
            <li>Professionals seeking to improve their English language skills.</li>
            <li>Anyone wanting to build confidence in English communication.</li>
          </ul>
        </div>
      </div>
      <button className="py-2 px-4 bg-teal-500 text-white font-bold rounded-md mt-8 hover:bg-teal-700 focus:outline-none" onClick={handleSubmit}>
        Go To Courses!
      </button>
    </div>
  );
};

export default Home;