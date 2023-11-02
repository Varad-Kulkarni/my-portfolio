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