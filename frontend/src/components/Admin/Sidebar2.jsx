import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'

const Sidebar2 = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    { name: 'Dashboard', link: '/admin/dashboard' },
    { name: 'Admin List', link: '/admin/AdminList' },
    { name: 'User List', link: '/admin/userlist' },  
    { name: 'Enquiries', link: '/admin/enquires'},
    { name: 'Courses', link: '/admin/courses'},
    { name: 'Profile', link: '/admin/profile' },
    { name: 'Payment History', link: '/admin/paymentHistory' },
    { name: 'Logout', link: '/' },
  ];

  const handleClick = (section) => {
    setSelectedSection(section.name === selectedSection ? null : section.name);
  };

  const isActive = (section) => {
    return section.name === selectedSection;
  };

  return (
    <div className="bg-black h-screen w-64">
        <div className="px-4 py-2 ">
            <Link to="/" className="text-white">
            <img src={logo} alt="Logo" className="h-14 w-auto justify-center items-center ml-20 mt-5" />
            </Link>
        </div>
      <ul className="flex flex-col space-y-2 mt-10">
        {sections.map((section) => (
          <li
            key={section.name}
            className={`px-4 py-2 rounded-md text-white hover:bg-blue-600 ${
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

export default Sidebar2;