"use client";
import classNames from "classnames";
import { useRef, useState } from "react";

export default function File({ isNoTitle, isEssential, id, label }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleSpanClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    event.target.value = null;
  };

  const handleFileDelete = (fileToDelete) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToDelete)
    );
  };

  return (
    <>
      <div className="input-wrap">
        {isNoTitle ? (
          ""
        ) : (
          <div className="input-tit f-body1-eb">
            <div className="label">
              <label htmlFor={id}>{label}</label>
              {isEssential && <span>*</span>}
            </div>
          </div>
        )}
        <div className="form-file">
          <span
            className="file-input"
            onClick={handleSpanClick}
            onChange={handleFileChange}
          ></span>
          <input
            type="file"
            ref={fileInputRef}
            mulitple
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            onClick={handleSpanClick}
            onChange={handleFileChange}
          >
            <span className="f-body2-b">파일첨부</span>
          </label>
        </div>
        {selectedFiles.length > 0 && (
          <ul className="file-list">
            {selectedFiles.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleFileDelete(file)}
                ></button>
              </li>
            ))}
          </ul>
        )}
        <div className="form-info-txt">
          <p className="f-desc-b">최대 5개까지 등록 가능합니다.</p>
          <p className="f-desc-b">
            파일의 크기가 00MB를 초과 시 업로드 되지않습니다.
          </p>
        </div>
      </div>
    </>
  );
}
