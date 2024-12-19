import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://server-site-job-portal.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          console.error("Invalid data format:", data);
          setJobs([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setLoading(false);
      });
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center animate-pulse">
        My Posted Jobs ({jobs.length})
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      ) : jobs.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  #
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Job Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Deadline
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Applications
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-blue-50 transition duration-200"
                >
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {job.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {job.applicationDeadline}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">
                    {job.applicationCount}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <Link to={`/viewApplications/${job._id}`}>
                      <button className="px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow-md focus:outline-none transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">
          You have not posted any jobs yet!
        </p>
      )}
    </div>
  );
};

export default MyPostedJob;
