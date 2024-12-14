import React from "react";
import { FaBolt, FaClock, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const HotJobCard = ({ job }) => {
  // const  {
  //     "title": "DevOps Engineer",
  //     "location": "Baridhara, Dhaka",
  //     "jobType": "Full-Time",
  //     "category": "Engineering",
  //     "applicationDeadline": "2024-12-22",
  //     "salaryRange": {
  //       "min": 70000,
  //       "max": 100000,
  //       "currency": "bdt"
  //     } = {jobs}
  const {
    _id,
    company,
    title,
    description,
    company_logo,
    requirements,
    location,
    salaryRange,
    jobType,
    category,
    applicationDeadline,
    responsibilities,
  } = job;
  return (
    <div>
      <div className="">
        <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-lg bg-[#f8faff] dark:bg-gray-800 dark:text-white">
          {/* Top Section: Logo and Company */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={company_logo} // Replace with actual logo URL
                alt={title}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">{company}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaMapMarkerAlt className="mr-1" /> {location}
                </div>
              </div>
            </div>
            <FaBolt className="text-green-500 text-xl" />
          </div>

          {/* Job Title and Time */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-2">
              <FaLock /> Fulltime
              <FaClock /> 4 minutes ago
            </div>
          </div>

          {/* Job Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

          {/* Skills Section */}
          <div className="flex flex-wrap gap-2 mb-4">
            {requirements.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-500 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bottom Section: Salary and Apply Button */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Salary: {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
<h1>job card</h1>;
