
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  
  document.body.style.backgroundColor = "#E6E4E4"

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/comparison" element={<></>}/>
          <Route path="/product/:productId" element={<ProductPage/>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
