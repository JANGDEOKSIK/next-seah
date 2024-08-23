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
  btnTxt,
  hasCheckbox,
  register,
  errors,
}) {
  return (
    <>
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
        <div className="input-area">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register}
          />
          {hasCheckbox && (
            <div className="btn-checkbox">
              <input
                type="checkbox"
                name={id}
              />
              <label htmlFor={id}>{btnTxt}</label>
            </div>
          )}
        </div>
      </div>
      {errors && <p>{errors}</p>}
    </>
  );
}
