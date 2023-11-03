const skillsReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
            return { ...state };

        default: 
        return state;
    }
}

export default skillsReducer;