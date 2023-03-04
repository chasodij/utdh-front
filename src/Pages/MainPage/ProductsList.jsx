import React from 'react';
import ProductCard from "./ProductCard";

const ProductsList = ({products, setBucket, setScales, bucket, scales}) => {
    return (
        <div className='products-wrapper'>
            {products.map((product) => (
                <ProductCard bucket={bucket} scales={scales} setBucket={setBucket} setScales={setScales} product={product}/>
            ))}
        </div>
    );
};

export default ProductsList;