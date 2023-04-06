import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateJobInfo(props) {
  const [job, setJob] = useState({
    title : '',
    location : '',
    mode : '',
    requirement : '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/jobs/${id}`)
      .then((res) => {
        setJob({
          title: res.data.title,
          location: res.data.location,
          mode: res.data.mode,
          requirement: res.data.requirement,
         
        });
      })
      .catch((err) => {
        console.log('Error from UpdateJobInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: job.title,
      location: job.location,
      mode: job.mode,
      requirement: job.requirement,
      
    };

    axios
      .put(`http://localhost:8082/api/jobs/${id}`, data)
      .then((res) => {
        navigate(`/show-job/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateJobInfo!');
      });
  };

  return (
    <div className='UpdateJobInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Job List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Job</h1>
            <p className='lead text-center'>Update Job's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Job Title'
                name='title'
                className='form-control'
                value={job.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='isbn'>Location</label>
              <input
                type='text'
                placeholder='Location'
                name='location'
                className='form-control'
                value={job.location}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Working Mode</label>
              <input
                type='text'
                placeholder='Working Mode'
                name='mode'
                className='form-control'
                value={job.mode}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Requirement</label>
              <textarea
                type='text'
                placeholder='Requirement'
                name='requirement'
                className='form-control'
                value={job.requirement}
                onChange={onChange}
              />
            </div>
            <br />

            
            

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateJobInfo;
