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