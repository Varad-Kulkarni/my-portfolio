import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const addExperience = (experienceData) => API.post('/about/experience', experienceData)
export const addEducation = (educationData) => API.post('/about/education', educationData)
export const addSkill = (skillData) => API.post('/about/skills', skillData)
export const addAchievement = (achievementData) => API.post('/about/achievements', achievementData)

export const getAllExperience = () => API.get('/about/getexperience')
export const getAllEducation = () => API.get('/about/geteducation')
export const getAllSkills = () => API.get('/about/getskills')
export const getAllAchievements = () => API.get('/about/getachievements')

export const deleteExperience = (id) => API.delete(`/about/deleteexperience/${id}`)
export const deleteEducation = (id) => API.delete(`/about/deleteeducation/${id}`)
export const deleteSkill = (id) => API.delete(`/about/deleteskill/${id}`)
export const deleteAchievement = (id) => API.delete(`/about/deleteachievement/${id}`)

export const editExperience = (experienceData, id) => API.post(`/about/editexperience/${id}`, experienceData)
export const editEducation = (educationData, id) => API.post(`/about/editeducation/${id}`, educationData)
export const editSkill = (skillData, id) => API.post(`/about/editskills/${id}`, skillData)
export const editAchievement = (achievementData, id) => API.post(`/about/editachievements/${id}`, achievementData)

export const addProject = (projectData) => API.post('/projects/add', projectData)
export const getAllProjects = () => API.get('/projects/get')
export const deleteProject = (id) => API.delete(`/projects/delete/${id}`)
export const editProject = (projectData, id) => API.post(`/projects/edit/${id}`, projectData)