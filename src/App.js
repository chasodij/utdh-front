
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ScalesPage from './Pages/ScalesPage/ScalesPage';
import {useEffect, useState} from "react";
import ScalePageVersion2 from "./Pages/ScalesPage/ScalePageVersion2";

function App() {
  
  document.body.style.backgroundColor = "#E6E4E4"

  const [bucket, setBucket] = useState([]);
  const [scales, setScales] = useState([]);

    const addToCart = (product) => {
        if (bucket.find(item => item.id === product.id)) {
            return;
        }
        setBucket([...bucket, product]);
    }

    const addToComparison = (product) => {
        if (scales.find(item => item === product)) {
            return;
        }
        setScales([...scales, product]);
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage bucket={bucket} addToComparison={addToComparison} addToBucket={addToCart}/>}/>
          <Route path="/comparison" element={<ScalePageVersion2 bucket={bucket} addToComparison={addToComparison} addToBucket={addToCart} scales={scales}/>}/>
          <Route path="/product/:productId" element={<ProductPage bucket={bucket} addToComparison={addToComparison} addToBucket={addToCart} scales={scales}/>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
