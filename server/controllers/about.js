import Experience from '../models/experience.js'
import Education from '../models/education.js'
import Skills from '../models/skills.js'
import Achievements from '../models/achievements.js'


export const addExperience = async(req, res) => {
    const experienceData = req.body;
    const experienceValue = new Experience(experienceData);

    try {
        await experienceValue.save();
        res.status(200).json("Experience added successfully...");
        console.log("Experience added succesfully...")
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllExperience = async(req, res) => {
    try {
        const experienceData = await Experience.find()
        res.status(200).json(experienceData)
        console.log('Experience data fetched successfully...')
    }
    catch(err) {
        res.status(400).json({message: err.message})
        console.log(err)
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

export const getAllEducation = async(req, res) => {
    try {
        const educationData = await Education.find();
        res.status(200).json(educationData)
        console.log('Education data fetched successfully...')
    }
    catch(err) {
        res.status(400).json({message: err.message})
        console.log(err)
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

export const getAllSkills = async(req, res) => {
    try {
        const skillsData = await Skills.find();
        res.status(200).json(skillsData)
        console.log('Skills data fetched successfully...');
    }
    catch(err) {
        res.status(200).json({message: err.message})
        console.log(err)
    }
}


export const addAchievement = async(req, res) => {
    const achievementData = req.body;
    const achievementValue = new Achievements(achievementData);

    try {
        await achievementValue.save();
        res.status(200).json("Achievement added successfully...");
        console.log("Achievement added succesfully...")
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllAchievements = async(req, res) => {
    try {
        const achievementsData = await Achievements.find();
        res.status(200).json(achievementsData)
        console.log('Achievements data fetched successfully...');
    }
    catch(err) {
        res.status(400).json({message: err.message})
        console.log(err)
    }
}