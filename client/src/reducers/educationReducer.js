const educationReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_EDUCATION':
            return { ...state };

        case 'FETCH_ALL_EDUCATION':
            return { ...state, data: action.payload };

        default: 
        return state;
    }
}

export default educationReducer;