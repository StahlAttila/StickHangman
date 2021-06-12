const reducer = (state = 100, action) => {
    switch (action.type) {
        case "set":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;