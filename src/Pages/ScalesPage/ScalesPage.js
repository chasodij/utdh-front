import React from 'react'
import "./ScalesPage.css"

const ScalesPage = ({products}) => {
    var iter = 0;
    function iterUp(){
        //products замінити на products.lenght - 2
        if(iter !== products){
            iter++;
        }
        console.log(iter)
    }
    function iterDown(){
        
        if(iter !== 0){
            iter--;
        }
        console.log(iter)
    }
  return (
    <div className='Scales_bg'>
        <div>
        <a href='/' className='arrow_back'>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L20 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    </a>
        </div>
       <div className='Scales_center'>
        <table name='ScalesTable'>
            <tr>
                <th className='Table_arrow_colum'>
                    <button className='arrow_button' onClick={iterDown}>
                    <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#323232"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/>
                    <path d="M8 12L16 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 9L8.08704 11.913V11.913C8.03897 11.961 8.03897 12.039 8.08704 12.087V12.087L11 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    </button>
                
                </th>
                <th>
                    <div>
                    <div className='image_template'></div>
                    <div className='image_buttons'>
                    <button className='Scales_Add_Button'>
                        Додати в кошик
                    </button>
                    <a>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                    
                    </div>
                    </div>
                
                </th>
                <th className='Table_arrow_colum'>
                <button className='arrow_button' onClick={iterUp}>
                <svg  width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#323232"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/>
<path d="M16 12L8 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
                
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Назва
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Система
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Запис відео
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Розмір сенсора
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
                
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Оптика в комплекті
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Оптичний зум
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                    Інтерфейс
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Кількість активних піесклів
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Кріплення РК-дісплея
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Мікрофон
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Захист
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Живлення
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Макроз'йомка
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Стабілізація
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Підтримка RAW
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Звук
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Сенсорний екран
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Режим експозиції
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            <tr>
                <th className='Table_first_colum' name='Table_first_colum'>
                Діоганаль диспею
                </th>
                <th className='Table_value_colum' name='Table_value_colum'>
                    sdsds
                </th>
            </tr>
            
        </table>
        <br></br>
      </div>
    </div>
  )
}

export default ScalesPage
