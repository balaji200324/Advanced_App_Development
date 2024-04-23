import React from 'react';
import { useState } from 'react';
import logo from '../../assets/img/logo.png'
import signature from '../../assets/img/Signature.png'
import sign from '../../assets/img/sign.png'

const Certification = () => {
  const [certificateData, setCertificateData] = useState({
    companyName: 'Future Think',
    logoUrl: logo,
    userName: 'balaji',
    courseName: 'spoken english',
    signatureUrl1: signature,
    signatureUrl2: sign,
  });

  const handleDownload = () => {
    // You can implement the download functionality here
    // For simplicity, let's just simulate downloading
    alert('Downloading certificate...');
  };

  return (
    <div className="flex h-screen bg-grey-200 absolute right-0 top-0 w-[83%] overflow-y-scroll">
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Certification</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <img src={certificateData.logoUrl} alt="Company Logo" className="h-12" />
          <div className="text-lg font-semibold">{certificateData.companyName}</div>
        </div>
        <div className="text-center text-3xl font-bold mb-6">Certificate of Completion</div>
        <div className="mb-6">
          This certifies that <span className="font-semibold underline">{certificateData.userName}</span> has successfully
          completed the course <span className="font-semibold">{certificateData.courseName}</span>.
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <img src={certificateData.signatureUrl1} alt="Signature 1" className="h-16" />
            <div className="text-sm">Signature</div>
          </div>
          <div>
            <img src={certificateData.signatureUrl2} alt="Signature 2" className="h-16" />
            <div className="text-sm">Signature</div>
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Download Certificate
        </button>
      </div>
    </div>
    </div>
  );
};

export default Certification;
