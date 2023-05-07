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
  const [paymentData, setPaymentData] = useState("");
  const basketCtx = useContext(BasketContext);

  const sendOrder = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";

    if (!event.target.checkValidity()) {
      return;
    }

    fetch("https://localhost:7275/orders", {
      method: "POST",
      body: JSON.stringify({
        customerSurname: surname,
        customerName: name,
        customerPatronymic: patronymic,
        customerPhone: phone,
        customerEmail: email,
        customerAddress: city.value,
        customerPostOffice: warehouse.value,
        cartItems: basketCtx.basketItems.map((x) => {
          return {
            amount: x.amount,
            cameraId: x.id,
          };
        }),
      }),
    }).then((response) => {
      basketCtx.clear();
      if (response.status == 200) {
        window.location.href = "checkout/success";
      } else {
        window.location.href = "checkout/fail";
      }
      const data = {
        public_key: "sandbox_i23289273200",
        version: "3",
        action: "pay",
        amount: basketCtx.total,
        currency: "UAH",
        description: "Замовлення №",
        order_id: "000001",
      };
      const base64 = Buffer.from(JSON.stringify(data)).toString("base64");
      setPaymentData(base64);
      document.getElementById("paymentForm").submit();
    });
  };

  return (
    <div className="checkout-page">
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
                    <form
                      id="paymentForm"
                      method="POST"
                      action="https://www.liqpay.ua/api/3/checkout"
                      accept-charset="utf-8"
                    >
                      <input type="hidden" name="data" value={paymentData} />
                      <input
                        type="hidden"
                        name="signature"
                        value="r57DIssONNNMF4BYOOUEXUykTRU="
                      />
                    </form>
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
              <div className="container h4 p-3">
                Замовлення успішно оформлене
              </div>
              <div className="container">
                <Link className="btn btn-dark" to="/">
                  На головну
                </Link>
              </div>
            </>
          }
        />
        <Route
          path="/fail"
          element={
            <>
              <div className="container h4 p-3">
                Під час оформлення замовлення виникла помилка. Спробуйте
                повторити замовлення або зв'яжіться з підтримкою.
              </div>
              <div className="container">
                <Link className="btn btn-dark" to="/">
                  На головну
                </Link>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default CheckoutPage;
