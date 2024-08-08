export default function Input({
  id,
  label,
  placeholder,
  type = "text",
  isEssential,
  infoTxt,
}) {
  return (
    <div className="input-wrap">
      <div className="title-area">
        <label htmlFor={id}>
          {label}
          {isEssential && <span className="essential">*</span>}
        </label>
        <div className="info-txt">{infoTxt}</div>
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
