import { combineReducers } from 'redux';

import projectReducer from './projectReducer';
import experienceReducer from './experienceReducer';
import educationReducer from './educationReducer';
import skillsReducer from './skillsReducer';
import achievementsReducer from './achievementsReducer';

import usersReducer from './usersReducer';
import currentUserReducer from './currentUserReducer';
import authReducer from './authReducer'

export default combineReducers({
    projectReducer, experienceReducer, educationReducer, skillsReducer, achievementsReducer, usersReducer, currentUserReducer, authReducer
})