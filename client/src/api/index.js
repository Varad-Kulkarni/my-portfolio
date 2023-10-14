import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const addExperience = (experienceData) => API.post('/about/experience', experienceData)