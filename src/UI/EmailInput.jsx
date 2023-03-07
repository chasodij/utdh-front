const EmailInput = ({ id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        Електронна пошта
      </label>
      <input
        type="email"
        className="form-control"
        id={id}
        aria-label="Електронна пошта"
        value={value}
        onChange={onChange}
        required
      />
      <div className="invalid-feedback">
        Будь ласка, введіть дійсну електронну пошту.
      </div>
    </>
  );
};

export default EmailInput;
