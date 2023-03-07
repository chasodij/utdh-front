import React, { useState, useEffect, useContext } from "react";
import BasketTable from "../Basket/BasketTable";
import CityChooser from "./CityChooser";
import WarehouseChooser from "./WarehouseChooser";
import { Link, Route, Routes } from "react-router-dom";
import "./CheckoutPage.css";
import BasketContext from "../../Data/basket-context";
import TextInput from "../../UI/TextInput";
import PhoneInput from "../../UI/PhoneInput";
import EmailInput from "../../UI/EmailInput";

const CheckoutPage = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState({
    value: "",
    ref: "",
    isValid: false,
    validityMessage: "",
  });
  const [warehouse, setWarehouse] = useState({
    value: "",
    ref: "",
    isValid: false,
    validityMessage: "",
  });
  const basketCtx = useContext(BasketContext);

  const sendOrder = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";

    if (!event.target.checkValidity()) {
      return;
    }

    fetch("http://localhost/php/orders.php", {
      method: "POST",
      body: JSON.stringify({
        surname: surname,
        name: name,
        patronymic: patronymic,
        phone: phone,
        email: email,
        city: city,
        warehouse: warehouse,
        basketItems: basketCtx.basketItems,
      }),
    })
      .then((response) => response.text())
      .then((responseText) => {
        if (responseText === "success") {
          basketCtx.clear();
          window.location.href = "checkout/success";
        }
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <form id="checkout-form" onSubmit={sendOrder} noValidate>
            <div className="container row">
              <div className="col-9">
                <div className="border-bottom border-dark p-2">
                  <h2>Кошик</h2>
                </div>
                <div className="px-3 py-4">{<BasketTable />}</div>
                <div className="border-bottom border-dark p-2">
                  <h2>Ваші контактні дані</h2>
                </div>
                <div className="px-3 py-4 row g-3">
                  <div className="col">
                    <TextInput
                      id="surname"
                      label="Прізвище"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      id="name"
                      label="Ім'я"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      id="patronymic"
                      label="По батькові"
                      value={patronymic}
                      onChange={(e) => setPatronymic(e.target.value)}
                    />
                  </div>
                </div>
                <div className="px-3 pb-4 row g-3">
                  <div className="col">
                    <PhoneInput
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <EmailInput
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="px-3 pb-4">
                  <CityChooser
                    setCityCallback={(value, ref, isValid) =>
                      setCity({
                        value: value,
                        ref: ref,
                        isValid: isValid,
                      })
                    }
                    cityValue={city.value}
                    isCityValid={city.isValid}
                  />
                </div>
                <div className="px-3 pb-4">
                  <WarehouseChooser
                    cityRef={city.ref}
                    active={city.isValid}
                    setWarehouseCallback={(value, ref, isValid) =>
                      setWarehouse({
                        value: value,
                        ref: ref,
                        isValid: isValid,
                      })
                    }
                    warehouseValue={warehouse.value}
                    isWarehouseValid={warehouse.isValid}
                  />
                </div>
              </div>
              <div className="container col-3 position-sticky border checkout-sticky">
                <div className="p-1 pt-2">
                  <h4>Підсумок</h4>
                </div>
                <div className="p-1">
                  <table className="table table-sm">
                    <tbody>
                      {basketCtx.basketItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.amount} шт.</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row p-2">
                  <div className="col-7">
                    <strong>Всього</strong>
                  </div>
                  <div className="col-5">
                    <strong>{basketCtx.total} грн</strong>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <button className="btn btn-dark" type="submit">
                    Підтвердити замовлення
                  </button>
                </div>
              </div>
            </div>
          </form>
        }
      />
      <Route
        path="/success"
        element={
          <>
            <div className="container h4 p-3">Замовлення успішно оформлене</div>
            <div className="container">
              <Link className="btn btn-dark" to="/cabinet/orders">
                Переглянути всі замовлення
              </Link>
            </div>
          </>
        }
      />
    </Routes>
  );
};

export default CheckoutPage;
