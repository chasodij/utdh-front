import React, { useState, useEffect } from "react";

const BasketContext = React.createContext({
  basketItems: [{ id: 0, title: "", price: 0.0, image: "", amount: 0 }],
  total: 0.0,
  addItem: (item) => {},
  setItemAmount: (id, amount) => {},
  incrementItemAmount: (id) => {},
  decrementItemAmount: (id) => {},
  deleteItem: (id) => {},
});

export const BasketContextProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState({ items: [], total: 0.0 });

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("basketItems"));
    if (items) {
      setBasketItems({
        items: items,
        total: items.reduce((sum, a) => (sum += a)),
      });
    }
  }, []);

  const addItemHandler = (item) => {
    setBasketItems((prevState) => {
      const newState = { ...prevState };
      const foundItem = newState.items.find((x) => x.id == item.id);
      if (!foundItem) {
        item.amount = 1;
        newState.items.push(item);
      } else {
        foundItem.amount++;
      }
      newState.total += item.price;
      return newState;
    });
  };

  const setItemAmountHandler = (id, amount) => {
    setBasketItems((prevState) => {
      const newState = { ...prevState };
      const item = newState.items.find((x) => x.id == id);
      if (item) {
        newState.total -= item.price * item.amount;
        item.amount = amount;
        newState.total += item.price * item.amount;
      }
      return newState;
    });
  };

  const changeItemAmountByOneHandler = (id, isIncrement) => {
    setBasketItems((prevState) => {
      let newState = { ...prevState };
      let item = newState.items.find((x) => x.id == id);
      if (item) {
        if (isIncrement) {
          item.amount++;
          newState.total += item.price;
        } else {
          if (item.amount > 1) {
            item.amount--;
            newState.total -= item.price;
          }
        }
      }
      return newState;
    });
  };

  const deleteItemHandler = (id) => {
    setBasketItems((prevState) => {
      const newState = { ...prevState };
      const idx = newState.items.findIndex((x) => x.id == id);
      if (idx != -1) {
        const item = newState.items[idx];
        newState.total -= item.price * item.amount;
        newState.items.splice(idx, 1);
      }
      return newState;
    });
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems: basketItems.items,
        total: basketItems.total,
        addItem: addItemHandler,
        setItemAmount: setItemAmountHandler,
        incrementItemAmount: (id) => changeItemAmountByOneHandler(id, true),
        decrementItemAmount: (id) => changeItemAmountByOneHandler(id, false),
        deleteItem: deleteItemHandler,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
