import { combineReducers } from "redux";
import { serviceReducer } from "./serviceReducer";
import { scrollReducer } from "./scrollReducer";


const reducers = combineReducers({
    allServices: serviceReducer,
    scroll:scrollReducer
})

export default reducers