import React, {useEffect, useState} from 'react'
import './MainPage.css';
import FilterList from './FilterList';
import ProductsList from "./ProductsList";
import {FetchProducts} from "../../Data/Fetch";
import {Link} from "react-router-dom";
import Header from "../../components/Header";
const MainPage = ({bucket, addToBucket, addToComparison}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await FetchProducts();
            const data = await response.json();
            setProducts(data);
        }
        getProducts()
    }, [])
    const [filter, setFilter] = useState({
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
        displaysize_3: false
    })

  return (
    
    <div className="MainPage">
      <Header/>
      <body className="MainPage_body">
        <div className='MainPage_Filter'>
        <p className='MainPage_Filter_text'>
            Фільтри
        </p>
            {FilterList({filter,setFilter})}
        </div>
        <div className='MainPage_catalog'>
            <ProductsList bucket={bucket} addToComparison={addToComparison} addToBucket={addToBucket} products={products}/>
        </div>
      </body>
    </div>
    
  )
}

export default MainPage
