import Projects from '../models/projects.js'

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