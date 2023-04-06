const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  workingMode: {
    type: String,
    required: true,
  },
  Requirement: {
    type: String,
  },
  
});

module.exports = Job = mongoose.model('job', JobSchema);
