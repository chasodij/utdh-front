import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Chooser.css"

const WarehouseChooser = (props) => {
  const [warehouse, setWarehouse] = useState({
    value: "",
    ref: "",
    isValid: false,
    validityMessage: "",
  });
  const [warehouses, setWarehouses] = useState([]);
  const [areWarehousesShown, setAreWarehousesShown] = useState(false);
  const inputRef = useRef(0);

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //     if(prevProps !== this.props){
  //         this.setState({active: this.props.active, cityRef: this.props.cityRef});
  //         if(!this.props.active){
  //             this.setState({warehouse: "", warehouseRef: "", isWarehouseValid: false, warehouses: []});
  //             document.getElementById("warehouse").value = "";
  //         }
  //     }
  //     else if(prevState.warehouse !== this.state.warehouse || prevState.warehouseRef !== this.state.warehouseRef || prevState.isWarehouseValid !== this.state.isWarehouseValid){
  //         this.props.updateParentStateCallback(this.state.warehouse, this.state.warehouseRef, this.state.isWarehouseValid);
  //     }
  //     if(prevState.warehouse !== this.state.warehouse){
  //         this.handleWarehouseRequest();
  //     }

  // }

  const getWarehouses = useCallback(() => {
    if (!props.active || warehouse.isValid) {
      hideSuggestedWarehouses();
      return;
    }

    let properties = {
      SettlementRef: props.cityRef,
      Limit: "50",
      Page: "1",
    };
    if (warehouse.value !== "") {
      properties.FindByString = warehouse.value;
    }

    fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      body: JSON.stringify({
        apiKey: "38ae6f0e1431cf81d4519ef08c9c2110",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: properties,
      }),
    })
      .then((response) => response.json())
      .then((warehouses) => {
        if (warehouses.data.length === 0) {
          this.setState({ warehouses: [] });
          return;
        }
        setWarehouses(warehouses.data);
        showSuggestedWarehouses();
      });
  }, [props.active, props.cityRef, warehouse.isValid, warehouse.value]);

  useEffect(() => {
    let timer = setTimeout(() => {
      getWarehouses();
    }, 350);
    return () => {
      clearTimeout(timer);
    };
  }, [warehouse.value, getWarehouses]);

  const warehouseKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      getWarehouses();
    }
  };

  const changeWarehouseHandler = (event) => {
    setWarehouse({
      value: event.target.value,
      isValid: false,
      validityMessage: "Будь ласка, оберіть відділення доставки.",
    });
  };

  const selectWarehouseFromListHandler = (event) => {
    setWarehouse({
      warehouse: event.target.textContent,
      ref: event.target.getAttribute("data-value"),
      isValid: true,
      validityMessage: "",
    });

    inputRef.current.setCustomValidity("");

    hideSuggestedWarehouses();
  };

  const hideSuggestedWarehouses = (event) => {
    if(event && event.relatedTarget && event.relatedTarget.tagName === "UL"){
        return;
    }
    setAreWarehousesShown(false);
  };
  const showSuggestedWarehouses = () => {
    setAreWarehousesShown(true);
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
        value={warehouse.value}
        required
      />
      <ul
        className={`tips-list ${areWarehousesShown ? "d-block" : "d-none"}`}
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
        {warehouse.validityMessage}
      </div>
    </div>
  );
};

export default WarehouseChooser;
