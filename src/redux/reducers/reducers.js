import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import search from "./search";

const reducers = combineReducers({
    products,
    cart,
    search
});

export default reducers;