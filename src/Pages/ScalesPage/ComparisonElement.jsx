import React from 'react';

const ComparisonElement = ({product}) => {

const convertInterfacesToString = (interfaces) => {
    let interfacesString = "";
    interfaces.forEach((interfacee, index) => {
        interfacesString += interfacee;
        if (index < interfaces.length - 1) {
            interfacesString += ", ";
        }
    });
    return interfacesString;
}

const convertSystemsToString = (systems) => {
    let systemsString = "";
    systems.forEach((system, index) => {
        systemsString += system;
        if (index < systems.length - 1) {
            systemsString += ", ";
        }
    });
    return systemsString;
}

    return (
        <div className={"comparison-camera-wrapper"}>
            <img className={"comparison-camera-image"} src={product.photo} alt=""/>
            <div>{product.modelName}</div>
            <div>{product.price}</div>

            <div>
                    {product.inStockCount}
            </div>
            <div>
                    {product.sensorWidth}
            </div>
            <div>
                    {product.sensorHeight}
            </div>
            <div>
                    {product.isOpticInComplect}
            </div>
            <div>
                    {product.megaPixels}
            </div>
            <div>
                    {product.lcdMount}
            </div>
            <div>
                    {product.microphone}
            </div>
            <div>
                    {product.protection}
            </div>
            <div>
                    {product.supply}
            </div>
            <div>
                    {product.isMacroPhotography}
            </div>
            <div>
                    {product.stabilization}
            </div>
            <div>
                    {product.isRAWSupport}
            </div>
            <div>
                    {product.soundFormat}
            </div>
            <div>
                    {product.isSensorDisplay}
            </div>
            <div>
                    {product.expositionMode}
            </div>
            <div>
                    {product.lcdDiagonal}
            </div>
            <div>
                    {product.maxZoomValue}
            </div>
            <div>
                    {product.manufacturer}
            </div>
            <div>
                    {product.modelName}
            </div>
            <div>
                    {product.country}
            </div>
            <div>
                    {product.resolutionName}
            </div>
            <div>
                    {product.resolution}
            </div>
            <div>
                    {convertInterfacesToString(product.interfaceNames)}
            </div>
            <div>
                    {convertSystemsToString(product.systemNames)}
            </div>
        </div>
    );
};

export default ComparisonElement;