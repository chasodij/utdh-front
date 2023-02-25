import React from 'react'
import "./FilterList.css"

const FilterList = () => {
  return (
    <div>
      <ul className='MainPage-Filter-list'>
                <li className='MainPage-Filter-item'>Система
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
                </li>
                <li className='MainPage-Filter-item'>Запис відео
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
                </li>
                <li className='MainPage-Filter-item'>Розмір сенсора

                </li>
                <li className='MainPage-Filter-item'>Оптика в комплекті
                
                </li>
                <li className='MainPage-Filter-item'>Оптичний зум
                
                </li>
                <li className='MainPage-Filter-item'>Інтерфейс
                
                </li>
                <li className='MainPage-Filter-item'>Кількість активних піесклів
                
                </li>
                <li className='MainPage-Filter-item'>Кріплення РК-дісплея
                
                </li>
                <li className='MainPage-Filter-item'>Мікрофон
                
                </li>
                <li className='MainPage-Filter-item'>Захист
                
                </li>
                <li className='MainPage-Filter-item'>Живлення
                
                </li>
                <li className='MainPage-Filter-item'>Макроз'йомка
                
                </li>
                <li className='MainPage-Filter-item'>Стабілізація
                
                </li>
                <li className='MainPage-Filter-item'>Підтримка RAW
                
                </li>
                <li className='MainPage-Filter-item'>Звук
                
                </li>
                <li className='MainPage-Filter-item'>Сенсорний екран
                
                </li>
                <li className='MainPage-Filter-item'>Режим експозиції
                
                </li>
                <li className='MainPage-Filter-item'>Діоганаль диспею
                
                </li>
            </ul>
    </div>
  )
}

export default FilterList
