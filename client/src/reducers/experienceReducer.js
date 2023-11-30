const experienceReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_EXPERIENCE':
            return { ...state };

        case 'FETCH_ALL_EXPERIENCE':
            return { ...state, data: action.payload };

        case 'DELETE_EXPERIENCE':
            return { ...state }

        case 'EDIT_EXPERIENCE':
            return { ...state }

        default: 
        return state;
    }
}

export default experienceReducer;