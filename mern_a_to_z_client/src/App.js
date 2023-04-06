import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateJob from './components/CreateJob';
import ShowJobList from './components/ShowJobList';
import ShowJobDetails from './components/ShowJobDetails';
import UpdateJobInfo from './components/UpdateJobInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowJobList />} />
          <Route path='/create-job' element={<CreateJob />} />
          <Route path='/edit-job/:id' element={<UpdateJobInfo />} />
          <Route path='/show-job/:id' element={<ShowJobDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
