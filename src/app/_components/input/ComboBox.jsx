export default function ComboBox({
  label,
  id,
  isEssential,
  children,
  infoTxt,
  errors,
  value,
  onChange,
  defaultOptionName,
  defaultOption,
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
        value={value}
        onChange={onChange}
      >
        {defaultOption && (
          <option value={defaultOption?.value}>{defaultOption?.name}</option>
        )}
        {children &&
          children?.map((item, index) => {
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
