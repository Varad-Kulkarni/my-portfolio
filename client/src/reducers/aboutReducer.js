const aboutReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_EXPERIENCE':
            return { ...state };

        case 'ADD_EDUCATION':
            return { ...state };

        case 'ADD_SKILL':
            return { ...state };

        case 'ADD_ACHIEVEMENT':
            return { ...state };

        default: 
        return state;
    }
}

export default aboutReducer;