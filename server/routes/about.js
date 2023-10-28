import express from 'express'

import { addExperience, addEducation, addSkill, addAchievement } from '../controllers/about.js'

const router = express.Router();

router.post('/experience', addExperience)
router.post('/education', addEducation)
router.post('/skills', addSkill)
router.post('/achievements', addAchievement)

export default router;
