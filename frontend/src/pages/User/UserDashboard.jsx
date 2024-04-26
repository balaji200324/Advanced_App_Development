// import React, { useState, useEffect } from 'react';
// import image1 from '../../assets/img/img1.avif';
// import image2 from '../../assets/img/img2.png';
// import image3 from '../../assets/img/img3.webp';
// import image4 from '../../assets/img/img4.jpeg';
// import image5 from '../../assets/img/img5.jpeg';
// import image6 from '../../assets/img/img6.jpg';


// const courseData = [
//   {
//     id: 1,
//     title: 'Course 1',
//     image: image1,
//   },
//   {
//     id: 2,
//     title: 'Course 2',
//     image: image2,
//   },
//   {
//     id: 3,
//     title: 'Course 3',
//     image: image3,
//   },
//   {
//     id: 4,
//     title: 'Course 4',
//     image: image4,
//   },
//   {
//     id: 5,
//     title: 'Course 5',
//     image: image5,
//   },
//   {
//     id: 6,
//     title: 'Course 6',
//     image: image6,
//   },
//   {
//     id: 7,
//     title: 'Course 7',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 8,
//     title: 'Course 8',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 9,
//     title: 'Course 9',
//     image: 'https://via.placeholder.com/300',
//   },
//   // Add more course data as needed
// ];

// const CourseDetails = ({ course, handlePayment }) => {
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [paymentFailure, setPaymentFailure] = useState(false);
//   const [showPaymentOptions, setShowPaymentOptions] = useState(false);

//   const handlePaymentClick = () => {
//     setShowPaymentOptions(true);
//   };

//   const handlePaymentOptionSelection = () => {
//     // Logic to handle payment option selection
//   };

//   const handlePay = () => {
//     // Reset payment status
//     setPaymentSuccess(false);
//     setPaymentFailure(false);

//     // Simulate payment process (can be replaced with actual payment gateway integration)
//     const paymentResult = Math.random() < 0.5 ? false : true; // Randomly simulate payment success or failure
//     if (paymentResult) {
//       setPaymentSuccess(true);
//       handlePayment(true);
//     } else {
//       setPaymentFailure(true);
//       handlePayment(false);
//     }
//   };

//   const handleBack = () => {
//     setShowPaymentOptions(false);
//   };
//   const handelebackto =()=>{
//     setShowCourseDetails(true);
//   }

//   const handlePaymentback = () => {
//     setShowPaymentOptions(false);
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//       <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
//       <p>Price: $XX.XX</p> {/* Replace XX.XX with the actual price */}
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
//         onClick={handlePaymentClick}
//       >
//         Pay Now
//       </button>
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
//         onClick={handelebackto}
//       >
//         Back
//       </button>
//       {paymentSuccess && <p className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4">Payment successful!</p>}
//       {paymentFailure && <p className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">Payment failed. Please try again.</p>}
//       {showPaymentOptions && (
//         <div>
//           <p>Select Payment Option:</p>
//           <div>
//             <button onClick={handlePaymentOptionSelection}>GPay</button>
//             <br/>
//             <button onClick={handlePaymentOptionSelection}>UPI</button>
//             <br/>
//             <button onClick={handlePaymentOptionSelection}>Credit/Debit Card</button>
//             <br/>
//           </div>
//           <button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-4" onClick={handlePay}>Pay</button>
//           <button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleBack}>Back</button>
//         </div>
//       )}
//     </div>
//   );
// };

// const Payment = ({ handlePayment }) => {
//   // No changes here
// };

// const UserDashboard = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [showCourseDetails, setShowCourseDetails] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [redirectToAllCourses, setRedirectToAllCourses] = useState(false);

//   const enrollCourse = (course) => {
//     if (!enrolledCourses.some((c) => c.id === course.id)) {
//       setEnrolledCourses([...enrolledCourses, course]);
//     }
//   };

//   const handlePayment = () => {

//   };

//   const handleShowCourseDetails = (course) => {
//     setSelectedCourse(course);
//     setShowCourseDetails(true);
//   };

//   useEffect(() => {
//     if (redirectToAllCourses) {
//     }
//   }, [redirectToAllCourses]);

//   return (
//     <div className="flex h-screen bg-grey-200 absolute right-0 top-0 w-[83%] overflow-y-scroll">
//       <div className="container mx-auto py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {courseData.map((course) => (
//             <div key={course.id} className="bg-black rounded-lg shadow-md overflow-hidden">
//               <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-2 text-white">{course.title}</h2>
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
//                   onClick={() => handleShowCourseDetails(course)}
//                 >
//                   Enroll
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {showCourseDetails && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-24 max-w-md">
//             <CourseDetails course={selectedCourse} handlePayment={handlePayment} />
//             <Payment handlePayment={handlePayment} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyCoursesPage from './mycourses';
import image1 from '../../assets/img/img1.avif';
import image2 from '../../assets/img/img2.png';
import image3 from '../../assets/img/img3.webp';
import image4 from '../../assets/img/img4.jpeg';
import image5 from '../../assets/img/img5.jpeg';
import image6 from '../../assets/img/img6.jpg';

const courseData = [
  {
    id: 1,
    title: 'Course 1',
    image: image1,
  },
  {
    id: 2,
    title: 'Course 2',
    image: image2,
  },
  {
    id: 3,
    title: 'Course 3',
    image: image3,
  },
  {
    id: 4,
    title: 'Course 4',
    image: image4,
  },
  {
    id: 5,
    title: 'Course 5',
    image: image5,
  },
  {
    id: 6,
    title: 'Course 6',
    image: image6,
  },
];

const UserDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const enrollCourse = (course) => {
    if (!enrolledCourses.some((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
      navigate('/user/mycourses'); // Navigate to My Courses page upon enrollment
    }
  };

  return (
    <div className="flex h-screen bg-grey-200 absolute right-0 top-0 w-[83%] overflow-y-scroll">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div key={course.id} className="bg-black rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">{course.title}</h2>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => enrollCourse(course)}
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {enrolledCourses.length > 0 && <MyCoursesPage enrolledCourses={enrolledCourses} />} {/* Render MyCoursesPage only if there are enrolled courses */}
    </div>
  );
};

export default UserDashboard;
