import React, { useState } from 'react';
import image11 from '../../../assets/img/java.png'
const Courses = () => {
  // State for course list, search input value, and new course form fields
  const [courses, setCourses] = useState([
    { id: 1, name: 'business english', image: image11, weeks: 4, price: 800 },
    { id: 2, name: 'Course 2', image: 'https://example.com/image2.jpg', weeks: 6, price: 200 },
    { id: 3, name: 'Course 3', image: 'https://example.com/image3.jpg', weeks: 8, price: 300 },
  ]);
  const [search, setSearch] = useState('');
  const [newCourse, setNewCourse] = useState({ name: '', image: '', weeks: '', price: '' });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleNewCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };


  const addCourse = () => {
    setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
    setNewCourse({ name: '', image: '', weeks: '', price: '' });
    setShowAddForm(false);
  };

  const updatePrice = (id, newPrice) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, price: newPrice } : course)));
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };


  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const containerWidth = '100%';
  const containerHeight = '100vh';

  const gridTemplateColumns = `repeat(3, minmax(30%, 1fr))`;

  return (
    <div className="flex h-screen bg-gray-100 absolute right-0 top-0 w-[83%] overflow-y-scroll">
      <div className={`m-auto w-full max-w-xl bg-slate-100 rounded-xl p-10 ${containerWidth} ${containerHeight}`}>
        {/* Search bar and add course button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search courses"
              value={search}
              onChange={handleSearch}
              className="w-full shadow-md rounded-full p-3 focus:outline-none focus:ring-1 bg-stone-100 focus:ring-blue-300 focus:border-transparent"
            />
          </div>
          <button onClick={() => setShowAddForm(!showAddForm)} className="mx-2 rounded-full bg-blue-300 shadow-md hover:bg-blue-400 text-white font-bold h-10 w-10 flex items-center justify-center">
            +
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8">
            <input
              type="text"
              placeholder="Course name"
              name="name"
              value={newCourse.name}
              onChange={handleNewCourseChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-2"
            />
            <input
              type="text"
              placeholder="Image URL or upload image"
              name="image"
              value={newCourse.image}
              onChange={handleNewCourseChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-2"
            />
            <input
              type="number"
              placeholder="Weeks"
              name="weeks"
              value={newCourse.weeks}
              onChange={handleNewCourseChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-2"
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={newCourse.price}
              onChange={handleNewCourseChange}
              className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-4"
            />
            <button onClick={addCourse} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Course
            </button>
          </div>
        )}

        {/* Course list */}
        <div className="mt-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl shadow-md p-4 mb-4 flex flex-col cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <img src={course.image} alt={course.name} className="w-full h-40 object-fit mb-4 rounded-xl" />
              <div className="text-xl font-bold mb-2">{course.name}</div>
              <div className="mb-4">{course.weeks} weeks</div>
              {selectedCourse && selectedCourse.id === course.id && (
                <div className="flex justify-between">
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={selectedCourse.price}
                    onChange={(e) => setSelectedCourse({ ...selectedCourse, price: e.target.value })}
                    className="w-full shadow-md rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent mb-4"
                  />
                  <button onClick={() => updatePrice(course.id, selectedCourse.price)} className="bg-orange-600 text-white px-4 py-2 rounded-md">
                    Update Price
                  </button>
                </div>
              )}
              {selectedCourse && selectedCourse.id === course.id && (
                <button onClick={() => deleteCourse(course.id)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
