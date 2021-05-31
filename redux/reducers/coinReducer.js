const reducer = (state = 0, action) => {
    switch (action.type) {
        case "earnCoin":
            return state + action.payload;
        case "purchase":
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;