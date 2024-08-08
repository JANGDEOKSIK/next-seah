export default function TextArea({
  id,
  label,
  isEssential,
  infoTxt,
  placeholder,
  txtLimit,
}) {
  return (
    <div className="textarea-wrap">
      <div className="title-area">
        <label htmlFor={id}>
          {label}
          {isEssential && <span className="essential">*</span>}
        </label>
        <div className="info-txt">{infoTxt}</div>
      </div>
      <textarea
        name=""
        id={id}
        placeholder={placeholder}
      ></textarea>
      <span className="txt-limit">
        <strong>0자</strong> / {txtLimit}자
      </span>
    </div>
  );
}
