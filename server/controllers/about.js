import Experience from '../models/experience.js'
<<<<<<< HEAD
=======
import Education from '../models/education.js'
import Skills from '../models/skills.js'
import Achievements from '../models/achievements.js'

>>>>>>> d70f7ef6541644ba2175e20c2fbcb87fa11c8312

export const addExperience = async(req, res) => {
    const experienceData = req.body;
    const experienceValue = new Experience(experienceData);

    try {
        await experienceValue.save();
        res.status(200).json("Experience added successfully...");
<<<<<<< HEAD
=======
        console.log("Experience added succesfully...")
    }
    catch(err) {
        console.log(err);
    }
}


export const addEducation = async(req, res) => {
    const educationData = req.body;
    const educationValue = new Education(educationData);

    try {
        await educationValue.save();
        res.status(200).json("Education added successfully...");
        console.log("Education added succesfully...")
    }
    catch(err) {
        console.log(err);
    }
}


export const addSkill = async(req, res) => {
    const skillData = req.body;
    const skillValue = new Skills(skillData);

    try {
        await skillValue.save();
        res.status(200).json("Skill added successfully...");
        console.log("Skill added succesfully...")
    }
    catch(err) {
        console.log(err);
    }
}


export const addAchievement = async(req, res) => {
    const achievementData = req.body;
    const achievementValue = new Achievements(achievementData);

    try {
        await achievementValue.save();
        res.status(200).json("Achievement added successfully...");
        console.log("Achievement added succesfully...")
>>>>>>> d70f7ef6541644ba2175e20c2fbcb87fa11c8312
    }
    catch(err) {
        console.log(err);
    }
}