const express = require('express')
const router = express.Router()
const { createProject ,getProject ,deleteProject,updateAProject ,getProjects} = require('../controllers/projects');


//get all the projects
router.get('/',getProjects)
//get single project
router.get('/:id',getProject)
// create a projcet
router.post('/',createProject)
// delete a project
router.delete('/:id',deleteProject)
//update a project
//router.patch('/:id', updateAProject)

module.exports = router
