const InputBox = ({
  thTit,
  isRequired = false,
  inputName,
  radioData,
  register,
  rules = false,
  errors = false,
}) => {
  const errorMessages = errors[inputName] && errors[inputName].message;

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
                {...register(inputName, rules && rules)}
              />
              <label htmlFor={item.id}>{item.tit}</label>
            </div>
          ))}
        </div>
        {errors && (
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
