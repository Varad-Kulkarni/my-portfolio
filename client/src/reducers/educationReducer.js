const educationReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_EDUCATION':
            return { ...state };

        default: 
        return state;
    }
}

export default educationReducer;