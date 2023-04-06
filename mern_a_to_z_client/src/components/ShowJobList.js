import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import JobCard from './JobCard';

function ShowJobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/jobs')
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowJobList');
      });
  }, []);

  const jobList =
    jobs.length === 0
      ? 'there is no job record!'
      : jobs.map((job, k) => <JobCard job={job} key={k} />);

  return (
    <div className='ShowJobList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Jobs List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-job'
              className='btn btn-outline-warning float-right'
            >
              + Add New Job
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{jobList}</div>
      </div>
    </div>
  );
}

export default ShowJobList;
