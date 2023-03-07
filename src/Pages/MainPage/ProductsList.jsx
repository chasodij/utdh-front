import React from 'react';
import ProductCard from "./ProductCard";

const ProductsList = ({products}) => {
    return (
        <div className='products-wrapper'>
            {products ? products.map((product) => (
                <ProductCard product={product}/>
            )) : ""}
        </div>
    );
};

export default ProductsList;