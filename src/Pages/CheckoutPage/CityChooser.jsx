import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Chooser.css";

const CityChooser = (props) => {
  const [cities, setCities] = useState([]);
  const [areCitiesShown, setAreCitiesShown] = useState(false);
  const inputRef = useRef(null);

  const getCities = useCallback(() => {
    if (props.cityValue.length < 3 || props.isCityValid) {
      hideSuggestedCities();
      return;
    }

    fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      body: JSON.stringify({
        apiKey: "38ae6f0e1431cf81d4519ef08c9c2110",
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: props.cityValue,
          Limit: "50",
          Page: "1",
        },
      }),
    })
      .then((response) => response.json())
      .then((cities) => {
        if (cities.data.length === 0) {
          setCities([]);
          return;
        }
        setCities(cities.data[0].Addresses);
        showSuggestedCities();
      });
  }, [props.cityValue, props.isCityValid]);

  useEffect(() => {
    let timer = setTimeout(() => {
      getCities();
    }, 350);
    return () => {
      clearTimeout(timer);
    };
  }, [props.cityValue, getCities]);

  const cityKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      getCities();
    }
  };

  const changeCityHandler = (event) => {
    props.setCityCallback(event.target.value, "", false);

    inputRef.current.setCustomValidity("Будь ласка, оберіть місто доставки.");
  };

  const selectCityFromListHandler = (event) => {
    props.setCityCallback(
      event.target.textContent,
      event.target.getAttribute("data-value"),
      true
    );

    inputRef.current.setCustomValidity("");

    hideSuggestedCities();
  };

  const showSuggestedCities = () => {
    setAreCitiesShown(true);
  };

  const hideSuggestedCities = (event) => {
    if (event && event.relatedTarget && event.relatedTarget.tagName === "UL") {
      return;
    }
    setAreCitiesShown(false);
  };

  return (
    <div className="position-relative" onBlur={hideSuggestedCities}>
      <label htmlFor="city" className="form-label">
        Населений пункт доставки
      </label>
      <input
        ref={inputRef}
        className="form-control"
        id="city"
        onChange={changeCityHandler}
        onKeyDown={cityKeyDownHandler}
        onFocus={getCities}
        value={props.cityValue}
        required
      />
      <ul
        className={`tips-list ${areCitiesShown ? "d-block" : "d-none"}`}
        id="city-suggest"
        tabIndex="0"
      >
        {cities.map((item) => (
          <li
            key={item.Ref}
            className="tips-list__item"
            data-value={item.Ref}
            onClick={selectCityFromListHandler}
          >
            {item.Present}
          </li>
        ))}
      </ul>
      <div className="invalid-feedback" id="city-feedback">
        {props.isCityValid ? "" : "Будь ласка, оберіть місто доставки."}
      </div>
    </div>
  );
};

export default CityChooser;
