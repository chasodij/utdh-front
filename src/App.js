import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import ScalesPage from "./Pages/ScalesPage/ScalesPage";
import { useEffect, useState, useContext } from "react";
import ScalePageVersion2 from "./Pages/ScalesPage/ScalePageVersion2";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Basket from "./Pages/Basket/Basket";
import CameraChooser from "./Pages/CameraChooser/CameraChooser";
import BasketContext from "./Data/basket-context";

function App() {
  document.body.style.backgroundColor = "#E6E4E4";

  const [bucket, setBucket] = useState([]);
  const [scales, setScales] = useState([]);

  const [isBasketShown, setIsBasketShown] = useState(false);
  const [isCameraChooserShown, setIsCameraChooserShown] = useState(false);

  const basketCtx = useContext(BasketContext);

  const addToCart = (product) => {
    basketCtx.addItem(product);
    const notify = () => toast("Added to cart!");
    notify();
  };

  const addToComparison = (product) => {
    if (scales.find((item) => item === product)) {
      const notify = () => toast.error("Товар уже добавлен в сравнение");
      notify();
      return;
    }

    setScales([...scales, product]);
    const notify = () => toast("Added to comparison!");
    notify();
  };

  const showBasketHandler = () => {
    setIsBasketShown(true);
    hideCameraChooserHandler();
  };

  const hideBasketHandler = () => {
    setIsBasketShown(false);
  };

  const showCameraChooserHandler = () => {
    setIsCameraChooserShown(true);
    hideBasketHandler();
  };

  const hideCameraChooserHandler = () => {
    setIsCameraChooserShown(false);
  };

  return (
    <BrowserRouter>
      <Header
        showCameraChooser={showCameraChooserHandler}
        showBasket={showBasketHandler}
      />
      {isBasketShown && <Basket hideBasket={hideBasketHandler} />}
      {isCameraChooserShown && <CameraChooser hideCameraChooser={hideCameraChooserHandler} />}
      <div style={{marginTop: "100px"}}>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              bucket={bucket}
              addToComparison={addToComparison}
              addToBucket={addToCart}
            />
          }
        />
        <Route
          path="/comparison"
          element={
            <ScalePageVersion2
              bucket={bucket}
              addToComparison={addToComparison}
              addToBucket={addToCart}
              scales={scales}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProductPage
              bucket={bucket}
              addToComparison={addToComparison}
              addToBucket={addToCart}
              scales={scales}
            />
          }
        />
        <Route path="/checkout/*" element={<CheckoutPage />} />
        <Route path="/choose" element={<div></div>} />
        <Route path="/cart" element={<div></div>} />
      </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme={"dark"}
      />
    </BrowserRouter>
  );
}

export default App;
