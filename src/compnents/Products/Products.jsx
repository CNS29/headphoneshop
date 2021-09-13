import React from 'react';

const Products = (props) => {
    return (
        <div className="product">
            <h1 className="product_title">HeadPhone</h1>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default Products
