const express = require('express');
const router = express.Router();

const Job = require('../../models/Job');

router.get('/test', (req, res) => res.send('job route testing!'));


router.get('/', (req, res) => {
  Job.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(404).json({ nojobsfound: 'No Jobs found' }));
});


router.get('/:id', (req, res) => {
  Job.findById({_id:req.params.id})
    .then(job => res.json(job))
    .catch(err => res.status(404).json({ nojobfound: 'No Job found' }));
});


router.post('/', (req, res) => {
  newjob=new Job({jobTitle:req.body.title,
    location:req.body.location,
    workingMode:req.body.mode,
    Requirement:req.body.requirement
  })
  newjob.save()
  
    .then((job) => res.json({ msg: 'Job added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this job' }));
});


router.put('/:id', (req, res) => {
  Job.findByIdAndUpdate({_id:req.params.id},{jobTitle:req.body.title,
    location:req.body.location,
    workingMode:req.body.mode,
    Requirement:req.body.requirement
  })
    .then((job) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


router.delete('/:id', (req, res) => {
  Job.findByIdAndRemove({_id:req.params.id})
    .then((job) => res.json({ mgs: 'Job entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a job' }));
});

module.exports = router;
