import React from "react";
import userData from "../userData";

const ExperienceSection = () => (
  <section className="bg-black text-white py-20" id="experience">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {userData.experience.map(({ id, title, company, period, description }) => (
          <div
            key={id}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            <div>
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {title}
              </h3>
              <p className="mt-1 text-green-300 font-medium">{company}</p>
              <p className="mt-1 text-gray-400 text-sm italic">{period}</p>
              <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block font-semibold text-green-400 hover:text-blue-500"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
