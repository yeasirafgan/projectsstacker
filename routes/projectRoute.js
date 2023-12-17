const express = require('express');
const { postProject, getAllProjects, getSingleProject, updateProject, deleteProject } = require('../controllers/projectController');


// router
const router = express.Router();

// routes
router.get('/', getAllProjects);
router.get('/:id', getSingleProject)
router.post('/', postProject)
router.patch('/:id', updateProject)
router.delete('/:id', deleteProject)









module.exports = router;
