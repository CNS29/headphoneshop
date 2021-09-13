import React from 'react'

const Header = (props) => {
    return (
        <header className="header">
            <div className="logo">HeadPhone</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Our Products</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="search">
                <i className="icon-search fas fa-search"></i>
                <i onClick={() => props.openCart(true)} className="icon-cart fas fa-shopping-cart"><span className="icon-cart-quantity">{props.quantityInCart}</span></i>
            </div>
        </header>
    )
}

export default Header;
