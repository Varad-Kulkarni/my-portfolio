const achievementsReducer = (state = {data: null}, action) => {
    switch(action.type) {
        case 'ADD_ACHIEVEMENT':
            return { ...state };

        default: 
        return state;
    }
}

export default achievementsReducer;