import express from 'express'

<<<<<<< HEAD
import { addExperience } from '../controllers/about.js'
=======
import { addExperience, addEducation, addSkill, addAchievement } from '../controllers/about.js'
>>>>>>> d70f7ef6541644ba2175e20c2fbcb87fa11c8312

const router = express.Router();

router.post('/experience', addExperience)
<<<<<<< HEAD
router.post('/education', () => {})
router.post('/skills', () => {})
router.post('/achievements', () => {})
=======
router.post('/education', addEducation)
router.post('/skills', addSkill)
router.post('/achievements', addAchievement)
>>>>>>> d70f7ef6541644ba2175e20c2fbcb87fa11c8312

export default router;
