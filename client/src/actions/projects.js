import * as api from '../api'

export const addProject = (projectData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addProject(projectData)
        dispatch({ type: 'ADD_PROJECT', payload: data })
        navigate('/projects')
    }
    catch(err) {
        console.log(err)
    }
}

export const getAllProjects = () => async(dispatch) => {
    try {
        const { data } = await api.getAllProjects()
        dispatch({ type: 'FETCH_ALL_PROJECTS', payload: data})
    }
    catch(err) {
        console.log(err)
    }
}