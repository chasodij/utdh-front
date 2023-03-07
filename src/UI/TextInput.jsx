const TextInput = ({id, label, value, onChange}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        value={value}
        aria-label={label}
        onChange={onChange}
        required
      />
      <div className="invalid-feedback">Не має бути пустим.</div>
    </>
  );
};

export default TextInput;
