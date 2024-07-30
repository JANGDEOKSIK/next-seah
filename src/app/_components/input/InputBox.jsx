const InputBox = ({
  thTit,
  isRequired = false,
  type = "text",
  inputId,
  placeholder,
  errors,
  ...rest
}) => {
  return (
    <div className="input-wrap">
      {thTit && (
        <div className="th">
          <p className="tit">
            <label htmlFor={inputId}>{thTit}</label>
          </p>
          {isRequired && <span className="required">*</span>}
        </div>
      )}
      <div className="td">
        <div className="form-input">
          <input
            type={type}
            id={inputId}
            placeholder={placeholder}
            {...rest}
          />
        </div>
        {errors && (
          <small
            className="error"
            role="alert"
          >
            {errors.message}
          </small>
        )}
      </div>
    </div>
  );
};

export default InputBox;
