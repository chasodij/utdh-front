import React, { useEffect, useState } from "react";
import "./MainPage.css";
import FilterList from "./FilterList";
import ProductsList from "./ProductsList";
import { FetchProducts } from "../../Data/Fetch";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Zoom } from "react-toastify";
const MainPage = ({ bucket, addToBucket, addToComparison }) => {
  const [products, setProducts] = useState([]);
  const [filter1, setFilter] = useState({
    system_wom: false,
    system_wm: false,
    system_c: false,
    system_qp: false,

    video_4k: false,
    video_8k: false,
    video_6k: false,
    video_fh43: false,
    video_fh169: false,
    video_hd: false,
    video_uhd: false,
    video_vga: false,
    video_wo: false,

    sensorSize_1: false,
    sensorSize_1_2: false,
    sensorSize_131: false,
    sensorSize_132: false,
    sensorSize_18: false,
    sensorSize_43: false,
    sensorSize_asp: false,
    sensorSize_FF: false,

    optica_yes: false,
    optica_no: false,

    Zoom_wo: false,
    Zoom_36: false,
    Zoom_20: false,
    Zoom_6: false,
    Zoom_36Up: false,

    interface_mj: false,
    interface_av: false,
    interface_bt: false,
    interface_gps: false,
    interface_hdmi: false,
    interface_mc_usb: false,
    interface_usb31: false,
    interface_usb31c: false,
    interface_usb32: false,
    interface_usbc: false,
    interface_wf: false,
    interface_mc_hdmi: false,
    interface_mi_usb: false,
    interface_mi_hdmi: false,
    interface_nfc: false,
    interface_usb: false,
    interface_usb30: false,

    px_20: false,
    px_12: false,
    px_20Up: false,
    px_16: false,

    display_fastening_spin: false,
    display_fastening_nospin: false,
    display_fastening_down: false,

    micro_yes: false,
    micro_ability: false,
    micro_no: false,

    protect_simple: false,
    protect_dust: false,
    protect_metal: false,
    protect_underwater: false,

    power_acum: false,
    power_aa: false,

    macro_no: false,
    macro_yes: false,

    stable_el: false,
    stable_mx: false,
    stable_op: false,
    stable_no: false,

    raw_yes: false,
    raw_no: false,

    sound_sterio: false,
    sound_no: false,
    sound_mono: false,

    sensordisplay_yes: false,
    sensordisplay_no: false,

    expo_man: false,
    expo_auto: false,

    displaysize_25: false,
    displaysize_3Up: false,
    displaysize_3: false,
  });

  useEffect(() => {
    const getProducts = async () => {
      const response = await FetchProducts();
      var data = await response.json();
     
        console.log(filter1)
          data = data.filter(function(value, index, arr){ 
            var system = !((filter1.system_wom && !value.systemNames.includes("Бездзеркальна")) || (filter1.system_wm && !value.systemNames.includes("Дзеркальна")) ||(filter1.system_c && !value.systemNames.includes("Компактна")) ||(filter1.system_qp && !value.systemNames.includes("Миттєвого друкування")));
            var video = !((filter1.video_wo && value.resolution != "(-)")  || (filter1.video_vga && value.resolution != "(640x480)") || (filter1.video_uhd && value.resolution != "(3840x2160)") ||(filter1.video_hd && value.resolution != "(1280x720)") ||(filter1.video_fh169 && value.resolution != "(1920x1080)") ||(filter1.video_fh43 && value.resolution != "(1440x1080)") ||(filter1.video_6k && value.resolution != "(6000x3164)") ||(filter1.video_8k && value.resolution != "(7680x4320)") ||(filter1.video_4k && value.resolution != "(4096x2160)"));
            var sensor = !((filter1.sensorSize_1 && !(value.sensorWidth = 2.54)) || (filter1.sensorSize_1_2 && !(value.sensorWidth < 2.54)) ||(filter1.sensorSize_13_1 && !(value.sensorWidth = 13.1)) ||(filter1.sensorSize_13_2 && !(value.sensorWidth = 13.2)) ||(filter1.sensorSize_18 && !(value.sensorWidth = 18.7)) ||(filter1.sensorSize_43 && !(value.sensorWidth = 17.3)) ||(filter1.sensorSize_asp && !(value.sensorWidth > 18.8 && value.sensorWidth < 35)) ||(filter1.sensorSize_ff && !(value.sensorWidth = 35)));
            var optica = !( (filter1.optica_yes && !value.isOpticInComplect) || (filter1.optica_no && value.isOpticInComplect) );
            var zoom = !( (filter1.Zoom_wo && value.maxZoomValue != 1) || (filter1.Zoom_36 && !(value.maxZoomValue <= 36 && value.maxZoomValue >= 20)) || (filter1.Zoom_20 && !(value.maxZoomValue <= 20 && value.maxZoomValue >= 6)) || (filter1.Zoom_6 && !(value.maxZoomValue < 6)) || (filter1.Zoom_36Up && !(value.maxZoomValue > 36)));
            var intrface = !( (filter1.interface_mj && !value.interfaceNames.includes("3.5 mini-jack")) || (filter1.interface_av && !value.interfaceNames.includes("AV")) || (filter1.interface_bt && !value.interfaceNames.includes("Bluetooth"))|| (filter1.interface_gps && !value.interfaceNames.includes("GPS"))|| (filter1.interface_hdmi && !value.interfaceNames.includes("HDMI"))|| (filter1.interface_mc_usb && !value.interfaceNames.includes("Micro USB"))|| (filter1.interface_nfc && !value.interfaceNames.includes("NFC"))|| (filter1.interface_usb && !value.interfaceNames.includes("USB"))|| (filter1.interface_usb30 && !value.interfaceNames.includes("USB 3.0"))|| (filter1.interface_usb31 && !value.interfaceNames.includes("USB 3.1"))|| (filter1.interface_usb31c && !value.interfaceNames.includes("USB 3.1 Type-C"))|| (filter1.interface_usb32 && !value.interfaceNames.includes("USB 3.2"))|| (filter1.interface_usbc && !value.interfaceNames.includes("USB Type-C"))|| (filter1.interface_wf && !value.interfaceNames.includes("Wi-Fi"))|| (filter1.interface_mc_hdmi && !value.interfaceNames.includes("micro-HDMI"))|| (filter1.interface_mi_usb && !value.interfaceNames.includes("mini USB"))|| (filter1.interface_mi_hdmi && !value.interfaceNames.includes("mini-HDMI")));
            var pixel = !( (filter1.px_16 && !(value.megaPixels >= 12.0 && value.megaPixels <= 16.0)) || (filter1.px_20 && !(value.megaPixels >= 16.0 && value.megaPixels <= 20.0)) || (filter1.px_20Up && !(value.megaPixels > 20.0)) || (filter1.px_12 && !(value.megaPixels < 12.0)) );
            var displayfasten = !( (filter1.display_fastening_down && value.lcdMount != "Екран, шарнір знизу") || (filter1.display_fastening_spin && value.lcdMount != "Поворотний дисплей") || (filter1.display_fastening_nospin && value.lcdMount != "Фіксований дисплей"));
            var micro = !( (filter1.micro_no && value.microphone != "Без мікрофону") || (filter1.micro_yes && value.microphone != "Вбудований мікрофон") || (filter1.micro_ability && value.microphone != "Роз'єм для зовнішнього мікрофона") );
            var protect = !( (filter1.protect_simple && value.protection != "Звичайна") || (filter1.protect_underwater && value.protection != "Для підводної зйомки") || (filter1.protect_dust && value.protection != "Пиловологозахищений") || (filter1.protect_metal && value.protection != "Тонкий металевий корпус") );
            var power =  !( (filter1.power_acum && value.supply != "Робота від акумулятора") || (filter1.power_aa && value.supply != "Робота від батарей АА"));
            var macro = ! ( (filter1.macro_yes && !value.isMacroPhotography) || (filter1.macro_no && value.isMacroPhotography) );
            var stable = !( (filter1.stable_no && value.stabilization != "Без стабілізації") || (filter1.stable_el && value.stabilization != "Електронна стабілізація") || (filter1.stable_mx && value.stabilization != "Стабілізація зрушенням матриці") ||(filter1.stable_op && value.stabilization != "Функція оптичної стабілізації") );
            var raw = !( (filter1.raw_yes && !value.isRAWSupport) || (filter1.raw_no && value.isRAWSupport));
            var sound = !( (filter1.sound_mono && value.soundFormat != "Вихід моно") || (filter1.sound_sterio && value.soundFormat != "Стерео") || (filter1.sound_no && value.soundFormat != "немає"));
            var displaysensor= !( (filter1.sensordisplay_yes && !value.isSensorDisplay) || (filter1.sensordisplay_no && value.isSensorDisplay));
            var expo = !( (filter1.expo_auto && value.expositionMode.indexOf("Авто") < 0) || (filter1.expo_man && value.expositionMode.indexOf("Ручн") < 0));
            var displaysize = !( (filter1.displaysize_3 && !(parseFloat(value.lcdDiagonal.slice(0, -3).replace(".",",")) >= 6.35 && parseFloat(value.lcdDiagonal.slice(0, -3).replace('.',',')) <= 7.62)) || (filter1.displaysize_25 && !(parseFloat(value.lcdDiagonal.slice(0, -3).replace('.',','))  <= 6.35)) || (filter1.displaysize_3Up && !((parseFloat(value.lcdDiagonal.slice(0, -3).replace('.',',')) > 7.62))));
           
            return system && video && sensor && optica && zoom && intrface && pixel && displayfasten && micro && protect && power && macro && stable && raw && sound && displaysensor && expo && displaysize;
          });
          
       
      
      setProducts(data);
    };
    getProducts();
  }, [filter1]);

  
  

  return (
    <div className="MainPage">
      <Header />
      <body className="MainPage_body">
        <div className="MainPage_Filter">
          <p className="MainPage_Filter_text">Фільтри</p>
          {FilterList({ filter1, setFilter })}
        </div>
        <div className="MainPage_catalog">
          <ProductsList
            bucket={bucket}
            addToComparison={addToComparison}
            addToBucket={addToBucket}
            products={products}
          />
        </div>
      </body>
    </div>
  );
};

export default MainPage;
