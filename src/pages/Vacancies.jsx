import React from "react";

const vacancies = [
  {
    title: "General Helper",
    image: "/images/general-helper.jpg",
    tasks: ["Assist skilled workers", "Handle material movement"]
  },
  {
    title: "CNC Engineer",
    image: "/images/cnc-engineer.jpg",
    tasks: ["Operate CNC machines", "Maintain accuracy"]
  },
  {
    title: "Welder",
    image: "/images/welder.jpg",
    tasks: ["Perform welding", "Ensure safety standards"]
  },
  {
    title: "Electrician",
    image: "/images/electrician.jpg",
    tasks: ["Install wiring", "Maintain circuits"]
  },
  {
    title: "Plumber",
    image: "/images/plumber.jpg",
    tasks: ["Fix leakages", "Install pipes"]
  },
  {
    title: "Fabricator",
    image: "/images/fabricator.jpg",
    tasks: ["Cut and bend metal", "Assemble structures"]
  },
  {
    title: "Driver",
    image: "/images/driver.jpg",
    tasks: ["Transport goods", "Follow road safety"]
  },
  {
    title: "Painter",
    image: "/images/painter.jpg",
    tasks: ["Surface prep", "Apply paint coatings"]
  },
  {
    title: "Mason",
    image: "/images/mason.jpg",
    tasks: ["Lay bricks", "Plaster walls"]
  },
  {
    title: "Carpenter",
    image: "/images/carpenter.jpg",
    tasks: ["Cut wood", "Assemble furniture"]
  }
];

export default function Vacancies() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Current Vacancies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vacancies.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="h-48 w-full">
              <img
                src={job.image}
                alt={job.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h2>
              <ul className="text-gray-600 text-sm mb-4 list-disc list-inside">
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              <a
                href="/apply"
                className="block text-center bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}