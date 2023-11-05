import React from 'react'
import * as api from '../api'

export const addExperience = (experienceData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addExperience(experienceData);
        dispatch({ type: 'ADD_EXPERIENCE', payload: data });
        dispatch(getAllExperience())
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllExperience = () => async(dispatch) => {
    try {
        const { data } = await api.getAllExperience()
        dispatch({ type: 'FETCH_ALL_EXPERIENCE', payload: data})
    }
    catch(err) {
        console.log(err)
    }
}

export const addEducation = (educationData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addEducation(educationData);
        dispatch({ type: 'ADD_EDUCATION', payload: data });
        dispatch(getAllEducation())
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllEducation = () => async(dispatch) => {
    try {
        const { data } = await api.getAllEducation();
        dispatch({ type: 'FETCH_ALL_EDUCATION', payload: data })
    }
    catch(err) {
        console.log(err)
    }
}

export const addSkill = (skillData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addSkill(skillData);
        dispatch({ type: 'ADD_SKILL', payload: data });
        dispatch(getAllSkills())
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllSkills = () => async(dispatch) => {
    try {
        const { data } = await api.getAllSkills()
        dispatch({ type: 'FETCH_ALL_SKILLS', payload: data })
    }
    catch(err) {
        console.log(err)
    }
}

export const addAchievement = (achievementData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addAchievement(achievementData);
        dispatch({ type: 'ADD_ACHIEVEMENT', payload: data });
        dispatch(getAllAchievements())
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const getAllAchievements = () => async(dispatch) => {
    try {
        const { data } = await api.getAllAchievements()
        dispatch({ type: 'FETCH_ALL_ACHIEVEMENTS', payload: data })
    }
    catch(err) {
        console.log(err)
    }
}