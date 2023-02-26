import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {FetchProduct} from "../../Data/Fetch";

const ProductPage = () => {

    const {productId} = useParams();

    const [product, setProduct] = React.useState(undefined);

    useEffect(() => {
        const getProduct = async () => {
            const response = await FetchProduct(productId);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        }
        getProduct();
    }, [productId]);


    return (
        <div>
            
        </div>
    );
};

export default ProductPage;