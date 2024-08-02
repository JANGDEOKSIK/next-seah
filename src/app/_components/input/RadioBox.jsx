const InputBox = ({
  thTit,
  isRequired = false,
  inputId,
  inputName,
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
        <div className="form-radio">
          <input
            type="radio"
            id={inputId}
            name={inputName}
            {...rest}
          />
          <label htmlFor="">아dkdkdkdkdkdk</label>
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
