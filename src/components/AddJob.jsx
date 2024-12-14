import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddJob = () => {
  // const { user } = useAuth;
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());
    console.log("Job Data:", jobData);
    const { min, max, currency, ...newJob } = jobData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    // send data to server
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "job addeed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Job Application Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job title"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Job Type
            </label>
            <select
              name="jobType"
              className="select select-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select job type
              </option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Job Category
            </label>
            <select
              name="jobCategory"
              className="select select-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select job category
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Software Development">Software Development</option>
              <option value="Creative Arts">Creative Arts</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Job Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job description"
            required
          ></textarea>
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Requirements
          </label>
          <textarea
            name="requirements"
            className="textarea textarea-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write each requirement in a new line"
            required
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Responsibilities
          </label>
          <textarea
            name="responsibilities"
            className="textarea textarea-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write each responsibility in a new line"
            required
          ></textarea>
        </div>

        {/* Status
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Status
          </label>
          <select
            name="status"
            className="select select-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HR Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              HR Email
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter HR email"
              required
            />
          </div>

          {/* HR Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter HR name"
              required
            />
          </div>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Salary Range Min
            </label>
            <input
              type="number"
              name="min"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter min salary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Salary Range Max
            </label>
            <input
              type="number"
              name="max"
              className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter max salary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Salary Currency
            </label>
            <select
              name="currency"
              className="select select-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select currency
              </option>
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CNY">CNY</option>
              <option value="INR">INR</option>
              <option value="SGD">SGD</option>
            </select>
          </div>
        </div>

        {/* Company Logo */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600">
            Company Logo URL
          </label>
          <input
            type="text"
            name="company_logo"
            className="input input-bordered w-full mt-2 p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company logo URL"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full mt-6 p-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
