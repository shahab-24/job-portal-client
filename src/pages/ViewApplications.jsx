import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {
    const applications = useLoaderData()
    console.log(applications)
	return (
		<div>
			<h3>view applications:{applications.length}</h3>
		</div>
	);
};

export default ViewApplications;