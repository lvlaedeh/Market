import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productReducer } from "./reducer/productReducer";
import {cartReducer} from "./reducer/cartReducer"

const reducer = combineReducers({
    productList : productListReducer ,
    singleProduct : productReducer ,
    cart : cartReducer ,
})
const cartItemsFromLocalStorge = localStorage.getItem('cartItems') ? JSON.parse(
    localStorage.getItem('cartItems')) : []

const middleware = [thunk]

const initialState = {
    cart : {cartItems : cartItemsFromLocalStorge}
}
const store = createStore(reducer,initialState,applyMiddleware(...middleware))

export default store