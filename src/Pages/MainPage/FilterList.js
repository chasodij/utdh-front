import React, { useState } from 'react'
import "./FilterList.css"
import { Accordion } from 'react-bootstrap'

const FilterList = () => {


  return (
    <div>
      <ul className='MainPage-Filter-list'>
               
                    
                    <Accordion defaultActiveKey={['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17']} alwaysOpen>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Система</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="system-wom" name="system-wom">
                            </input>
                            <label for="system-wom">Бездзеркальна</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="system-wm" name="system-wm">
                            </input>
                            <label for="system-wm">Дзеркальна</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="system-c" name="system-c">
                            </input>
                            <label for="system-c">Компактна</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="system-qp" name="system-qp">
                            </input>
                            <label for="system-qp">Миттєвого друку</label>
                        </li>
                    </ul> 
                            </Accordion.Body>
                           
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Запис відео</p>
    
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-4k" name="video-4k">
                            </input>
                            <label for="video-4k">4K(4096x2160)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-8k" name="video-8k">
                            </input>
                            <label for="video-8k">8K(7680x4320)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-6k" name="video-6k">
                            </input>
                            <label for="video-6k">6K(6000x3164)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-fh43" name="video-fh43">
                            </input>
                            <label for="video-fh43">FullHD(1440x1080)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-fh169" name="video-fh169">
                            </input>
                            <label for="video-fh169">FullHD(1920x1080)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-hd" name="video-hd">
                            </input>
                            <label for="video-hd">HD(1280x720)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-uhd" name="video-uhd">
                            </input>
                            <label for="video-uhd">UHD 4K(3840x2160)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-vga" name="video-vga">
                            </input>
                            <label for="video-vga">VGA(640x480)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="video-wo" name="video-wo">
                            </input>
                            <label for="video-wo">Без запису відео</label>
                        </li>
                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='4'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='5'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='6'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='7'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='8'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='9'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='10'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='11'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='12'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='13'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='14'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='15'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='16'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='17'>
                            <Accordion.Header>

                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                    
          
                
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Розмір сенсора</p>

                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Оптика в комплекті</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Оптичний зум</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Інтерфейс</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Кількість активних піесклів</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Кріплення РК-дісплея</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Мікрофон</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Захист</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Живлення</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Макроз'йомка</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Стабілізація</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Підтримка RAW</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Звук</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Сенсорний екран</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Режим експозиції</p>
                
                </li>
                <li className='MainPage-Filter-item'><p className='MainPage-Filter-item-name'>Діоганаль диспею</p>
                
                </li>
            </ul>
    </div>
  )
}

export default FilterList
