import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {
    const applications = useLoaderData()
    console.log(applications)
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
        <th>Application Deadline</th>
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
              <div className="font-bold">{job.tile}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          
      
          <span className="badge badge-ghost badge-sm">{job.applicationCount}</span>
        </td>
        <td>{job.applicationDeadline}</td>
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