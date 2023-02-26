import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className='product-wrapper'>
            <div className='product-image-wrapper'>
                <img className='product-image' src={product.photo} alt=""/>
            </div>
            <div className='product-name'>
                {product.modelName}
            </div>
            <div className='product-flex-wrapper-div'>
                <h3 className='product-price'>
                    {product.price}$
                </h3>
                Icon
            </div>
            <div className='product-flex-wrapper-div'>
                <button className='product-more-button'>
                    More
                </button>
                Icon
            </div>


        </div>

    );
};

export default ProductCard;