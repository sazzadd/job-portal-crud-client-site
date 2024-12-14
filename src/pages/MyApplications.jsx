import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  console.log(jobs);

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        My Applications ({jobs.length})
      </h1>

      {jobs.length === 0 ? (
        <div className="text-center text-gray-500">No applications found. Start applying for your dream job!</div>
      ) : (
        <div className="overflow-x-auto shadow-lg bg-white rounded-lg">
          <table className="table-auto w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left text-blue-700">#</th>
                <th className="px-4 py-2 text-left text-blue-700">Job Title</th>
                <th className="px-4 py-2 text-left text-blue-700">Category</th>
                <th className="px-4 py-2 text-left text-blue-700">Type</th>
                <th className="px-4 py-2 text-blue-700">Details</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={job._id}
                  className={`hover:bg-blue-50 ${index % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
                >
                  <td className="border px-4 py-3 text-gray-700 text-center">{index + 1}</td>
                  <td className="border px-4 py-3 text-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14">
                          <img src={job.company_logo} alt={job.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-blue-800">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="border px-4 py-3 text-gray-700">{job.category}</td>
                  <td className="border px-4 py-3 text-gray-700">{job.jobType}</td>
                  <td className="border px-4 py-3 text-center">
                    <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
