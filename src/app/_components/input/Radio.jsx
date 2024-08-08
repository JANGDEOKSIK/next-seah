export default function Radio({
  id,
  title,
  isEssential,
  infoTxt,
  children,
  radioName,
}) {
  return (
    <div className="radio-wrap">
      <div className="title-area">
        <label htmlFor={id}>
          {title}
          {isEssential && <span className="essential">*</span>}
        </label>
        <div className="info-txt">{infoTxt}</div>
      </div>
      {children.map((value, index) => {
        return (
          <>
            <input
              type="radio"
              name={radioName}
              id={`${value.value}${index}`}
              value={value.value}
            />
            <label htmlFor={`${value.value}${index}`}>{value.label}</label>
          </>
        );
      })}
    </div>
  );
}
