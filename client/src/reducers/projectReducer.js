const projectReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return { ...state }

        default:
        return state
    }
}

export default projectReducer