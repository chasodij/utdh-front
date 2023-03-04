import React from 'react';
import ProductCard from "./ProductCard";

const ProductsList = ({products, bucket, addToBucket, addToComparison}) => {
    return (
        <div className='products-wrapper'>
            {products.map((product) => (
                <ProductCard bucket={bucket} addToBucket={addToBucket} addToComparison={addToComparison} product={product}/>
            ))}
        </div>
    );
};

export default ProductsList;