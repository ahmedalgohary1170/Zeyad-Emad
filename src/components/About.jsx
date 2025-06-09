import React from "react";
import AboutImage from "../assets/image.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              A student at the Faculty of Agriculture, Department of Soil and Water Sciences. Founder of the 'Bio Lacto' project and a junior entrepreneur. Passionate about scientific research and personal development. Skilled in teamwork, problem-solving, communication, and performing under pressure.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Education</h3>
              <p className="text-lg">Bachelor of Agriculture – Soil and Water Sciences</p>
              <p className="text-gray-400">Mansoura University | Sept 2022 – Jul 2026</p>
            </div>
            <div className="space-y-4">

              {[
                { label: "Microsoft Excel", width: "w-10/12" },
                { label: "Microsoft Word", width: "w-11/12" },
                { label: "Microsoft PowerPoint", width: "w-11/12" },
                { label: "Photoshop", width: "w-9/12" },
                { label: "InDesign", width: "w-9/12" },
                { label: "Sales & Negotiation", width: "w-full" },
                { label: "Leadership", width: "w-10/12" },
                { label: "Time Management", width: "w-11/12" },
                { label: "Teamwork", width: "w-full" },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center">
                  <label className="w-full sm:w-2/12 mb-1 sm:mb-0 text-gray-200">
                    {skill.label}
                  </label>
                  <div className="w-full sm:grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.width}`}
                    ></div>
                  </div>
                </div>
              ))}

            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-between text-center gap-6 sm:gap-0">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p>Years Sales Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                  4+
                </h3>
                <p>Entrepreneurial Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
