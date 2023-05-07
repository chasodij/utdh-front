import React, { useState } from "react";
import "./FilterList.css"
import { Accordion } from 'react-bootstrap'

const FilterList = ({ filter, setFilter }) => {
  // defaultActiveKey={['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17']}
  

   function resetFilter(){
     document.getElementById("system_wom").checked = false;
     document.getElementById("system_wm").checked = false;
     document.getElementById("system_c").checked = false;
     document.getElementById("system_qp").checked = false;

     document.getElementById("video_4k").checked = false;
     document.getElementById("video_8k").checked = false;
     document.getElementById("video_6k").checked = false;
     document.getElementById("video_fh43").checked = false;
     document.getElementById("video_fh169").checked = false;
     document.getElementById("video_hd").checked = false;
     document.getElementById("video_uhd").checked = false;
     document.getElementById("video_vga").checked = false;
     document.getElementById("video_wo").checked = false;

     document.getElementById("sensorSize_1").checked = false;
     document.getElementById("sensorSize_1_2").checked = false;
     document.getElementById("sensorSize_131").checked = false;
     document.getElementById("sensorSize_132").checked = false;
     document.getElementById("sensorSize_18").checked = false;
     document.getElementById("sensorSize_43").checked = false;
     document.getElementById("sensorSize_asp").checked = false;
     document.getElementById("sensorSize_FF").checked = false;

     document.getElementById("optica_yes").checked = false;
     document.getElementById("optica_no").checked = false;

     document.getElementById("Zoom_wo").checked = false;
     document.getElementById("Zoom_36").checked = false;
     document.getElementById("Zoom_20").checked = false;
     document.getElementById("Zoom_6").checked = false;
     document.getElementById("Zoom_36Up").checked = false;

     document.getElementById("interface_mj").checked = false;
     document.getElementById("interface_av").checked = false;
     document.getElementById("interface_bt").checked = false;
     document.getElementById("interface_gps").checked = false;
     document.getElementById("interface_hdmi").checked = false;
     document.getElementById("interface_mc_usb").checked = false;
     document.getElementById("interface_usb31").checked = false;
     document.getElementById("interface_usb31c").checked = false;
     document.getElementById("interface_usb32").checked = false;
     document.getElementById("interface_usbc").checked = false;
     document.getElementById("interface_wf").checked = false;
     document.getElementById("interface_mc_hdmi").checked = false;
     document.getElementById("interface_mi_usb").checked = false;
     document.getElementById("interface_mi_hdmi").checked = false;
     document.getElementById("interface_nfc").checked = false;
     document.getElementById("interface_usb").checked = false;
     document.getElementById("interface_usb30").checked = false;

     document.getElementById("px_20").checked = false;
     document.getElementById("px_12").checked = false;
     document.getElementById("px_20Up").checked = false;
     document.getElementById("px_16").checked = false;

     document.getElementById("display_fastening_spin").checked = false;
     document.getElementById("display_fastening_nospin").checked = false;
     document.getElementById("display_fastening_down").checked = false;

     document.getElementById("micro_yes").checked = false;
     document.getElementById("micro_ability").checked = false;
     document.getElementById("micro_no").checked = false;

     document.getElementById("protect_simple").checked = false;
     document.getElementById("protect_dust").checked = false;
     document.getElementById("protect_metal").checked = false;
     document.getElementById("protect_underwater").checked = false;

     document.getElementById("power_acum").checked = false;
     document.getElementById("power_aa").checked = false;

     document.getElementById("macro_no").checked = false;
     document.getElementById("macro_yes").checked = false;

     document.getElementById("stable_el").checked = false;
     document.getElementById("stable_mx").checked = false;
     document.getElementById("stable_op").checked = false;
     document.getElementById("stable_no").checked = false;

     document.getElementById("raw_yes").checked = false;
     document.getElementById("raw_no").checked = false;

     document.getElementById("sound_sterio").checked = false;
     document.getElementById("sound_no").checked = false;
    document.getElementById("sound_mono").checked = false;

     document.getElementById("sensordisplay_yes").checked = false;
     document.getElementById("sensordisplay_no").checked = false;

     document.getElementById("expo_man").checked = false;
     document.getElementById("expo_auto").checked = false;

     document.getElementById("displaysize_25").checked = false;
     document.getElementById("displaysize_3Up").checked = false;
    document.getElementById("displaysize_3").checked = false;
    filtering()
   }

   function filtering(){

    

    setFilter({
      system_wom: document.getElementById("system_wom").checked,
      system_wm: document.getElementById("system_wm").checked,
      system_c: document.getElementById("system_c").checked,
      system_qp: document.getElementById("system_qp").checked,

      video_4k: document.getElementById("video_4k").checked,
      video_8k: document.getElementById("video_8k").checked,
      video_6k: document.getElementById("video_6k").checked,
      video_fh43: document.getElementById("video_fh43").checked,
      video_fh169: document.getElementById("video_fh169").checked,
      video_hd: document.getElementById("video_hd").checked,
      video_uhd: document.getElementById("video_uhd").checked,
      video_vga: document.getElementById("video_vga").checked,
      video_wo: document.getElementById("video_wo").checked,

      sensorSize_1: document.getElementById("sensorSize_1").checked,
      sensorSize_1_2: document.getElementById("sensorSize_1_2").checked,
      sensorSize_131: document.getElementById("sensorSize_131").checked,
      sensorSize_132: document.getElementById("sensorSize_132").checked,
      sensorSize_18: document.getElementById("sensorSize_18").checked,
      sensorSize_43: document.getElementById("sensorSize_43").checked,
      sensorSize_asp: document.getElementById("sensorSize_asp").checked,
      sensorSize_FF: document.getElementById("sensorSize_FF").checked,

      optica_yes: document.getElementById("optica_yes").checked,
      optica_no: document.getElementById("optica_no").checked,

      Zoom_wo: document.getElementById("Zoom_wo").checked,
      Zoom_36: document.getElementById("Zoom_36").checked,
      Zoom_20: document.getElementById("Zoom_20").checked,
      Zoom_6: document.getElementById("Zoom_6").checked,
      Zoom_36Up: document.getElementById("Zoom_36Up").checked,

      interface_mj: document.getElementById("interface_mj").checked,
      interface_av: document.getElementById("interface_av").checked,
      interface_bt: document.getElementById("interface_bt").checked,
      interface_gps: document.getElementById("interface_gps").checked,
      interface_hdmi: document.getElementById("interface_hdmi").checked,
      interface_mc_usb: document.getElementById("interface_mc_usb").checked,
      interface_usb31: document.getElementById("interface_usb31").checked,
      interface_usb31c: document.getElementById("interface_usb31c").checked,
      interface_usb32: document.getElementById("interface_usb32").checked,
      interface_usbc: document.getElementById("interface_usbc").checked,
      interface_wf: document.getElementById("interface_wf").checked,
      interface_mc_hdmi: document.getElementById("interface_mc_hdmi").checked,
      interface_mi_usb: document.getElementById("interface_mi_usb").checked,
      interface_mi_hdmi: document.getElementById("interface_mi_hdmi").checked,
      interface_nfc: document.getElementById("interface_nfc").checked,
      interface_usb: document.getElementById("interface_usb").checked,
      interface_usb30: document.getElementById("interface_usb30").checked,

      px_20: document.getElementById("px_20").checked,
      px_12: document.getElementById("px_12").checked,
      px_20Up: document.getElementById("px_20Up").checked,
      px_16: document.getElementById("px_16").checked,

      display_fastening_spin: document.getElementById("display_fastening_spin")
        .checked,
      display_fastening_nospin: document.getElementById(
        "display_fastening_nospin"
      ).checked,
      display_fastening_down: document.getElementById("display_fastening_down")
        .checked,

      micro_yes: document.getElementById("micro_yes").checked,
      micro_ability: document.getElementById("micro_ability").checked,
      micro_no: document.getElementById("micro_no").checked,

      protect_simple: document.getElementById("protect_simple").checked,
      protect_dust: document.getElementById("protect_dust").checked,
      protect_metal: document.getElementById("protect_metal").checked,
      protect_underwater: document.getElementById("protect_underwater").checked,

      power_acum: document.getElementById("power_acum").checked,
      power_aa: document.getElementById("power_aa").checked,

      macro_no: document.getElementById("macro_no").checked,
      macro_yes: document.getElementById("macro_yes").checked,

      stable_el: document.getElementById("stable_el").checked,
      stable_mx: document.getElementById("stable_mx").checked,
      stable_op: document.getElementById("stable_op").checked,
      stable_no: document.getElementById("stable_no").checked,

      raw_yes: document.getElementById("raw_yes").checked,
      raw_no: document.getElementById("raw_no").checked,

      sound_sterio: document.getElementById("sound_sterio").checked,
      sound_no: document.getElementById("sound_no").checked,
      sound_mono: document.getElementById("sound_mono").checked,

      sensordisplay_yes: document.getElementById("sensordisplay_yes").checked,
      sensordisplay_no: document.getElementById("sensordisplay_no").checked,

      expo_man: document.getElementById("expo_man").checked,
      expo_auto: document.getElementById("expo_auto").checked,

      displaysize_25: document.getElementById("displaysize_25").checked,
      displaysize_3Up: document.getElementById("displaysize_3Up").checked,
      displaysize_3: document.getElementById("displaysize_3").checked,
    });
  }

  return (
    <div>
      <ul className='MainPage_Filter_list'>
                    <Accordion  alwaysOpen>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Система</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="system_wom" name="system_wom">
                            </input>
                            <label for="system_wom">Бездзеркальна</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="system_wm" name="system_wm">
                            </input>
                            <label for="system_wm">Дзеркальна</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="system_c" name="system_c">
                            </input>
                            <label for="system_c">Компактна</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="system_qp" name="system_qp">
                            </input>
                            <label for="system_qp">Миттєвого друку</label>
                        </li>
                    </ul> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Запис відео</p>
    
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_4k" name="video_4k">
                            </input>
                            <label for="video_4k">4K(4096x2160)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_8k" name="video_8k">
                            </input>
                            <label for="video_8k">8K(7680x4320)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_6k" name="video_6k">
                            </input>
                            <label for="video_6k">6K(6000x3164)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_fh43" name="video_fh43">
                            </input>
                            <label for="video_fh43">FullHD(1440x1080)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_fh169" name="video_fh169">
                            </input>
                            <label for="video_fh169">FullHD(1920x1080)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_hd" name="video_hd">
                            </input>
                            <label for="video_hd">HD(1280x720)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_uhd" name="video_uhd">
                            </input>
                            <label for="video_uhd">UHD 4K(3840x2160)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_vga" name="video_vga">
                            </input>
                            <label for="video_vga">VGA(640x480)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="video_wo" name="video_wo">
                            </input>
                            <label for="video_wo">Без запису відео</label>
                        </li>
                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Розмір сенсора</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_1" name="sensorSize_1">
                            </input>
                            <label for="sensorSize_1">1''</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_1_2" name="sensorSize_1_2">
                            </input>
                            <label for="sensorSize_1_2">1/2.3'' та менше</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_131" name="sensorSize_131">
                            </input>
                            <label for="sensorSize_131">13.1x8.8 мм</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_132" name="sensorSize_132">
                            </input>
                            <label for="sensorSize_132">13.2x8.8 мм</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_18" name="sensorSize_18">
                            </input>
                            <label for="sensorSize_18">18.7x14 мм</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_43" name="sensorSize_43">
                            </input>
                            <label for="sensorSize_43">4/3''(17.3x13 мм)</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_asp" name="sensorSize_asp">
                            </input>
                            <label for="sensorSize_asp">ASP_C</label>
                        </li>
                        <li className='MainPage_Filter_item_in'>
                            <input type="checkbox" id="sensorSize_FF" name="sensorSize_FF">
                            </input>
                            <label for="sensorSize_FF">Full Frame (35 мм)</label>
                        </li>
                    </ul> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Оптика в комплекті</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="optica_yes" name="optica_yes">
                                </input>
                                <label for="optica_yes">з об'єктивом(Kit)</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="optica_no" name="optica_no">
                                </input>
                                <label for="optica_no">без об'єктива(Body)</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='4'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Оптичний зум</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="Zoom_wo" name="Zoom_wo">
                                </input>
                                <label for="Zoom_wo">Без масштабування</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="Zoom_36" name="Zoom_36">
                                </input>
                                <label for="Zoom_36">Оптичний зум 20х_36х</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="Zoom_20" name="Zoom_20">
                                </input>
                                <label for="Zoom_20">Оптичний зум 6х_20х</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="Zoom_6" name="Zoom_6">
                                </input>
                                <label for="Zoom_6">Оптичний зум до 6х</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="Zoom_36Up" name="Zoom_36Up">
                                </input>
                                <label for="Zoom_36Up">Оптичний зум понад 36х</label>
                            </li>
                            </ul>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='5'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Інтерфейс</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_mj" name="interface_mj">
                                </input>
                                <label for="interface_mj">3.5 mini_jack</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_av" name="interface_av">
                                </input>
                                <label for="interface_av">AV</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_bt" name="interface_bt">
                                </input>
                                <label for="interface_bt">Bluetooth</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_gps" name="interface_gps">
                                </input>
                                <label for="interface_gps">GPS</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_hdmi" name="interface_hdmi">
                                </input>
                                <label for="interface_hdmi">HDMI</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_mc_usb" name="interface_mc_usb">
                                </input>
                                <label for="interface_mc_usb">Micro USB</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_usb30" name="interface_usb30">
                                </input>
                                <label for="interface_usb30">USB 3.0</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_usb31" name="interface_usb31">
                                </input>
                                <label for="interface_usb31">USB 3.1</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_usb31c" name="interface_usb31c">
                                </input>
                                <label for="interface_usb31c">USB 3.1 Type_C</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_usb32" name="interface_usb32">
                                </input>
                                <label for="interface_usb32">USB 3.2</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_usbc" name="interface_usbc">
                                </input>
                                <label for="interface_usbc">USB Type_C</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_wf" name="interface_wf">
                                </input>
                                <label for="interface_wf">Wi_Fi</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_mc_hdmi" name="interface_mc_hdmi">
                                </input>
                                <label for="interface_mc_hdmi">micro_HDMI</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_mi_usb" name="interface_mi_usb">
                                </input>
                                <label for="interface_mi_usb">mini_USB</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_mi_hdmi" name="interface_mi_hdmi">
                                </input>
                                <label for="interface_mi_hdmi">mini_HDMI</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_nfc" name="interface_nfc">
                                </input>
                                <label for="interface_nfc">NFC</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="interface_usb" name="interface_usb">
                                </input>
                                <label for="interface_usb">USB</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='6'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Кількість активних пікселів</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="px_16" name="px_16">
                                </input>
                                <label for="px_16">12 _ 16 Мп</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="px_20" name="px_20">
                                </input>
                                <label for="px_20">16 _ 20 Мп</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="px_12" name="px_12">
                                </input>
                                <label for="px_12">До 12 Мп</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="px_20Up" name="px_20Up">
                                </input>
                                <label for="px_20Up">Понад 20 Мп</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='7'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Кріплення РК-дисплею</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="display_fastening_down" name="display_fastening_down">
                                </input>
                                <label for="display_fastening_down">Екран, шарнір знизу</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="display_fastening_spin" name="display_fastening_spin">
                                </input>
                                <label for="display_fastening_spin">Поворотний дисплей</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <input type="checkbox" id="display_fastening_nospin" name="display_fastening_nospin">
                                </input>
                                <label for="display_fastening_nospin">Фіксований дисплей</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='8'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Мікрофон</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="micro_no"><input type="checkbox" id="micro_no" name="micro_no">
                                </input>Без мікрофона</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                
                                <label for="micro_yes"><input type="checkbox" id="micro_yes" name="micro_yes">
                                </input>Вбудований мікрофон</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="micro_ability"><input type="checkbox" id="micro_ability" name="micro_ability">
                                </input>Роз'єм для зовнішнього мікрофона</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='9'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Захист</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="protect_underwater">    
                                <input type="checkbox" id="protect_underwater" name="protect_underwater">
                                </input>Для підводної зйомки</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="protect_dust">    
                                <input type="checkbox" id="protect_dust" name="protect_dust">
                                </input>Пиловологозахищений</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="protect_simple">    
                                <input type="checkbox" id="protect_simple" name="protect_simple">
                                </input>Звичайний</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="protect_metal">    
                                <input type="checkbox" id="protect_metal" name="protect_metal">
                                </input>Тонкий металевий корпус</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='10'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Живлення</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="power_acum">
                                <input type="checkbox" id="power_acum" name="power_acum">
                                </input>Робота від акумулятора</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="power_aa">
                                <input type="checkbox" id="power_aa" name="power_aa">
                                </input>Робота від батарейок типу АА</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='11'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Макрозйомка</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="macro_yes">
                                <input type="checkbox" id="macro_yes" name="macro_yes">
                                </input>З макрозйомкою</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="macro_no">
                                <input type="checkbox" id="macro_no" name="macro_no">
                                </input>Без макрозйомки</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='12'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Стабілізація</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="stable_no">
                                <input type="checkbox" id="stable_no" name="stable_no">
                                </input>Без стабілізації</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="stable_el">
                                <input type="checkbox" id="stable_el" name="stable_el">
                                </input>Електронна стабілізація</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="stable_mx">
                                <input type="checkbox" id="stable_mx" name="stable_mx">
                                </input>Стабілізація зрушенням матриці</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="stable_op">
                                <input type="checkbox" id="stable_op" name="stable_op">
                                </input>Функція оптичної стабілізації</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='13'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Підтримка RAW</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="raw_no">
                                <input type="checkbox" id="raw_no" name="raw_no">
                                </input>Зйомка тільки в JPEG</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="raw_yes">
                                <input type="checkbox" id="raw_yes" name="raw_yes">
                                </input>Зйомка в RAW і JPEG</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='14'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Звук</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="sound_mono">
                                <input type="checkbox" id="sound_mono" name="sound_mono">
                                </input>Вихід моно</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="sound_sterio">
                                <input type="checkbox" id="sound_sterio" name="sound_sterio">
                                </input>Вихід стерео</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="sound_no">
                                <input type="checkbox" id="sound_no" name="sound_no">
                                </input>Немає</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='15'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Сенсорний екран</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="sensordisplay_no">
                                <input type="checkbox" id="sensordisplay_no" name="sensordisplay_no">
                                </input>Без сенсорного керування</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="sensordisplay_yes">
                                <input type="checkbox" id="sensordisplay_yes" name="sensordisplay_yes">
                                </input>Із сенсорним керуванням</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='16'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Режим експозиції</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="expo_man"><input type="checkbox" id="expo_man" name="expo_man">
                                </input>Є ручні режими (P, A, S, M)</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="expo_auto"><input type="checkbox" id="expo_auto" name="expo_auto">
                                </input>Автоматичні та сценічні режими  </label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr className='CastomHR'></hr>
                        <Accordion.Item eventKey='17'>
                            <Accordion.Header>
                            <p className='MainPage_Filter_item_name'>Діагональ дисплею</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <ul className='MainPage_Filter_list_in'>
                            <li className='MainPage_Filter_item_in'>
                                <label for="displaysize_3">
                                <input type="checkbox" id="displaysize_3" name="displaysize_3">
                                </input>2.5"_3"</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="displaysize_25">
                                <input type="checkbox" id="displaysize_25" name="displaysize_25">
                                </input>До 2.5"</label>
                            </li>
                            <li className='MainPage_Filter_item_in'>
                                <label for="displaysize_3Up">
                                <input type="checkbox" id="displaysize_3Up" name="displaysize_3Up">
                                </input>Понад 3"</label>
                            </li>
                            </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
            </ul>
            <button className='MainPage_Filter_Button' onClick={filtering}>ФІЛЬТРУВАТИ</button>
            <button className='MainPage_Filter_Reset_Button' onClick={resetFilter}>Скинути фільтр</button>
    </div>
  );
};

export default FilterList;
