import React from 'react';

const JobsCard = ({jobs}) => {
	// const {_id, title, company_logo, category,description,jobType, location,salaryRange, company} = jobs;
	console.log(jobs)
	return (
		<div>
			<div className="card bg-base-100 border-2 border-red-400 shadow-xl">
  <figure>
    <img
      src={jobs.company_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">{jobs.title}</div>
    </h2>
    <p>{jobs.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{jobs.salaryRange?.min}</div>
      <div className="badge badge-outline">{jobs.company}</div>
    </div>
  </div>
</div>
			
		</div>
	);
};

export default JobsCard;