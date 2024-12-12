import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
	const {title , company,applicationDeadline} = useLoaderData();
	return (
		<div>
<h3>job details</h3>
<h3>position: {title}</h3>
<p>Deadline: {applicationDeadline}</p>
<button className='btn btn-primary btn-outline'>Apply</button>
		</div>
	);
};

export default JobDetails;