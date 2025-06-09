import React from "react";

const experience = [
  {
    id: 1,
    title: "Operations Director",
    company: "Vivem",
    period: "Jun 2025 - Present",
    description: "Leading daily operations and team coordination. Enhancing internal efficiency and workflows.",
  },
  {
    id: 2,
    title: "Sales Associate",
    company: "Azzrak (Saudi Market)",
    period: "Dec 2024 - Present",
    description: "Customer negotiation and closing deals. Fast-paced, goal-oriented sales environment.",
  },
  {
    id: 3,
    title: "Recruiter",
    company: "Black Hands",
    period: "Apr 2024 - Oct 2024",
    description: "Talent sourcing and candidate engagement. Task management and communication skills.",
  },
  {
    id: 4,
    title: "Sales Associate",
    company: "General Experience",
    period: "Jan 2019 - Dec 2023",
    description: "5 years of customer service and inventory management. Target-driven performance and store optimization.",
  },
];

const ExperienceSection = () => (
  <section className="bg-black text-white py-20" id="experience">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map(({ id, title, company, period, description }) => (
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
