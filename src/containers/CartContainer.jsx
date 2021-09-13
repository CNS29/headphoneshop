import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../compnents/Cart/Cart';
import CartItem from '../compnents/Cart/CartItem';
import * as actions from "../redux/actions/actions";

const CartContainer = (props) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const showCartItem = (cartList) => {
        let result = null;
        if(cartList.length > 0) {
            result = cartList.map((item, index) => {
                return <CartItem key={index} data={item} delete={deleteProductFromCart} update={updateQuantity}/>;
            });
            return result;
        }
        return result;
    }

    const totalCart = (cartList) => {
        let result = 0;
        if(cartList.length > 0) {
            cartList.forEach(item => {
                result += item.quantity * item.price;
            });
            return result;
        }
        return result;
    }

    const deleteProductFromCart = (id) => {
        dispatch(actions.deleteProductFromCart(id));
    }

    const updateQuantity = (id, number) => {
        dispatch(actions.updateProductQuantityFromCart(id, number));
    }

    return (
        <>
            <Cart closeCart={props.closeCart} totalCart={totalCart(cart)}>
                {showCartItem(cart)}
            </Cart>
        </>
    )
}

export default CartContainer;
