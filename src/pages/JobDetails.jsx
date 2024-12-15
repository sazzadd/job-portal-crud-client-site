import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaIndustry,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

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
  const handleApplyNow = () => {
    alert("Application process initiated!"); // Replace this with your actual functionality
  };

  return (
    <div>
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold border-b pb-3 mb-4">
          Employment Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Industry */}
          <div className="flex items-center space-x-4">
            <FaIndustry className="text-blue-500 text-xl" />
            <div>
              <p className="font-semibold">Company name</p>
              <p className="text-gray-700">{company}</p>
            </div>
          </div>
          {/* Industry */}
          <div className="flex items-center space-x-4">
            <FaIndustry className="text-blue-500 text-xl" />
            <div>
              <p className="font-semibold">job Title</p>
              <p className="text-gray-700">{title}</p>
            </div>
          </div>
          {/* Job Level */}
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-blue-500 text-xl" />
            <div>
              <p className="font-semibold">Job Category</p>
              <p className="text-gray-700">{category}</p>
            </div>
          </div>
          {/* Salary */}
          <div className="flex items-center space-x-4">
            <FaMoneyBillWave className="text-green-500 text-xl" />
            <div>
              <p className="font-semibold">Salary</p>
              <p className="text-gray-700">
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </p>
            </div>
          </div>
          {/* Experience */}
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-blue-500 text-xl" />
            <div>
              <p className="font-semibold">Experience</p>
              <p className="text-gray-700">1 - 2 years</p>
            </div>
          </div>
          {/* Job Type */}
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-blue-500 text-xl" />
            <div>
              <p className="font-semibold">Job Type</p>
              <p className="text-gray-700">{jobType}</p>
            </div>
          </div>
          {/* Deadline */}
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-red-500 text-xl" />
            <div>
              <p className="font-semibold">Deadline</p>
              <p className="text-gray-700">{applicationDeadline}</p>
            </div>
          </div>
          {/* Updated */}
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-yellow-500 text-xl" />
            <div>
              <p className="font-semibold">Updated</p>
              <p className="text-gray-700">10/07/2022</p>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-purple-500 text-xl" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-700">{location}</p>
            </div>
          </div>
        </div>
        {/* Apply Now Button */}
        <div className="mt-6 ">
          <Link to={`/jobApply/${_id}`}>
            <button
              onClick={handleApplyNow}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
