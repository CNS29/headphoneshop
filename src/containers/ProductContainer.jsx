import React, { useEffect } from 'react';
import Products from "../compnents/Products/Products";
import ProductItem from "../compnents/Products/ProductItem";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../redux/actions/actions";

const ProductContainer = () => {
    const products = useSelector(state => state.products);
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.actGetProductRequest);
    }, [dispatch]);

    const showProducts = (products, search) => {
        let result = null;
        products = products.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        if(products.length > 0) {
            result = products.map((item, index) => {
                return <ProductItem 
                key={index} 
                data={item}
                addToCart={addToCart}
                />
            })
            return result;
        }
        return result;
    }

    const addToCart = (product) => {
        dispatch(actions.addProductToCart(product));
    }

    return (
        <div>
            <Products>
                {showProducts(products, search)}
            </Products>
        </div>
    )
}

export default ProductContainer;
