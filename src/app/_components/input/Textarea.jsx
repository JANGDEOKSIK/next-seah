"use client";

import {useState} from "react";

const Textarea = ({ thTit, isRequired = false, inputId, placeholder, maxByte }) => {
  const [byte, setByte] = useState(0);
  const textAreaChangeFunc = (e) => {
    setByte(e.target.value.length);
  };

  return (
    <div className="input-wrap">
      <div className="th">
        <p className="tit"><label htmlFor={inputId}>{thTit}</label></p>
        {isRequired && <span className="required">*</span>}
      </div>
      <div className="td">
        <div className="form-textarea">
          <textarea
            id={inputId}
            placeholder={placeholder}
            maxlength={maxByte}
            onChange={textAreaChangeFunc}
          ></textarea>
          <div className="bytes">
            <p className="byte"><span className="current">{byte}</span>자</p>
            <p className="byte">&nbsp;/&nbsp;<span className="max">{maxByte}</span>자</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Textarea;