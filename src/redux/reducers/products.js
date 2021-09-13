import * as types from "../constants/constants";

const initialState = [];

const products = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DATA_PRODUCT: {
            state = action.product;
            return [...state];
        }
        default: return [...state];
    }
}

export default products;
