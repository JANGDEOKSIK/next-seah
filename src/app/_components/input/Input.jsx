import classNames from "classnames";

export default function Input({
  id,
  label,
  placeholder,
  type = "text",
  isEssential,
  infoTxt,
  txtShort,
  infoTxtBlock,
}) {
  return (
    <div className="input-wrap">
      <div
        className={classNames(
          "title-area",
          txtShort && "txt-short",
          infoTxtBlock && "block"
        )}
      >
        <label htmlFor={id}>
          {label}
          {isEssential && <span className="essential">*</span>}
        </label>
        {infoTxt && <div className="info-txt">{infoTxt}</div>}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
