import React from 'react';

const Cart = (props) => {
    const cartElement = (data) => {
        if(data) {
            return props.children;
        }else {
            return <li className="empty">Chưa có gì trong giỏ hàng</li>;
        }
    }

    return (
        <div className="cover">
            <div className="cart">
                <div className="cart_header">
                    <h3 className="cart_title">Your Cart</h3>
                    <div onClick={() => props.closeCart(false)} className="cart_close"><i className="fas fa-times"></i></div>
                </div>
                <ul className="cart_list">
                    {cartElement(props.children)}
                </ul>
                <div className="cart_pay">
                    <h3 className="pay_text">Tổng</h3>
                    <p className="pay_total">{props.totalCart}<span>đ</span></p>
                </div>
                <div className="btn btn_pay"><span>Thanh toán</span></div>
            </div>
        </div>
    )
}

export default Cart;
