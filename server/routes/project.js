import express from 'express'

import { addProject } from '../controllers/projects.js'

const router = express.Router()

router.post('/add', addProject)

export default router