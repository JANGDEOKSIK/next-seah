
const InputBox = ({ thTit, isRequired = false, type = "text", inputId, placeholder }) => {
  return (
    <div className="input-wrap">
      <div className="th">
        <p className="tit"><label htmlFor={inputId}>{thTit}</label></p>
        {isRequired && <span className="required">*</span>}
      </div>
      <div className="td">
        <div className="form-input">
          <input
            type={type}
            id={inputId}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  )
}

export default InputBox;