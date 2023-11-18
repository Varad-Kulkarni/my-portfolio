const skillsReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
            return { ...state };

        case 'FETCH_ALL_SKILLS':
            return { ...state, data: action.payload };

        default: 
        return state;
    }
}

export default skillsReducer;