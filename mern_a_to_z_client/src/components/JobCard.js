import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const JobCard = (props) => {
  const job = props.job;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Jobs'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-job/${job._id}`}>{job.title}</Link>
        </h2>
        <h3>{job.location}</h3>
        <p>{job.mode}</p>
      </div>
    </div>
  );
};

export default JobCard;
