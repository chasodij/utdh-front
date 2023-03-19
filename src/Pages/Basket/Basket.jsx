import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BasketContext from "../../Data/basket-context";
import BasketTable from "./BasketTable";
import "./Basket.css";

const Basket = (props) => {
  const basketCtx = useContext(BasketContext);

  //   const closeOverlay = () => {
  //     document.getElementById("overlay").classList.add("overlay-hide");
  //     document.getElementsByTagName("body")[0].classList.remove("noscroll");
  //   };

  return (
    <div className="overlay overlay-hide" id="overlay">
      <div className="half-visible" onClick={props.onClose}></div>
      <div className="container-md modal-container basket-container bg-white">
        <div className="container pb-3">
          <div className="row justify-content-between align-items-center py-1">
            <div className="col align-items-end">
              <span className="h2">Кошик</span>
            </div>
            <div className="col p-3 text-end">
              <button
                type="button"
                className="btn-close btn-outline-light"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
          </div>
          <BasketTable />
          <div className="text-end">
            <span className="d-block pb-3">Всього: {basketCtx.total} грн</span>
            {basketCtx.basketItems.length !== 0 ? (
              <Link
                className="btn btn-dark"
                to="/checkout"
                onClick={props.onClose}
              >
                Оформити замовлення
              </Link>
            ) : (
              <button className="btn btn-dark" disabled>
                Оформити замовлення
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
