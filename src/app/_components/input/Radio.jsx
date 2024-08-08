import classNames from "classnames";

export default function Radio({
  id,
  title,
  isEssential,
  infoTxt,
  children,
  infoColumn,
}) {
  return (
    <div className="radio-wrap">
      <div className={classNames("title-area", infoColumn && info - column)}>
        <label htmlFor={id + "0"}>
          {title}
          {isEssential && <span className="essential">*</span>}
        </label>
        <div className="info-txt">{infoTxt}</div>
      </div>
      <div className="radio-group">
        {children.map((value, index) => {
          return (
            <div key={value + index}>
              <input
                type="radio"
                name={id}
                id={`${id}${index}`}
                value={value.value}
              />
              <label htmlFor={`${id}${index}`}>{value.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
