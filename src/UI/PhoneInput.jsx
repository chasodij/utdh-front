import { useRef } from "react";

const PhoneInput = ({ id, value, onChange }) => {
  const inputRef = useRef(null);

  const changePhone = (event) => {
    onChange(event);
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (regex.test(event.target.value)) {
      inputRef.current.setCustomValidity("");
    } else {
      inputRef.current.setCustomValidity(
        "Будь ласка, введіть дійсний номер телефону."
      );
    }
  };

  return (
    <>
      <label htmlFor={id} className="form-label">
        Мобільний телефон
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        ref={inputRef}
        aria-label="Мобільний телефон"
        value={value}
        onChange={changePhone}
        required
      />
      <div className="invalid-feedback">
        Будь ласка, введіть дійсний номер телефону.
      </div>
    </>
  );
};

export default PhoneInput;
