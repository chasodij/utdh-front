import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Chooser.css";

const WarehouseChooser = (props) => {
  const [warehouses, setWarehouses] = useState([]);
  const [isListShown, setIsListShown] = useState(false);
  const inputRef = useRef(0);

  const getWarehouses = useCallback(() => {
    if (!props.active || props.isWarehouseValid) {
      hideSuggestedWarehouses();
      return;
    }

    let methodProperties = {
      SettlementRef: props.cityRef,
      Limit: "50",
      Page: "1",
    };
    if (props.warehouseValue !== "") {
      methodProperties.FindByString = props.warehouseValue;
    }

    fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      body: JSON.stringify({
        apiKey: "38ae6f0e1431cf81d4519ef08c9c2110",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: methodProperties,
      }),
    })
      .then((response) => response.json())
      .then((warehouses) => {
        if (warehouses.data.length === 0) {
          setWarehouses([]);
          return;
        }
        setWarehouses(warehouses.data);
        showSuggestedWarehouses();
      });
  }, [
    props.active,
    props.cityRef,
    props.isWarehouseValid,
    props.warehouseValue,
  ]);

  useEffect(() => {
    let timer = setTimeout(() => {
      getWarehouses();
    }, 350);
    return () => {
      clearTimeout(timer);
    };
  }, [props.warehouseValue, getWarehouses]);

  const warehouseKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      getWarehouses();
    }
  };

  const changeWarehouseHandler = (event) => {
    props.setWarehouseCallback(event.target.value, false);

    inputRef.current.setCustomValidity(
      "Будь ласка, оберіть відділення доставки."
    );
  };

  const selectWarehouseFromListHandler = (event) => {
    props.setWarehouseCallback(
      event.target.textContent,
      event.target.getAttribute("data-value"),
      true
    );

    inputRef.current.setCustomValidity("");

    hideSuggestedWarehouses();
  };

  const hideSuggestedWarehouses = (event) => {
    if (event && event.relatedTarget && event.relatedTarget.tagName === "UL") {
      return;
    }
    setIsListShown(false);
  };
  const showSuggestedWarehouses = () => {
    setIsListShown(true);
  };

  return (
    <div className="position-relative" onBlur={hideSuggestedWarehouses}>
      <label htmlFor="warehouse" className="form-label">
        Відділення Нової Пошти
      </label>
      <input
        ref={inputRef}
        className="form-control"
        id="warehouse"
        disabled={!props.active}
        onChange={changeWarehouseHandler}
        onKeyDown={warehouseKeyDownHandler}
        onFocus={getWarehouses}
        value={props.warehouseValue}
        required
      />
      <ul
        className={`tips-list ${isListShown ? "d-block" : "d-none"}`}
        id="warehouse-suggest"
        tabIndex="0"
      >
        {warehouses.map((item) => (
          <li
            key={item.Ref}
            className="tips-list__item"
            data-value={item.Ref}
            onClick={selectWarehouseFromListHandler}
          >
            {item.Description}
          </li>
        ))}
      </ul>
      <div className="invalid-feedback" id="warehouse-feedback">
        {props.isWarehouseValid
          ? ""
          : "Будь ласка, оберіть відділення доставки."}
      </div>
    </div>
  );
};

export default WarehouseChooser;
