import React, { useState, useContext, useEffect } from "react";
import Counter from "./Counter";
import DeleteIcon from "../../Icons/DeleteIcon";
import BasketContext from "../../Data/basket-context";
import "./BasketTable.css";

const BasketTable = () => {
  const basketCtx = useContext(BasketContext);

  const deleteBasketItem = (id) => {
    if (window.confirm("Ви впевнені,що хочете видалити товар з кошика?")) {
      basketCtx.deleteItem(id);
    }
  };

  return basketCtx.basketItems.length === 0 ? (
    <div>
      Тут поки-що пусто
      <input
        type="button"
        onClick={() => {
          basketCtx.addItem({
            id: 352,
            modelName: "camera",
            price: 123.0,
            photo:
              "https://fujifilm-x.com/wp-content/uploads/2020/02/x100v_thum.jpg",
          });
        }}
      />
    </div>
  ) : (
    <table className="table align-middle text-center">
      <thead>
        <tr>
          <th scope="col">
            <input
              type="button"
              onClick={() => {
                basketCtx.addItem({
                  id: 352,
                  modelName: "camera",
                  price: 123.0,
                  photo:
                    "https://fujifilm-x.com/wp-content/uploads/2020/02/x100v_thum.jpg",
                });
              }}
            />
          </th>
          <th scope="col"></th>
          <th scope="col">Кількість</th>
          <th scope="col">Вартість</th>
        </tr>
      </thead>
      <tbody>
        {basketCtx.basketItems.map((item) => (
          <tr className="table-row" key={item.id}>
            <td>
              <div className="basket-pic">
                <img src={item.photo} alt="pic" />
              </div>
            </td>
            <td>{item.modelName}</td>
            <td>
              <Counter
                amount={item.amount}
                onAmountUpdate={(num) => basketCtx.setItemAmount(item.id, num)}
                onIncrementItemAmount={() =>
                  basketCtx.incrementItemAmount(item.id)
                }
                onDecrementItemAmount={() =>
                  basketCtx.decrementItemAmount(item.id)
                }
              />
            </td>
            <td>
              <div className="position-relative">
                {item.amount * item.price}
                <div className="basket__delete-icon">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => deleteBasketItem(item.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BasketTable;
