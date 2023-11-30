import mongoose from 'mongoose'

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
    }
    catch(err) {
        res.status(400).json({message: err.message})
        console.log(err)
    }
}

export const deleteExperience = async(req, res) => {
    const { id:_id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json("requested experience not found...")
    }

    try {
        await Experience.findByIdAndRemove(_id)
        res.status(200).json('experience deleted successfully...')
        console.log(`experience of id ${_id} added succesfully...`)
    }
    catch(err) {
        console.log(err)
    }
}

export const editExperience = async(req, res) => {
    const { id:_id } = req.params
    const { title, company, fromDate, toDate, details } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('experience unavailable...')
    }
    
    try {
        const updatedExperience = await Experience.findByIdAndUpdate( _id, { $set: { 'title': title, 'company': company, 'fromDate': fromDate, 'toDate': toDate, 'details': details }}, { new: true })
        res.status(200).json(updatedExperience)
        console.log('experience updated successfully...')
    }
    catch(error) {
        res.status(405).send(error)
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
    }
    catch(err) {
        res.status(400).json({message: err.message})
        console.log(err)
    }
}

export const deleteEducation = async(req, res) => {
    const { id:_id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json("requested education not found...")
    }

    try {
        await Education.findByIdAndRemove(_id)
        res.status(200).json('education deleted successfully...')
        console.log(`education of id ${_id} deleted successfully...`)
    }
    catch(err) {
        console.log(err)
    }
}

export const editEducation = async(req, res) => {
    const { id:_id } = req.params
    const { institute, degree, marks, fromDate, toDate, description } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('education unavailable...')
    }
    
    try {
        const updatedEducation = await Education.findByIdAndUpdate( _id, { $set: { 'institute': institute, 'degree': degree, 'marks': marks, 'fromDate': fromDate, 'toDate': toDate, 'description': description }}, { new: true })
        res.status(200).json(updatedEducation)
        console.log('education updated successfully...')
    }
    catch(error) {
        res.status(405).send(error)
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
    }
    catch(err) {
        res.status(200).json({message: err.message})
        console.log(err)
    }
}

export const deleteSkill = async(req, res) => {
    const { id:_id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json("requested skill not found...")
    }

    try {
        await Skills.findByIdAndRemove(_id)
        res.status(200).json('skill deleted successfully...')
        console.log(`skill of id ${_id} deleted successfully...`)
    }
    catch(err) {
        console.log(err)
    }
}

export const editSkills = async(req, res) => {
    const { id:_id } = req.params
    const { skill } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('experience unavailable...')
    }
    
    try {
        const updatedSkill = await Skills.findByIdAndUpdate( _id, { $set: { 'skill': skill }}, { new: true })
        res.status(200).json(updatedSkill)
        console.log('skill updated successfully...')
    }
    catch(error) {
        res.status(405).send(error)
    }
}


export const addAchievement = async(req, res) => {
    const achievementData = req.body;
    const achievementValue = new Achievements(achievementData);

    try {
        await achievementValue.save();
        res.status(200).json("Achievement added successfully...");
        console.log('achievement added successfully...')
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllAchievements = async(req, res) => {
    try {
        const achievementsData = await Achievements.find();
        res.status(200).json(achievementsData)
    }
    catch(err) {
        res.status(400).json({message: err.message})
        console.log(err)
    }
}

export const deleteAchievement = async(req, res) => {
    const { id:_id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json("requested achievement not found...")
    }

    try {
        await Achievements.findByIdAndRemove(_id)
        res.status(200).json('achievement deleted successfully...')
        console.log(`achievement of id ${_id} added succesfully...`)
    }
    catch(err) {
        console.log(err)
    }
}

export const editAchievement = async(req, res) => {
    const { id:_id } = req.params
    const { achievement } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('achievement unavailable...')
    }
    
    try {
        const updatedAchievement = await Achievements.findByIdAndUpdate( _id, { $set: { 'achievement': achievement }}, { new: true })
        res.status(200).json(updatedAchievement)
        console.log('achievement updated successfully...')
    }
    catch(error) {
        res.status(405).send(error)
    }
}