import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <--

const ProductCard = ({product, bucket, setBucket, scales, setScales}) => {

    const handleAddBucket = () => {
        setBucket([...bucket, product]);
    }

    const handleAddComparison = () => {
        setScales([...scales, product.id]);
    }

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
                <FontAwesomeIcon onClick={handleAddComparison} className={'icon'} icon={solid('scale-balanced')} />
            </div>
            <div className='product-flex-wrapper-div'>
                <button className='product-more-button'>
                    More
                </button>
                <FontAwesomeIcon onClick={handleAddBucket} className={'icon'}  icon={solid('bucket')} />
            </div>


        </div>

    );
};

export default ProductCard;