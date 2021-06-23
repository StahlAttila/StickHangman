const reducer = (state = 100, action) => {
    switch (action.type) {
        case "setRequired":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;