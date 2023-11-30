const achievementsReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_ACHIEVEMENT':
            return { ...state };

        case 'FETCH_ALL_ACHIEVEMENTS':
            return { ...state, data: action.payload };

        case 'DELETE_ACHIEVEMENT':
            return { ...state }

        case 'EDIT_ACHIEVEMENT':
            return { ...state };

        default: 
        return state;
    }
}

export default achievementsReducer;