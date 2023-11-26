import express from 'express'

import { addProject, getAllProjects, deleteProject } from '../controllers/projects.js'

const router = express.Router()

router.post('/add', addProject)
router.get('/get', getAllProjects)
router.delete('delete/:id', deleteProject)

export default router