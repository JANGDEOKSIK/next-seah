"use client";

import React, { useState } from "react";
import { Controller } from "react-hook-form";

const SelectBox = ({
  thTit = false,
  isRequired = false,
  inputId,
  inputName,
  selectData,
  isOption = false,
  rules = false,
  errors = false,
  control,
  // ...rest
}) => {
  const errorMessages =
    errors && errors[inputName] && errors[inputName].message;
  const hasError = errors && errorMessages;

  const [selectedOption, setSelectedOption] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSelectOn, setIsSelectOn] = useState(false);
  const [isSelectOn2, setIsSelectOn2] = useState(false);

  // const selectChangeFunc = (e) => {
  //   const selected = selectData.find((item) => item.value === e.target.value);
  //   setSelectedOption(selected.options);
  // };

  const selectChangeFunc = (value) => {
    const selectedItem = selectData.selectItem.find(
      (item) => item.value === value
    );

    if (selectedItem) {
      isOption && setSelectedOption(selectedItem.options);
      isOption && setIsDisabled(false);
      setIsSelectOn(true);
    } else {
      isOption && setSelectedOption([]);
      isOption && setIsDisabled(true);
      setIsSelectOn(false);
      isOption && setIsSelectOn2(false);
    }
  };

  const selectAddClass = (value) => {
    const selectedItem = selectedOption.find((item) => item.value === value);

    if (selectedItem) {
      setIsSelectOn2(true);
    } else {
      setIsSelectOn2(false);
    }
  };

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
        </div>
      )}
      <div className="td">
        <div className="form-group">
          <div className={`form-select ${isSelectOn ? "on" : ""}`}>
            <Controller
              name={inputName}
              control={control}
              rules={rules}
              render={({ field }) => (
                <select
                  id={inputId}
                  name={inputName}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e); // ⭐ existing onChange handler
                    selectChangeFunc(e.target.value);
                  }}
                >
                  <option value="">{selectData.selectType}</option>
                  {selectData.selectItem.map((item, idx) => (
                    <option
                      key={idx}
                      value={item.value}
                    >
                      {item.tit}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          {isOption && (
            <div className={`form-select ${isSelectOn2 ? "on" : ""}`}>
              <Controller
                name={`${inputId}-option`}
                control={control}
                render={({ field }) => (
                  <select
                    disabled={isDisabled}
                    id={`${inputId}-option`}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e); // ⭐ existing onChange handler
                      selectAddClass(e.target.value);
                    }}
                  >
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
                )}
              />
            </div>
          )}
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

export default SelectBox;
