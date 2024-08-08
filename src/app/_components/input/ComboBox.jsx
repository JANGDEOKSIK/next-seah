export default function ComboBox({
  label,
  id,
  isEssential,
  children,
  infoTxt,
  errors,
}) {
  return (
    <div className="combo-wrap">
      <div className="title-area">
        <label htmlFor={id}>
          {label}
          {isEssential && <span className="essential">*</span>}
        </label>
        <div className="info-txt">{infoTxt}</div>
      </div>
      <select
        name=""
        id={id}
      >
        {children?.map((item, index) => {
          return (
            <option
              value={item.value}
              key={index}
            >
              {item.name}
            </option>
          );
        })}
      </select>

      {errors && <p>{errors.message}</p>}
    </div>
  );
}
