import express from 'express'

import { addExperience } from '../controllers/about.js'

const router = express.Router();

router.post('/experience', addExperience)
router.post('/education', () => {})
router.post('/skills', () => {})
router.post('/achievements', () => {})

export default router;
