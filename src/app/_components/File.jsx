"use client";
import React, { useState } from 'react';

export default function File() {
  const [files, setFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [lastFileName, setLastFileName] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const maxSize = 5; // MB
    const maxFileSize = maxSize * 1024 * 1024; // in bytes

    if (files.length >= 3) {
      setErrorMsg('최대 3개까지만 등록할 수 있습니다.');
      return;
    }

    if (selectedFile.size > maxFileSize) {
      setErrorMsg(`파일의 크기가 ${maxSize}MB를 초과하여 업로드 되지 않습니다.`);
      return;
    }

    setFiles([...files, selectedFile]);
    setLastFileName(selectedFile.name);
    setErrorMsg('');
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);

    if (updatedFiles.length > 0) {
      setLastFileName(updatedFiles[updatedFiles.length - 1].name);
    } else {
      setLastFileName('');
    }
  };

  return (
    <div className="form-file">
      <p className="f-body1-eb">첨부파일</p>
      <div className="for-flex">
        <input type="text" disabled value={lastFileName} />
        <label htmlFor="file" className="f-body1-eb">파일첨부</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div className="file-list">
        {files.map((file, index) => (
          <p key={index}>
            <span>{file.name}</span>
            <button className="del" onClick={() => handleDeleteFile(index)}></button>
          </p>
        ))}
      </div>
      <div className="msg">
        <p>최대 3개까지 등록 가능합니다.</p>
        <p>파일의 크기가 5MB를 초과 시 업로드 되지 않습니다.</p>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </div>
    </div>
  );
}
