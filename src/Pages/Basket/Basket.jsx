import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BasketContext from "../../Data/basket-context";
import BasketTable from "./BasketTable";
import ReactDOM from "react-dom";
import "./Basket.css";

const portalElement = document.getElementById("overlays");

const Basket = (props) => {
  const basketCtx = useContext(BasketContext);

  return (
    <>
      {ReactDOM.createPortal(<div className="overlay" id="overlay" onClick={props.hideBasket}/>, portalElement)}
      {ReactDOM.createPortal(
        <div className="modal-container bg-white">
            <div className="row justify-content-between align-items-center py-1">
              <div className="col align-items-end">
                <span className="h2">Кошик</span>
              </div>
              <div className="col p-3 text-end">
                <button
                  type="button"
                  className="btn-close btn-outline-light"
                  aria-label="Close"
                  onClick={props.hideBasket}
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
                  onClick={props.hideBasket}
                >
                  Оформити замовлення
                </Link>
              ) : (
                <button className="btn btn-dark" disabled>
                  Оформити замовлення
                </button>
              )}
            </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default Basket;
