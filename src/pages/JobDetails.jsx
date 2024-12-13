import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
	const {_id, title , company,applicationDeadline} = useLoaderData();
	return (
		<div>
<h3>job details</h3>
<h3>position: {title}</h3>
<p>Deadline: {applicationDeadline}</p>
<Link to={`/jobApply/${_id}`}>
<button className='btn btn-primary btn-outline'>Apply Now</button></Link>
		</div>
	);
};

export default JobDetails;