import express from 'express'

import { addProject, getAllProjects } from '../controllers/projects.js'

const router = express.Router()

router.post('/add', addProject)
router.get('/get', getAllProjects)

export default router