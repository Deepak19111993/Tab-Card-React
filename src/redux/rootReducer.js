import { combineReducers } from "redux";
import questionReducer from "./reducer";
const rootReducer = combineReducers({
    questionReducer,
})
export default rootReducer;