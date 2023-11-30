import express from 'express'

import { addProject, getAllProjects, deleteProject, editProjects } from '../controllers/projects.js'

const router = express.Router()

router.post('/add', addProject)
router.get('/get', getAllProjects)
router.delete('/delete/:id', deleteProject)
router.post('/edit/:id', editProjects)

export default router