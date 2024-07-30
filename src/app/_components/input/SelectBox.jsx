const SelectBox = ({ thTit = false, isRequired = false, inputId, selectData }) => {
  return (
    <div className="input-wrap">
      {thTit && <div className="th">
        <p className="tit"><label htmlFor={inputId}>{thTit}</label></p>
        {isRequired && <span className="required">*</span>}
      </div>}
      <div className="td">
        <div className="form-select">
          <select id={inputId}>
            {
              selectData.map((item, idx) => (
                <option key={idx} value="">{item.tit}</option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectBox;