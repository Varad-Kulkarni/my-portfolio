import Projects from '../models/projects.js'
import mongoose from 'mongoose'

export const addProject = async(req, res) => {
    const projectData = req.body
    const projectValue = new Projects(projectData)

    try {
        await projectValue.save()
        res.status(200).json('Project added successfully...')
        console.log('project added successfully...')
    }
    catch(err) {
        console.log(err)
    }
}

export const getAllProjects = async(req, res) => {
    try {
        const projectsData = await Projects.find()
        res.status(200).json(projectsData)
    }
    catch(err) {
        res.status(400).json({message: err.message});
        console.log(err);
    }
}

export const deleteProject = async(req, res) => {
    const { id:_id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json("requested project not found...")
    }

    try {
        await Projects.findByIdAndRemove(_id)
        res.status(200).json('project deleted successfully...')
    }
    catch(err) {
        console.log(err)
    }
}

export const editProjects = async(req, res) => {
    const { id:_id } = req.params
    const { title, description, fromDate, toDate, details, tags } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('projects unavailable...')
    }
    
    try {
        const updatedProjects = await Projects.findByIdAndUpdate( _id, { $set: { 'title': title, 'description': description, 'fromDate': fromDate, 'toDate': toDate, 'details': details, 'tags': tags }}, { new: true })
        res.status(200).json(updatedProjects)
        console.log('projects updated successfully...')
    }
    catch(error) {
        res.status(405).send(error)
    }
}