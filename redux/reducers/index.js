import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import coinReducer from "./coinReducer";
import skinPackageReducer from "./skinPackageReducer";
import currentXpReducer from "./currentXpReducer";
import maxXpReducer from "./maxXpReducer";

const reducers = combineReducers({
    level: levelReducer,
    coin: coinReducer,
    skinPackage: skinPackageReducer,
    currentXp: currentXpReducer,
    maxXp: maxXpReducer
});

export default reducers;