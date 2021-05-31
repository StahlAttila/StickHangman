import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const loadedUser = {
    level: 69,
    coin: 666,
    skinPackage: "default"
}

export const store = createStore(
    reducers,
    {}, //default state
    applyMiddleware(thunk)
);