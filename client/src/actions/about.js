import React from 'react'
import * as api from '../api'

export const addExperience = (experienceData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addExperience(experienceData);
        dispatch({ type: 'ADD_EXPERIENCE', payload: data });
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const addEducation = (educationData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addEducation(educationData);
        dispatch({ type: 'ADD_EDUCATION', payload: data });
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const addSkill = (skillData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addSkill(skillData);
        dispatch({ type: 'ADD_SKILL', payload: data });
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}

export const addAchievement = (achievementData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.addAchievement(achievementData);
        dispatch({ type: 'ADD_ACHIEVEMENT', payload: data });
        navigate('/about');
    }
    catch(err) {
        console.log(err);
    }
}