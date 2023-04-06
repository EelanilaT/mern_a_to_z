import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateJob = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title : '',
    location : '',
    mode : '',
    requirement : '',
  });

  const onChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://localhost:8082/api/jobs', job)
      .then((res) => {
        setJob({
          title : '',
          location : '',
          mode : '',
          requirement : '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateJob!');
      });
  };

  return (
    <div className='CreateJob'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Job List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Job</h1>
            <p className='lead text-center'>Create new Job</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Job Title'
                  name='title'
                  className='form-control'
                  value={job.title}
                  onChange={onChange}
                />
              </div>
              

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Location'
                  name='location'
                  className='form-control'
                  value={job.location}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Working Mode'
                  name='mode'
                  className='form-control'
                  value={job.mode}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Requirement'
                  name='requirement'
                  className='form-control'
                  value={job.requirement}
                  onChange={onChange}
                />
              </div>

              

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
