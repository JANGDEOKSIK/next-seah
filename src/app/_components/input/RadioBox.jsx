const InputBox = ({
  thTit,
  isRequired = false,
  inputName,
  radioData,
  register,
  rules = false,
  errors = false,
}) => {
  const errorMessages =
    errors && errors[inputName] && errors[inputName].message;
  const hasError = errors && errorMessages;

  return (
    <div className="input-wrap">
      {thTit && (
        <div className="th">
          <div className="tits">
            <p className="tit">
              <label htmlFor={radioData[0].id}>{thTit}</label>
            </p>
            {isRequired && <span className="required">*</span>}
          </div>
        </div>
      )}
      <div className="td">
        <div className="ort-group">
          {radioData.map((item, idx) => (
            <div
              className="form-radio"
              key={idx}
            >
              <input
                type="radio"
                id={item.id}
                name={inputName}
                value={item.value}
                {...register(inputName, rules && rules)}
              />
              <label htmlFor={item.id}>{item.tit}</label>
            </div>
          ))}
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

export default InputBox;
