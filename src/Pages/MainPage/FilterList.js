import React, { useState } from 'react'
import "./FilterList.css"
import { Accordion } from 'react-bootstrap'

const FilterList = () => {
   // defaultActiveKey={['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17']}

  return (
    <div>
      <ul className='MainPage-Filter-list'>
               
                    
                    <Accordion  alwaysOpen>
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
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Розмір сенсора</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-1" name="sensorSize-1">
                            </input>
                            <label for="sensorSize-1">1''</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-1-2" name="sensorSize-1-2">
                            </input>
                            <label for="sensorSize-1-2">1/2.3'' та менше</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-131" name="sensorSize-131">
                            </input>
                            <label for="sensorSize-131">13.1x8.8 мм</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-132" name="sensorSize-132">
                            </input>
                            <label for="sensorSize-132">13.2x8.8 мм</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-18" name="sensorSize-18">
                            </input>
                            <label for="sensorSize-18">18.7x14 мм</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-43" name="sensorSize-43">
                            </input>
                            <label for="sensorSize-43">4/3''(17.3x13 мм)</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-asp" name="sensorSize-asp">
                            </input>
                            <label for="sensorSize-asp">ASP-C</label>
                        </li>
                        <li className='MainPage-Filter-item-in'>
                            <input type="checkbox" id="sensorSize-FF" name="sensorSize-FF">
                            </input>
                            <label for="sensorSize-FF">Full Frame (35 мм)</label>
                        </li>
                    </ul> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Оптика в комплекті</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="optica-yes" name="optica-yes">
                                </input>
                                <label for="optica-yes">з об'єктивом(Kit)</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="optica-no" name="optica-no">
                                </input>
                                <label for="optica-no">без об'єктива(Body)</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='4'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Оптичний зум</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="Zoom-wo" name="Zoom-wo">
                                </input>
                                <label for="Zoom-wo">Без маштабування</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="Zoom-36" name="Zoom-36">
                                </input>
                                <label for="Zoom-36">Оптичний зум 20х-36х</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="Zoom-20" name="Zoom-20">
                                </input>
                                <label for="Zoom-20">Оптичний зум 6х-20х</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="Zoom-6" name="Zoom-6">
                                </input>
                                <label for="Zoom-6">Оптичний зум до 6х</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="Zoom-36Up" name="Zoom-36Up">
                                </input>
                                <label for="Zoom-36Up">Оптичний зум понад 36х</label>
                            </li>
                            </ul>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='5'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Інтерфейс</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-mj" name="interface-mj">
                                </input>
                                <label for="interface-mj">3.5 mini-jack</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-av" name="interface-av">
                                </input>
                                <label for="interface-av">AV</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-bt" name="interface-bt">
                                </input>
                                <label for="interface-bt">Bluetooth</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-gps" name="interface-gps">
                                </input>
                                <label for="interface-gps">GPS</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-hdmi" name="interface-hdmi">
                                </input>
                                <label for="interface-hdmi">HDMI</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-mc-usb" name="interface-mc-usb">
                                </input>
                                <label for="interface-mc-usb">Micro USB</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-usb30" name="interface-usb30">
                                </input>
                                <label for="interface-usb30">USB 3.0</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-usb31" name="interface-usb31">
                                </input>
                                <label for="interface-usb31">USB 3.1</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-usb31c" name="interface-usb31c">
                                </input>
                                <label for="interface-usb31c">USB 3.1 Type-C</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-usb32" name="interface-usb32">
                                </input>
                                <label for="interface-usb32">USB 3.2</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-usbc" name="interface-usbc">
                                </input>
                                <label for="interface-usbc">USB Type-C</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-wf" name="interface-wf">
                                </input>
                                <label for="interface-wf">Wi-Fi</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-mc-hdmi" name="interface-mc-hdmi">
                                </input>
                                <label for="interface-mc-hdmi">micro-HDMI</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-mi-usb" name="interface-mi-usb">
                                </input>
                                <label for="interface-mi-usb">mini-USB</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-mi-hdmi" name="interface-mi-hdmi">
                                </input>
                                <label for="interface-mi-hdmi">mini-HDMI</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-nfc" name="interface-nfc">
                                </input>
                                <label for="interface-nfc">NFC</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="interface-usb" name="interface-usb">
                                </input>
                                <label for="interface-usb">USB</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='6'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Кількість активних піесклів</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="px-16" name="px-16">
                                </input>
                                <label for="px-16">12 - 16 Мп</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="px-20" name="px-20">
                                </input>
                                <label for="px-20">16 - 20 Мп</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="px-12" name="px-12">
                                </input>
                                <label for="px-12">До 12 Мп</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="px-20Up" name="px-20Up">
                                </input>
                                <label for="px-20Up">Понад 20 Мп</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='7'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Кріплення РК-дісплея</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="display-fastening-down" name="display-fastening-down">
                                </input>
                                <label for="display-fastening-down">Екран, шарнір знизу</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="display-fastening-spin" name="display-fastening-spin">
                                </input>
                                <label for="display-fastening-spin">Поворотний дисплей</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <input type="checkbox" id="display-fastening-nospin" name="display-fastening-nospin">
                                </input>
                                <label for="display-fastening-nospin">Фіксований дисплей</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='8'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Мікрофон</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="micro-no"><input type="checkbox" id="micro-no" name="micro-no">
                                </input>Без мікрофона</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                
                                <label for="micro-yes"><input type="checkbox" id="micro-yes" name="micro-yes">
                                </input>Вбудований мікрофон</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="micro-ability"><input type="checkbox" id="micro-ability" name="micro-ability">
                                </input>Роз'єм для зовнішнього мікрофона</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='9'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Захист</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="protect-underwater">    
                                <input type="checkbox" id="protect-underwater" name="protect-underwater">
                                </input>Для підводної зйомки</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="protect-dust">    
                                <input type="checkbox" id="protect-dust" name="protect-dust">
                                </input>Пиловологозахищений</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="protect-simple">    
                                <input type="checkbox" id="protect-simple" name="protect-simple">
                                </input>Звичайний</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="protect-metal">    
                                <input type="checkbox" id="protect-metal" name="protect-metal">
                                </input>Тонкий металевий корпус</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='10'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Живлення</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="power-acum">
                                <input type="checkbox" id="power-acum" name="power-acum">
                                </input>Робота від акумулятора</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="power-aa">
                                <input type="checkbox" id="power-aa" name="power-aa">
                                </input>Робота від батарей АА</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='11'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Макроз'йомка</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="macro-yes">
                                <input type="checkbox" id="macro-yes" name="macro-yes">
                                </input>З макрозйомкою</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="macro-no">
                                <input type="checkbox" id="macro-no" name="macro-no">
                                </input>Без макрозйомки</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='12'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Стабілізація</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="stable-no">
                                <input type="checkbox" id="stable-no" name="stable-no">
                                </input>Без стабілізації</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="stable-el">
                                <input type="checkbox" id="stable-el" name="stable-el">
                                </input>Електронна стабілізація</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="stable-mx">
                                <input type="checkbox" id="stable-mx" name="stable-mx">
                                </input>Стабілізація зрушенням матриці</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="stable-op">
                                <input type="checkbox" id="stable-op" name="stable-op">
                                </input>Функція оптичної стабілізації</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='13'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Підтримка RAW</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="raw-no">
                                <input type="checkbox" id="raw-no" name="raw-no">
                                </input>Знімання тільки в JPEG</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="raw-yes">
                                <input type="checkbox" id="raw-yes" name="raw-yes">
                                </input>Знімання в RAW і JPEG</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='14'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Звук</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="sound-mono">
                                <input type="checkbox" id="sound-mono" name="sound-mono">
                                </input>Вихід моно</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="sound-sterio">
                                <input type="checkbox" id="sound-sterio" name="sound-sterio">
                                </input>Вихід стеріо</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="sound-no">
                                <input type="checkbox" id="sound-no" name="sound-no">
                                </input>Немає</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='15'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Сенсорний екран</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="sensordisplay-no">
                                <input type="checkbox" id="sensordisplay-no" name="sensordisplay-no">
                                </input>Без сенсорного керування</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="sensordisplay-yes">
                                <input type="checkbox" id="sensordisplay-yes" name="sensordisplay-yes">
                                </input>Із сенсорним управлінням</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='16'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Режим експозиції</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="expo-man"><input type="checkbox" id="expo-man" name="expo-man">
                                </input>Є ручні режими (P, A, S, M)</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="expo-auto"><input type="checkbox" id="expo-auto" name="expo-auto">
                                </input>Автоматичні та сценічні режими  </label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='17'>
                            <Accordion.Header>
                            <p className='MainPage-Filter-item-name'>Діоганаль диспею</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage-Filter-list-in'>
                            <li className='MainPage-Filter-item-in'>
                                <label for="displaysize-3">
                                <input type="checkbox" id="displaysize-3" name="displaysize-3">
                                </input>2.5"-3"</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="displaysize-25">
                                <input type="checkbox" id="displaysize-25" name="displaysize-25">
                                </input>До 2.5"</label>
                            </li>
                            <li className='MainPage-Filter-item-in'>
                                <label for="displaysize-3Up">
                                <input type="checkbox" id="displaysize-3Up" name="displaysize-3Up">
                                </input>Понад 3"</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
            </ul>
    </div>
  )
}

export default FilterList
