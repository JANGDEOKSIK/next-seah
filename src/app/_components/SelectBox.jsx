export default function SelectBox({
  id,
  label,
  isEssential,
  option0,
  option1,
}) {
  return (
    <>
      <div className="input-wrap">
        <div className="input-tit">
          <div className="label">
            <label htmlFor={id}>{label}</label>
            {isEssential && <span>*</span>}
          </div>
        </div>
        <div className="form-select-arr">
          <div className="form-select">
            <select>
              {option0.map((item) => {
                return (
                  <option
                    value={item.value}
                    key={item.value}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-select">
            <select>
              {option1.map((item) => {
                return (
                  <option
                    value={item.value}
                    key={item.value}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
