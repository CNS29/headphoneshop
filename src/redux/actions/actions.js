import apiCaller from "../../utils/apiCaller";
import * as types from "../constants/constants";

export const actGetProductRequest = dispatch => {
    return apiCaller("headphones", "GET").then(res => {
        dispatch(actGetProduct(res.data));
    })
}

export const actGetProduct = (product) => {
    return {
        type: types.GET_DATA_PRODUCT,
        product
    }
}

export const addProductToCart = (product) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        product
    }
}

export const deleteProductFromCart = (id) => {
    return {
        type: types.DELETE_PRODUCT_FROM_CART,
        id
    }
}

export const updateProductQuantityFromCart = (id, number) => {
    return {
        type: types.UPDATE_PRODUCT_QUANTITY_FROM_CART,
        id,
        number
    }
}