import React from 'react';
import ComparisonElements from "./ComparisonElements";
import Header from "../../components/Header";

const ScalePageVersion2 = ({bucket, setBucket, scales, setScales}) => {
    console.log(scales);
    return (
        <div>
            <Header/>

            {scales.length > 0 ? <ComparisonElements scales={scales} /> : "Nothing to compare"}
        </div>
    );
};

export default ScalePageVersion2;