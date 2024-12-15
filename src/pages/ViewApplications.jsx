import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {
    const applications = useLoaderData()
    console.log(applications)

    const handleUpdateStatus = (e, id) => {
        console.log(e.target.value, id)

        const data = {
             status: e.target.value
        }
        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


	return (
		<div>
			<h3>view applications:{applications.length}</h3>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
		<th>No</th>

        <th>Name</th>
        <th>Job</th>
        <th>Update Status</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {
		applications.map((job, index) =>  <tr key={index}>
			<th>{index + 1}</th>
                <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          
      
          <span className="badge badge-ghost badge-sm">{job.title}</span>
        </td>
        <td><select onChange={(e)=>handleUpdateStatus(e, job._id)} className="select select-bordered select-xs w-full max-w-xs " defaultVale={job.staus || "change status"}>
  <option selected>Change Status</option>
  <option>Under Review</option>
  <option>Set Interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
</td>
        <td>{job.applicant_email}</td>
        {/* <th>
<Link to={`/viewApplications/${job._id}`}>          <button className="btn btn-ghost btn-xs">View Applications</button></Link>
        </th> */}
      </tr>)
	  }
     
        </tbody>
    
  </table>
</div>
		</div>
	);
};

export default ViewApplications;