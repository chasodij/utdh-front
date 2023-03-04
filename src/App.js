
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ScalesPage from './Pages/ScalesPage/ScalesPage';
import {useState} from "react";

function App() {
  
  document.body.style.backgroundColor = "#E6E4E4"

  const [bucket, setBucket] = useState([]);
  const [scales, setScales] = useState([]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage bucket={bucket} setBucket={setBucket} scales={scales} setScales={setScales}/>}/>
          <Route path="/comparison" element={<ScalesPage bucket={bucket} setBucket={setBucket} scales={scales} setScales={setScales}/>}/>
          <Route path="/product/:productId" element={<ProductPage bucket={bucket} setBucket={setBucket} scales={scales} setScales={setScales}/>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
