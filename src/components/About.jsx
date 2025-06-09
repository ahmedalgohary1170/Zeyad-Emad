import React from "react";
import userData from "../userData";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={userData.profileImage}
            alt={userData.name}
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 mt-6"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              {userData.bio}
            </p>
            
            {/* Education Section */}
            <div className="mb-10 bg-gray-900 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                Education
              </h3>
              <div className="ml-2">
                <p className="text-lg font-medium">{userData.education.degree}</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                  {userData.education.institution} | {userData.education.period}
                </p>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {userData.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="mb-1 text-gray-200 font-medium">
                      {skill.label}
                    </label>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.width}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 text-center">
              {userData.stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500">
                    {stat.value}
                  </h3>
                  <p className="mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
