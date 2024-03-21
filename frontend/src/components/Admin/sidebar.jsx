import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    { name: 'All courses', link: '/user/dashboard' },
      { name: 'My courses', link: '/User/mycourses' },
      
    { name: 'Enquiries', link: '/user/enquires'},
    { name: 'certificates', link: '/user/certificates'},
    { name: 'Profile', link: '/user/profile' },
    { name: 'Payment History', link: '/user/paymentHistory' },
    { name: 'Logout', link: '/' },
  ];

  const handleClick = (section) => {
    setSelectedSection(section.name === selectedSection ? null : section.name);
  };

  const isActive = (section) => {
    return section.name === selectedSection;
  };

  return (
    <div className="w-[12%] bg-teal-500 h-screen w-64 rounded-e-full">
        <div className="px-4 py-2 ">
            <Link to="/" className="text-white">
            <img src={logo} alt="Logo" className="h-14 w-auto justify-center items-center ml-15 mt-10 " />
            </Link>
        </div>
      <ul className="flex flex-col space-y-2 mt-10">
        {sections.map((section) => (
          <li
            key={section.name}
            className={`px-4 py-2 rounded-md text-white hover:bg-black ${
              isActive(section) ? 'bg-gray-700 text-white' : ''
            }`}
            onClick={()=> handleClick(section)}
          >
            <Link to={section.link} className={`w-full text-left ${isActive(section) ? 'text-yellow-500' : ''}`}>{section.name}</Link>
            {section.subSections && isActive(section) && (
              <ul className="ml-4">
                {section.subSections.map((subSection) => (
                  <li
                    key={subSection.name}
                    className="px-4 py-2 rounded-md text-white hover:bg-slate-400"
                  >
<Link to={subSection.link} className={`w-full text-left ${isActive(subSection) ? 'text-yellow-600' : ''}`}>{subSection.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;