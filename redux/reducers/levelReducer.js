const reducer = (state = 1, action) => {
    switch (action.type) {
        case "levelUp":
            return state + 1;
        case "getCurrentLevel":
            return state;
        default:
            return state;
    }
};

export default reducer;