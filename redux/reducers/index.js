import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import coinReducer from "./coinReducer";
import skinPackageReducer from "./skinPackageReducer";

const reducers = combineReducers({
    level: levelReducer,
    coin: coinReducer,
    skinPackage: skinPackageReducer
});

export default reducers;