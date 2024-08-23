export default function TextArea({
  id,
  label,
  isEssential,
  infoTxt,
  placeholder,
  txtLimit,
  register,
  errors,
  watch,
}) {
  let textLength = watch?.length ? watch?.length : 0;
  return (
    <>
      <div className="textarea-wrap">
        <div className="title-area">
          <label htmlFor={id}>
            {label}
            {isEssential && <span className="essential">*</span>}
          </label>
          <div className="info-txt">{infoTxt}</div>
        </div>
        <div className="scrl-area">
          <textarea
            name=""
            id={id}
            maxLength={txtLimit}
            placeholder={placeholder}
            {...register}
          ></textarea>
        </div>
        <span className="txt-limit">
          <strong>{textLength}자</strong> / {txtLimit}자
        </span>
      </div>
      {errors && <p>{errors}</p>}
    </>
  );
}
