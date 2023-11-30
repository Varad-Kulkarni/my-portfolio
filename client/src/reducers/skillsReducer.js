const skillsReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
            return { ...state };

        case 'FETCH_ALL_SKILLS':
            return { ...state, data: action.payload };

        case 'DELETE_SKILL':
            return { ...state }

        case 'EDIT_SKILL':
            return { ...state }

        default: 
        return state;
    }
}

export default skillsReducer;