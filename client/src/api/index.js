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

export const addProject = (projectData) => API.post('/projects/add', projectData)
export const getAllProjects = () => API.get('projects/get')