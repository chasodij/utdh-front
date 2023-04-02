import React, {useEffect} from 'react';
import ComparisonElement from "./ComparisonElement";
import {FetchComparison} from "../../Data/Fetch";
import "./ScalesPage.css"


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

<div className={"comparison-camera-names"}>
            <div className={"elemnent-huy"}>Назва</div>
            <div className={"elemnent-huy"}>Ціна</div>

            <div className={"elemnent-huy"}>
                    На складі
            </div>
            <div className={"elemnent-huy"}>
                    Ширина сенсору
            </div>
            <div className={"elemnent-huy"}>
                    Висота сенсору
            </div>
            <div className={"elemnent-huy"}>
                    Оптіка в комплекті
            </div>
            <div className={"elemnent-huy"}>
                    Кількість Мегапікселів
            </div>
            <div className={"elemnent-huy"}>
                    Кріплення Дісплею
            </div>
            <div className={"elemnent-huy"}>
                    Мікрофон
            </div>
            <div className={"elemnent-huy"}>
                    Захист
            </div>
            <div className={"elemnent-huy"}>
                    Живлення
            </div>
            <div className={"elemnent-huy"}>
                    Макро з'йомка
            </div>
            <div className={"elemnent-huy"}>
                    Стабілізація
            </div>
            <div className={"elemnent-huy"}>
                    Підтримка Raw
            </div>
            <div className={"elemnent-huy"}>
                    Формат Звуку
            </div>
            <div className={"elemnent-huy"}>
                    Сенсорний Дисплей
            </div>
            <div className={"elemnent-big-huy"}>
                    Експозиція
            </div>
            <div className={"elemnent-huy"}>
                    Діагональ Монітору
            </div>
            <div className={"elemnent-huy"}>
                    Зум
            </div>
            <div className={"elemnent-huy"}>
                    Виробник
            </div>
            <div className={"elemnent-huy"}>
                    Модель
            </div>
            <div className={"elemnent-huy"}>
                    Країна
            </div>
            <div className={"elemnent-huy"}>
                    Роздільна Здатність
            </div>
            <div className={"elemnent-huy"}>
                    Роздільна Здатність
            </div>
            <div className={"elemnent-huy"}>
                    Інтерфейси
            </div>
            <div className={"elemnent-huy"}>
                    Система
            </div>
</div>


                  
            {scalesToCompare.map((product) => (
                <ComparisonElement product={product}/>
            ))}
        </div>
    );
};

export default ComparisonElements;