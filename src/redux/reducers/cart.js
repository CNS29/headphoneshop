import * as types from "../constants/constants";

const initialState = [];

const findIndex = (state, id) => {
    return state.findIndex(item => item.id === id);
}

const cart = (state = initialState, action) => {
    let index = 0;
    switch(action.type) {
        case types.ADD_PRODUCT_TO_CART: {
            index = findIndex(state, action.product.id);
            if(index !== -1) {
                state[index].quantity += 1;
            }else {
                let newState = {
                    ...action.product,
                    quantity: 1,
                };
                state.push(newState);
            }
            return [...state];
        }
        case types.DELETE_PRODUCT_FROM_CART: {
            index = findIndex(state, action.id)
            if(index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        }
        case types.UPDATE_PRODUCT_QUANTITY_FROM_CART: {
            index = findIndex(state, action.id);
            if(index !== -1) {
                if(state[index].quantity + action.number > 0) {
                    state[index].quantity += action.number;
                }
            }
            return [...state];
        }
        default: return [...state];
    }
}

export default cart;
