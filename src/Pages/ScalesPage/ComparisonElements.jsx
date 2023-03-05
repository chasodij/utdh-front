import React, {useEffect} from 'react';
import ComparisonElement from "./ComparisonElement";
import {FetchComparison} from "../../Data/Fetch";

const ComparisonElements = ({scales}) => {

    const [scalesToCompare, setScalesToCompare] = React.useState([]);

    useEffect(() => {
        const getFullProductsDescription = async () => {
            const res = await FetchComparison(scales);
            const data = await res.json();
            setScalesToCompare(data);
        }
        getFullProductsDescription();
    }, []);

    return (
        <div className={"comparison-products-wrapper"}>
            {scalesToCompare.map((product) => (
                <ComparisonElement product={product}/>
            ))}
        </div>
    );
};

export default ComparisonElements;