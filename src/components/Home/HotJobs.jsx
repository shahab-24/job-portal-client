import { useEffect, useState } from "react";
import JobsCard from "../../Common/JobsCard";


const HotJobs = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/jobs')
		.then(res => res.json())
		.then(data => setJobs(data))
	},[])
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 p-2 flex-wrap border-2 border-orange-500">
				{
					jobs.slice(0,8).map(job => <JobsCard key={jobs._id} jobs={job}></JobsCard> )
				}
			</div>
			
		</div>
	);
};

export default HotJobs;