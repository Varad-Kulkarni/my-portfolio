import express from 'express'
import { addExperience, addEducation, addSkill, addAchievement } from '../controllers/about.js'
import { getAllExperience, getAllEducation, getAllSkills, getAllAchievements } from '../controllers/about.js'
import { deleteExperience, deleteEducation, deleteSkill, deleteAchievement } from '../controllers/about.js';
import { editExperience, editEducation, editSkills, editAchievement } from '../controllers/about.js';

const router = express.Router();

router.post('/experience', addExperience)
router.post('/education', addEducation)
router.post('/skills', addSkill)
router.post('/achievements', addAchievement)

router.get('/getexperience', getAllExperience)
router.get('/geteducation', getAllEducation)
router.get('/getskills', getAllSkills)
router.get('/getachievements', getAllAchievements)

router.delete('/deleteexperience/:id', deleteExperience)
router.delete('/deleteeducation/:id', deleteEducation)
router.delete('/deleteskill/:id', deleteSkill)
router.delete('/deleteachievement/:id', deleteAchievement)

router.post('/editexperience/:id', editExperience)
router.post('/editeducation/:id', editEducation)
router.post('/editskills/:id', editSkills)
router.post('/editachievements/:id', editAchievement)

export default router;
