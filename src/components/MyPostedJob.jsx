import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]); // ডিফল্ট মান হিসেবে খালি অ্যারে
  const { user } = useAuth();

  useEffect(() => {
    // API থেকে ডেটা ফেচ করা
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setJobs(data); // ডেটা সঠিক হলে সেট করুন
        } else {
          console.error("Invalid data format:", data);
          setJobs([]); // যদি ডেটা সঠিক ফরম্যাটে না থাকে
        }
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs([]); // ত্রুটির ক্ষেত্রে খালি অ্যারে সেট করুন
      });
  }, [user.email]);

  return (
    <div>
      <h1 className="text-3xl">My Posted Jobs {jobs.length}</h1>
      {jobs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Dead Line</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>Blue</td>
                </tr>
              ))}
              {/* row 1 */}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No jobs posted yet!</p>
      )}
    </div>
  );
};

export default MyPostedJob;
