import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({})
const middleware = [thunk]
const initialState = {}
const store = createStore(reducer,initialState,applyMiddleware(...middleware))

export default store