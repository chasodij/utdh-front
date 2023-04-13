import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {Link} from "react-router-dom"; // <--

const ProductCard = ({product, bucket, addToBucket, addToComparison}) => {

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
                <FontAwesomeIcon onClick={() => addToComparison(product.id)} className={'icon'} icon={solid('scale-balanced')} />
            </div>
            <div className='product-flex-wrapper-div'>
                <Link className='product-more-button' to={`/product/${product.id}`}>
                    More
                </Link>
                <FontAwesomeIcon onClick={() => addToBucket(product)} className={'icon'}  icon={solid('cart-shopping')} />
            </div>
        </div>

    );
};

export default ProductCard;