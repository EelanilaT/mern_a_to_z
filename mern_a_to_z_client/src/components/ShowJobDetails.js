import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowJobDetails(props) {
  const [job, setJob] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowJobDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/jobs/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowJobDetails_deleteClick');
      });
  };

  const JobItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Job Title</td>
            <td>{job.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Location</td>
            <td>{job.location}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Working Mode</td>
            <td>{job.mode}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Requirement</td>
            <td>{job.requirement}</td>
          </tr>

        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowJobDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Job List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Job's Record</h1>
            <p className='lead text-center'>View Job's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{JobItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(job._id);
              }}
            >
              Delete Job
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-job/${job._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowJobDetails;
