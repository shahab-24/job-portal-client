import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const [jobApplication, setJobApplications] = useState();
//   const { user } = useContext(AuthContext);
const {user} = useAuth()
  const { id } = useParams();

  // console.log(id);

  const handleJobApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user?.email,
      linkedin,
      github,
      resume,
    };
    // console.log(jobApplication);

  

    fetch("http://localhost:3000/job-applications",{
		method: "POST",
		headers: {
			"content-type" : "application/json"
		},
		body: JSON.stringify(jobApplication)
		
	})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      
        // if (data.insertedId) {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Your Job has been applied successfully",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        // }
        

      });
    
  };
  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-center">Apply now!</h1>
      </div>

      <form onSubmit={handleJobApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin URL</span>
          </label>
          <input
            type="URL"
            placeholder="Linkedin URL"
            name="linkedin"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="URL"
            placeholder="Github URL"
            name="github"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Resume URL</span>
          </label>
          <input
            type="URL"
            placeholder="Resume URL"
            name="resume"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
