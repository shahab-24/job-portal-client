
import React from 'react';
import { Link } from 'react-router-dom';

const JobsCard = ({jobs}) => {
	const {_id, title, company_logo, category,description,jobType, location,salaryRange, company, requirements} = jobs;
	console.log(jobs)
	return (
		<div>
			<div className="card bg-base-100 border border-cyan-400 shadow-xl  h-[450px]">
        <div className='flex gap-2 items-center justify-center p-2'>
        <figure>
    <img className='w-[80px]'
      src={company_logo}
      alt="Shoes" />
  </figure>
          <div>
            <h4>
              {company} 
            </h4>
            {location}
            
          </div>
        </div>

  <div className="card-body flex-grow ">
    <h2 className="card-title">
      
      <div className="badge badge-secondary">{title}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"> Salary: ${salaryRange?.min}-${salaryRange.max}</div>
      <div className="flex gap-2 flex-wrap ">{ requirements.map(requirement => <p className='text-center border px-2 bg-blue-100 text-black rounded-lg'>{requirement}</p>)

        }
          </div>
          <Link to={`/jobs/${_id}`}>
          <div className='badge badge-outline py-4'>
    <button className='w-full px-4'>Apply</button>
    </div></Link>
      
      
    </div>

    

  </div>
  
</div>

			
		</div>
	);
};

export default JobsCard;