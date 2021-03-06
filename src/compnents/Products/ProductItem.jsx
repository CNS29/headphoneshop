import React from 'react';

const ProductItem = (props) => {

    const {name, price, currency, thumb} = props.data;

    const addToCart = (product) => {
        props.addToCart(product);
    }

    return (
        <div className="col xl-3 lg-4 md-4 sm-6 c-12">
            <div className="product_card">
                <div className="card_img">
                    <img src={thumb} alt="" />
                </div>
                <div className="card_header">
                    <h2 className="product_name">{name}</h2>
                    <p className="price">{(+price).toLocaleString("de-DE")}<span>{currency}</span></p>
                    <div className="btn" onClick={() => addToCart(props.data)}><span>Add to cart</span></div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
