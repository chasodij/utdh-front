import React, {useEffect, useState} from 'react'
import './MainPage.css';
import FilterList from './FilterList';
import ProductsList from "./ProductsList";
import {FetchProducts} from "../../Data/Fetch";
const MainPage = () => {

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
      <header className="MainPage_header">
        <a className='MainPage_Icon'>
            Іконка
        </a>
        <div className='MainPage_menu'>
            <a className='MainPage_ChoiceHelper'>
                Підібрати камеру
            </a>
            <a className='link' href='./comparison'>
                <svg width="70px" height="70px" viewBox="0 0 32 32">
                    <path d="M30 12.75h-5.274l-5.581-10.344c-0.215-0.396-0.628-0.66-1.102-0.66-0.69 0-1.25 0.559-1.25 1.25 0 0.219 0.056 0.425 0.155 0.604l-0.003-0.006 4.941 9.156h-11.735l4.992-9.151c0.098-0.174 0.155-0.382 0.155-0.603 0-0.691-0.56-1.25-1.25-1.25-0.473 0-0.884 0.262-1.097 0.649l-0.003 0.006-5.645 10.349h-5.303c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h0.95l1.855 13.916c0.084 0.615 0.607 1.084 1.238 1.084 0 0 0.001 0 0.001 0h20c0 0 0.001 0 0.002 0 0.631 0 1.153-0.469 1.236-1.078l0.001-0.006 1.855-13.916h0.861c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM24.951 27.75h-17.812l-1.667-12.5h21.145zM16.046 16.75h-0.006c-0.688 0-1.246 0.556-1.25 1.244v0l-0.035 7c0 0.002 0 0.003 0 0.005 0 0.688 0.556 1.247 1.244 1.251h0.006c0 0 0 0 0 0 0.688 0 1.247-0.556 1.25-1.244v-0l0.035-7c0-0.002 0-0.003 0-0.005 0-0.688-0.556-1.247-1.244-1.251h-0zM11.067 16.75h-0.006c0 0 0 0 0 0-0.688 0-1.247 0.556-1.25 1.244v0l-0.034 7c0 0.001 0 0.003 0 0.005 0 0.689 0.556 1.247 1.244 1.251h0.006c0 0 0 0 0.001 0 0.688 0 1.246-0.556 1.249-1.244v-0l0.034-7c0-0.002 0-0.004 0-0.006 0-0.688-0.556-1.247-1.244-1.25h-0zM21.018 16.75h-0.006c-0.688 0-1.246 0.556-1.25 1.244v0l-0.033 7c0 0.001 0 0.003 0 0.005 0 0.689 0.556 1.247 1.244 1.251h0.006c0.688-0.001 1.246-0.557 1.25-1.244v-0l0.033-7c0-0.002 0-0.004 0-0.006 0-0.688-0.556-1.247-1.244-1.25h-0z"></path>
                </svg>
            </a>
            <a className='link'>
                <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none">
                    <path d="M2.50047 13H8.50047M15.5005 13H21.5005M12.0005 7V21M12.0005 7C13.3812 7 14.5005 5.88071 14.5005 4.5M12.0005 7C10.6198 7 9.50047 5.88071 9.50047 4.5M4.00047 21L20.0005 21M4.00047 4.50001L9.50047 4.5M9.50047 4.5C9.50047 3.11929 10.6198 2 12.0005 2C13.3812 2 14.5005 3.11929 14.5005 4.5M14.5005 4.5L20.0005 4.5M8.88091 14.3364C8.48022 15.8706 7.11858 17 5.50047 17C3.88237 17 2.52073 15.8706 2.12004 14.3364C2.0873 14.211 2.07093 14.1483 2.06935 13.8979C2.06838 13.7443 2.12544 13.3904 2.17459 13.2449C2.25478 13.0076 2.34158 12.8737 2.51519 12.6059L5.50047 8L8.48576 12.6059C8.65937 12.8737 8.74617 13.0076 8.82636 13.2449C8.87551 13.3904 8.93257 13.7443 8.9316 13.8979C8.93002 14.1483 8.91365 14.211 8.88091 14.3364ZM21.8809 14.3364C21.4802 15.8706 20.1186 17 18.5005 17C16.8824 17 15.5207 15.8706 15.12 14.3364C15.0873 14.211 15.0709 14.1483 15.0693 13.8979C15.0684 13.7443 15.1254 13.3904 15.1746 13.2449C15.2548 13.0076 15.3416 12.8737 15.5152 12.6059L18.5005 8L21.4858 12.6059C21.6594 12.8737 21.7462 13.0076 21.8264 13.2449C21.8755 13.3904 21.9326 13.7443 21.9316 13.8979C21.93 14.1483 21.9137 14.211 21.8809 14.3364Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
      </header>
      <body className="MainPage_body">
        <div className='MainPage_Filter'>
        <p className='MainPage_Filter_text'>
            Фільтри
        </p>
            {FilterList({filter,setFilter})}
        </div>
        <div className='MainPage_catalog'>
            <ProductsList products={products}/>
        </div>
      </body>
    </div>
    
  )
}

export default MainPage
