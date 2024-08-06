"use client";

import { useState, useEffect, useRef } from "react";

const Aattachment = ({
  thTit = "첨부파일",
  isRequired = false,
  inputId,
  inputName,
  register,
  watch,
  rules = false,
  errors = false,
}) => {
  const errorMessages =
    errors && errors[inputName] && errors[inputName].message;
  const hasError = errors && errorMessages;
  const [files, setFiles] = useState([]);
  const watchedFiles = watch(inputName);
  const { ref, ...rest } = register(inputName, rules && rules);
  const fileInputRef = useRef();
  const dataTranster = new DataTransfer();

  useEffect(() => {
    if (watchedFiles) {
      if (files.length + 1 > 5) {
        alert("최대 5개까지 파일을 업로드할 수 있습니다.");
        return;
      }

      const newFiles = Array.from(watchedFiles);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  }, [watchedFiles]);

  const fileRemoveFunc = (idx) => {
    setFiles((prev) => prev.filter((_, index) => index !== idx));

    files.forEach((file, index) => {
      if (index !== idx) {
        dataTranster.items.add(file);
      }
    });

    fileInputRef.current.files = dataTranster.files;
    console.log(fileInputRef.current.files.length);
    console.log(fileInputRef.current.files);
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
          <input
            type="file"
            id={inputId}
            name={inputName}
            multiple
            // onChange={fileChangeFunc}
            ref={(e) => {
              ref(e);
              fileInputRef.current = e;
            }}
            {...rest}
            // {...register(inputName, rules && rules)}
          />
          <div className="form-input">
            <input
              onClick={handleDivClick}
              readOnly
              placeholder="파일형식: JPG, PNG, PDF, PPT, PPTX, HWP, HWPX"
            />
          </div>
          <label
            htmlFor={inputId}
            className="file-btn"
          >
            파일첨부
          </label>
        </div>
        {hasError && (
          <small
            className="error"
            role="alert"
          >
            {errorMessages}
          </small>
        )}
        {files.length > 0 && (
          <ul className="file-list">
            {files.map((item, idx) => (
              <li
                className="file"
                key={idx}
              >
                <span>{item.name}</span>
                <button
                  type="button"
                  className="x-btn"
                  title="첨부파일 삭제"
                  onClick={() => fileRemoveFunc(idx)}
                ></button>
              </li>
            ))}
          </ul>
        )}
        <div className="dots">
          <p className="dot f-desc2">최대 5개까지 등록 가능합니다.</p>
          <p className="dot f-desc2">
            파일의 크기가 00MB를 초과 시 업로드 되지않습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aattachment;
