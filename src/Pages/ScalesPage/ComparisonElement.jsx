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
            <div className={"elemnent-huy"}>{product.modelName}</div>
            <div className={"elemnent-huy"}>{product.price}</div>

            <div className={"elemnent-huy"}>
                    {product.inStockCount}
            </div>
            <div className={"elemnent-huy"}>
                    {product.sensorWidth}
            </div>
            <div className={"elemnent-huy"}>
                    {product.sensorHeight}
            </div>
            <div className={"elemnent-huy"}>
                    {product.isOpticInComplect.toString()}
            </div>
            <div className={"elemnent-huy"}>
                    {product.megaPixels}
            </div>
            <div className={"elemnent-huy"}>
                    {product.lcdMount}
            </div>
            <div className={"elemnent-huy"}>
                    {product.microphone}
            </div>
            <div className={"elemnent-huy"}>
                    {product.protection}
            </div>
            <div className={"elemnent-huy"}>
                    {product.supply}
            </div>
            <div className={"elemnent-huy"}>
                    {product.isMacroPhotography.toString()}
            </div>
            <div className={"elemnent-huy"}>
                    {product.stabilization}
            </div>
            <div className={"elemnent-huy"}>
                    {product.isRAWSupport.toString()}
            </div>
            <div className={"elemnent-huy"}>
                    {product.soundFormat}
            </div>
            <div className={"elemnent-huy"}>
                    {product.isSensorDisplay.toString()}
            </div>
            <div className={"elemnent-big-huy"}>
                    {product.expositionMode}
            </div>
            <div className={"elemnent-huy"}>
                    {product.lcdDiagonal}
            </div>
            <div className={"elemnent-huy"}>
                    {product.maxZoomValue}
            </div>
            <div className={"elemnent-huy"}>
                    {product.manufacturer}
            </div>
            <div className={"elemnent-huy"}>
                    {product.modelName}
            </div>
            <div className={"elemnent-huy"}>
                    {product.country}
            </div>
            <div className={"elemnent-huy"}>
                    {product.resolutionName}
            </div>
            <div className={"elemnent-huy"}>
                    {product.resolution}
            </div>
            <div className={"elemnent-huy"}>
                    {convertInterfacesToString(product.interfaceNames)}
            </div>
            <div className={"elemnent-huy"}>
                    {convertSystemsToString(product.systemNames)}
            </div>
        </div>
    );
};

export default ComparisonElement;