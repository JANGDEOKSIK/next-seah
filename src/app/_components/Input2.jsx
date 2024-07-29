"use client";
import {useState} from "react";

const Input2 = ({ type = "text", inputId, placeholder }) => {
  return (
    <div className="form-input">
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
      />
    </div>
  )
}

const Select2 = ({ selectData }) => {
  return (
    <div className="form-select">
      <select id="" title="" required>
        {
          selectData.map((item, idx) => (
            <option key={idx} value="">{item.tit}</option>
          ))
        }
      </select>
    </div>
  )
}

const TextArea2 = ({ placeholder, maxByte }) => {
  const [byte, setByte] = useState(0);
  const textAreaChangeFunc = (e) => {
    setByte(e.target.value.length);
  };
  return (
    <div className="form-textarea">
      <textarea name="" id="" placeholder={placeholder}
        maxlength={maxByte}
        onChange={textAreaChangeFunc}
      ></textarea>
      <div className="bytes">
        <p className="byte"><span className="current">{byte}</span>자</p>
        <p className="byte">&nbsp;/&nbsp;<span className="max">{maxByte}</span>자</p>
      </div>
    </div>
  )
}

export { Input2, Select2, TextArea2 };