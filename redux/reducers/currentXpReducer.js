const reducer = (state = 0, action) => {
    switch (action.type) {
        case "increment":
            return state + action.payload;
        case "setCurrent":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;