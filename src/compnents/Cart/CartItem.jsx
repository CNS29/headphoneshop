import React from 'react';

const CartItem = (props) => {
    const {id, name, currency, price, thumb, quantity} = props.data;
    return (
        <li className="cart_item">
            <div className="cart_item-img">
                <img src={thumb} alt="" />
            </div>
            <div className="cart_item-info">
                <p className="cart_item-name">{name}</p>
                <div className="cart_item-modify">
                    <div className="cart_item-quantity">
                        <div onClick={() => props.update(id, 1)} className="increase">
                            <i className="fas fa-plus"></i>
                        </div>
                        <div className="quantity">{quantity}</div>
                        <div onClick={() => props.update(id, -1)} style={quantity === 1? {opacity: .4}: {opacity: 1}} className="decrease">
                            <i className="fas fa-minus"></i>
                        </div>
                    </div>
                    <div className="cart_item-close">
                        <i onClick={() => props.delete(id)} className="fas fa-times"></i>
                        <p className="total">{(quantity * (+price)).toLocaleString("de-DE")}<span>{currency}</span></p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;
