import express from 'express'
import { addExperience, addEducation, addSkill, addAchievement } from '../controllers/about.js'
import { getAllExperience, getAllEducation, getAllSkills, getAllAchievements } from '../controllers/about.js'

const router = express.Router();

router.post('/experience', addExperience)
router.post('/education', addEducation)
router.post('/skills', addSkill)
router.post('/achievements', addAchievement)

router.get('/getexperience', getAllExperience)
router.get('/geteducation', getAllEducation)
router.get('/getskills', getAllSkills)
router.get('/getachievements', getAllAchievements)

export default router;
