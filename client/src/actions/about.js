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