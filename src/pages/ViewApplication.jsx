import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();
  // console.log(applications);
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };

    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "update status successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          alert("Failed to update status.");
        }
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          View Applications ({applications.length})
        </h1>

        {applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                    #
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                    Email
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">
                    Update Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr
                    key={app._id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      {app.apllicant_email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <select
                        onChange={(e) => handleStatusUpdate(e, app._id)}
                        defaultValue={app.status || ""}
                        className="select select-bordered select-sm w-full max-w-xs"
                      >
                        <option disabled selected>
                          Change status
                        </option>
                        <option>Under Review</option>
                        <option>Set Interview</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplication;
