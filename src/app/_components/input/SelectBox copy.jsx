"use client";

import React, { useState } from "react";

const SelectBox = ({
  thTit = false,
  isRequired = false,
  inputId,
  selectData,
  isOption = false,
  errors,
  ...rest
}) => {
  const [selectedOption, setSelectedOption] = useState([]);

  const selectChangeFunc = (e) => {
    const selected = selectData.find((item) => item.value === e.target.value);
    setSelectedOption(selected.options);
  };

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
        <div className="form-group">
          <div className="form-select">
            <select
              id={inputId}
              onChange={selectChangeFunc}
            >
              <option value="">종족 계열</option>
              {selectData.map((item, idx) => (
                <option
                  key={idx}
                  value={item.value}
                >
                  {item.tit}
                </option>
              ))}
            </select>
          </div>
          {isOption && (
            <div className="form-select">
              <select id={inputId}>
                <option value="">음식 계열</option>
                {selectedOption.map((item, idx) => (
                  <option
                    key={idx}
                    value={item.value}
                  >
                    {item.tit}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
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
  );
};

export default SelectBox;
