import React from "react";
import "./Counter.css";
import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";

const Counter = (props) => {
  const onAmountUpdateHandler = (event) => {
    let num = parseInt(event.target.value);
    if (isNaN(num) || num < 1) {
      num = 1;
    }
    props.onAmountUpdate(num);
  };

  return (
    <>
      <div
        className="_icon-minus _black-icon d-inline-block counter-block"
        onClick={props.onDecrementItemAmount}
      >
        <MinusIcon />
      </div>
      <div className="d-inline-block counter-block">
        <input
          type="number"
          className="number-input text-center"
          value={props.amount}
          onChange={onAmountUpdateHandler}
        />
      </div>
      <div
        className="_icon-plus _black-icon d-inline-block counter-block"
        onClick={props.onIncrementItemAmount}
      >
        <PlusIcon />
      </div>
    </>
  );
};

export default Counter;
