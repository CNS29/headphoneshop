import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "../../redux/actions/actions";

const toggleMenu = () => {
    document.querySelector(".header ul").classList.toggle("active_menu");
}

const toggleSearch = () => {
    document.querySelector(".input").classList.toggle("toggle_input");
}

const Header = (props) => {
    const dispatch = useDispatch();

    const onChangeSearch = (e) => {
        const target = e.target;
        const value = target.value;
        dispatch(actions.searchProduct(value));
    }

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
                <div className="search_input">
                    <i onClick={toggleSearch} className="icon-search fas fa-search"></i>
                    <input onChange={onChangeSearch} type="text" className="input" placeholder="Tìm kiếm..."/>
                </div>
                <i onClick={() => props.openCart(true)} className="icon-cart fas fa-shopping-cart"><span className="icon-cart-quantity">{props.quantityInCart}</span></i>
            </div>
            <div className="menu" onClick={toggleMenu}>
                <i className="fas fa-align-justify"></i>
            </div>
        </header>
    )
}

export default Header;
