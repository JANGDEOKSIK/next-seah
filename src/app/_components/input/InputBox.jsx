// https://modac-bull.github.io/react/react-hook-form%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B3%B5%ED%86%B5-%ED%8F%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/

const InputBox = ({
  thTit,
  thInfo = false,
  isRequired = false,
  type = "text",
  inputId,
  inputName,
  placeholder,
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
              <label htmlFor={inputId}>{thTit}</label>
            </p>
            {isRequired && <span className="required">*</span>}
          </div>
          {thInfo && <p className="info f-desc2">{thInfo}</p>}
        </div>
      )}
      <div className="td">
        <div className="form-input">
          <input
            type={type}
            id={inputId}
            name={inputName}
            placeholder={placeholder}
            // {...(register && register(inputName, rules))}
            {...register(inputName, rules && rules)}
          />
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
