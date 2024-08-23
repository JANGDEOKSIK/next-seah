export default function FileAdd({
  label,
  id,
  isEssential,
  infoTxt,
  value,
  // multiple,
  register,
  onChange,
  onClick,
}) {
  console.log(value, "valuevaluevaluevalue");

  return (
    <div className="file-wrap">
      <div className="title-area">
        <label htmlFor={id}>{label}</label>
        {isEssential && <span className="essential">*</span>}
        {infoTxt && <div className="info-txt">{infoTxt}</div>}
      </div>
      <div className="input-area">
        <input
          type="file"
          name={id}
          id={id}
          multiple
          // multiple={multiple && multiple}
          {...register}
          onChange={onChange}
        />
        <label
          className="btn-add-file"
          htmlFor={id}
        >
          파일첨부
        </label>
      </div>
      <div className="file-list-wrap">
        <div className="file-list">
          {value?.map((file, index) => (
            <div
              className="file"
              key={index}
            >
              <span className="file-name">{file}</span>
              <button
                className="delete-file"
                type="button"
                onClick={onClick}
                value={file}
              ></button>
            </div>
          ))}
          {/* <div className="file">
            <span className="file-name">첨부파일.txt</span>
            <button
              className="delete-file"
              type="button"
            ></button>
          </div> */}
          {/* <div className="file">
            <span className="file-name">첨부파일.txt</span>
            <button
              className="delete-file"
              type="button"
            ></button>
          </div>
          <div className="file">
            <span className="file-name">첨부파일.txt</span>
            <button
              className="delete-file"
              type="button"
            ></button>
          </div> */}
        </div>
        <div className="bullet-list-wrap">
          <div className="bullet-list">최대 5개까지 등록 가능합니다.</div>
          <div className="bullet-list">
            파일의 크기가 00MB를 초과 시 업로드 되지않습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
