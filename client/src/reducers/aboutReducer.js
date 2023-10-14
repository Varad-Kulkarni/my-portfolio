const aboutReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_EXPERIENCE':
            return { ...state };

        default: 
        return state;
    }
}

export default aboutReducer;