import React from 'react';
import image1 from '../assets/img/img1.avif'
import image2 from '../assets/img/img2.png'
import image3 from '../assets/img/img3.webp'
import image4 from '../assets/img/img4.jpeg'
import image5 from '../assets/img/img5.jpeg'
import image6 from '../assets/img/img6.jpg'
import Footer from '../components/Public/Footer';


const courses = [
  {
    title: 'English for Beginners (A1 & A2)',
    description: 'Master the fundamentals of English speaking, listening, reading, and writing.',
    image: image1,
    level: 'Beginner',
    duration: '8 weeks',
    price: '$199',
  },
  {
    title: 'General English (B1 & B2)',
    description: 'Develop your fluency and accuracy for everyday and professional use.',
    image: image2,
    level: 'Intermediate',
    duration: '12 weeks',
    price: '$249',
  },
  {
    title: 'Advanced English (C1 & C2)',
    description: 'Refine your language skills and prepare for academic or professional settings.',
    image: image3,
    level: 'Advanced',
    duration: '16 weeks',
    price: '$299',
  },
  {
    title: 'Business English (Intermediate)',
    description: 'Enhance your English communication skills for the business environment.',
    image: image4,
    level: 'Intermediate',
    duration: '10 weeks',
    price: '$279',
  },
  {
    title: 'IELTS Preparation',
    description: 'Prepare for the IELTS exam with comprehensive study materials and practice tests.',
    image: image5,
    level: 'Intermediate',
    duration: '6 weeks',
    price: '$229',
  },
  {
    title: 'TOEFL Exam Mastery',
    description: 'Gain proficiency in all sections of the TOEFL exam for academic purposes.',
    image: image6,
    level: 'Advanced',
    duration: '14 weeks',
    price: '$319',
  },
];

const Courses = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.title} className="rounded-md shadow-sm overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{course.title}</h3>
              <p className="text-gray-600 line-clamp-2">{course.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">{course.level}</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
                <span className="text-sm font-bold">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Courses;