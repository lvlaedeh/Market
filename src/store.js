import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productReducer } from "./reducer/productReducer";

const reducer = combineReducers({
    productList : productListReducer ,
    singleProduct : productReducer ,
})
const middleware = [thunk]
const initialState = {}
const store = createStore(reducer,initialState,applyMiddleware(...middleware))

export default store