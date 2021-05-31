const reducer = (state = "default", action) => {
    switch (action.type) {
        case "changeSkin":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;