const projectReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return { ...state }

        case 'FETCH_ALL_PROJECTS':
            return { ...state, data: action.payload };

        case 'DELETE_PROJECT':
            return { ...state }

        default:
        return state
    }
}

export default projectReducer