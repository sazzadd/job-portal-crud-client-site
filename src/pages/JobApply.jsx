import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleSubmitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      apllicant_email: user.email,
      linkdin,
      github,
      resume,
    };
    fetch("https://server-site-job-portal.vercel.app/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Apllied successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //   form.reset();
          navigate("/MyApplications");
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl">Job Apply Form</h1>
      <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmitJobApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkdIn url</span>
            </label>
            <input
              name="linkdin"
              type="url"
              placeholder="LinkdIn url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Github</span>
            </label>
            <input
              name="github"
              type="url"
              placeholder="GitHub url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume url</span>
            </label>
            <input
              name="resume"
              type="url"
              placeholder="resume url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-400">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
