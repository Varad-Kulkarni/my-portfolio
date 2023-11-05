const projectReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return { ...state }

        case 'FETCH_ALL_PROJECTS':
            return { ...state, data: action.payload };

        default:
        return state
    }
}

export default projectReducer