"use client";

import { useState } from "react";

const Aattachment = ({
  thTit = "첨부파일",
  isRequired = false,
  inputId,
  errors,
  ...rest
}) => {
  const [files, setFiles] = useState([]);

  const fileChangeFunc = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const fileRemoveFunc = (idx) => {
    setFiles((prev) => prev.filter((_, index) => index !== idx));
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
        <div className="fileuploder">
          <label htmlFor={inputId}>파일 등록</label>
          <input
            type="file"
            id={inputId}
            multiple
            onChange={fileChangeFunc}
          />
        </div>
        <ul className="lst_thumb">
          {files.map((item, idx) => (
            <li key={idx}>
              {item.name}
              <button
                type="button"
                title="첨부파일 삭제"
                onClick={() => fileRemoveFunc(idx)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        {errors && (
          <small
            className="error"
            role="alert"
          >
            {errors.message}
          </small>
        )}
      </div>
    </div>
  );
};

export default Aattachment;
