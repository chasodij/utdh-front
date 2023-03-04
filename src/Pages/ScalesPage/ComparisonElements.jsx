import React from 'react';
import ComparisonElement from "./ComparisonElement";

const ComparisonElements = ({scales}) => {
    return (
        <div>
            {scales.map((scale) => (
                <ComparisonElement scale={scale}/>
            ))}
        </div>
    );
};

export default ComparisonElements;