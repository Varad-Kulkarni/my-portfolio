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
        console.log('Projects data fetched successfully...');
    }
    catch(err) {
        res.status(400).json({message: err.message});
        console.log(err);
    }
}