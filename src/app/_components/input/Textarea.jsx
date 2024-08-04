"use client";

import { useState } from "react";

const Textarea = ({
  thTit,
  thInfo,
  isRequired = false,
  inputId,
  inputName,
  placeholder,
  maxByte,
  register,
  rules = false,
  errors = false,
}) => {
  const errorMessages = errors[inputName] && errors[inputName].message;
  const [byte, setByte] = useState(0);
  const textAreaChangeFunc = (e) => {
    setByte(e.target.value.length);
  };

  return (
    <div className="input-wrap">
      <div className="th">
        <div className="tits">
          <p className="tit">
            <label htmlFor={inputId}>{thTit}</label>
          </p>
          {isRequired && <span className="required">*</span>}
        </div>
        {thInfo && <p className="info f-desc2">{thInfo}</p>}
      </div>
      <div className="td">
        <div className="form-textarea">
          <textarea
            id={inputId}
            name={inputName}
            placeholder={placeholder}
            maxLength={maxByte}
            onChange={textAreaChangeFunc}
            {...register(inputName, rules && rules)}
          ></textarea>
          <div className="bytes">
            <p className="byte">
              <span className="current">{byte}</span>자
            </p>
            <p className="byte">
              &nbsp;/&nbsp;<span className="max">{maxByte}</span>자
            </p>
          </div>
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

export default Textarea;
