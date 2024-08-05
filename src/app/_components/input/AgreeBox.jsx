const AgreeBox = ({
  thTit,
  isRequired = false,
  agreeTxt,
  agreeTit,
  inputName,
  register,
  rules = false,
  errors = false,
}) => {
  const errorMessages = errors[inputName] && errors[inputName].message;
  const hasError = !!(errors && errorMessages);

  return (
    <div className="input-wrap">
      {thTit && (
        <div className="th">
          <div className="tits">
            <p className="tit">
              <label htmlFor={`${inputName}a`}>{thTit}</label>
            </p>
            {isRequired && <span className="required">*</span>}
          </div>
        </div>
      )}
      <div className="td">
        <div className="scroll-box">
          <div className="scroll-area f-bdy2-b">{agreeTxt}</div>
        </div>
        <p className="f-bdy2-b">{agreeTit}</p>
        <div className="ort-group agree">
          <div className="form-radio">
            <input
              type="radio"
              id={`${inputName}a`}
              name={inputName}
              {...register(inputName, rules && rules)}
            />
            <label htmlFor={`${inputName}a`}>동의하지 않음</label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              id={`${inputName}b`}
              name={inputName}
              {...register(inputName, rules && rules)}
            />
            <label htmlFor={`${inputName}b`}>동의</label>
          </div>
        </div>
        {hasError && (
          <small
            className="error"
            role="alert"
          >
            {errorMessages}
          </small>
        )}
      </div>
    </div>
  );
};

export default AgreeBox;
