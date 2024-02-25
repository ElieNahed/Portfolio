import React from "react";

const Experience = () => {
  return (
    <div className="bg-gray-100 py-12 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* First work experience entry */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
            <i className="fas fa-briefcase text-white"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Software Engineer at MISC.Net
            </h3>
            <p className="text-gray-600">Remote | 1 year</p>
            <p className="text-gray-700">Using React, Next.js, Tailwind CSS</p>
          </div>
        </div>
        {/* Second work experience entry */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
            <i className="fas fa-briefcase text-white"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Freelancer</h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, PHP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
