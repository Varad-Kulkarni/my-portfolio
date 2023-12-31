const educationReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_EDUCATION':
            return { ...state };

        case 'FETCH_ALL_EDUCATION':
            return { ...state, data: action.payload };

        case 'DELETE_EDUCATION':
            return { ...state }

        case 'EDIT_EDUCATION':
            return { ...state }

        default: 
        return state;
    }
}

export default educationReducer;