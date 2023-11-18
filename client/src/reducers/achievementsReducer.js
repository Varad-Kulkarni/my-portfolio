const achievementsReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_ACHIEVEMENT':
            return { ...state };

        case 'FETCH_ALL_ACHIEVEMENTS':
            return { ...state, data: action.payload };

        default: 
        return state;
    }
}

export default achievementsReducer;