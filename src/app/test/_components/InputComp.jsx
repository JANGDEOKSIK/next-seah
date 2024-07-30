export default function InputComp({
  isLabel = true,
  label,
  id,
  isEssential = true,
  placeholder,
}) {
  return (
    <div>
      <div className="label-box">
        {isLabel && <label htmlFor={id}>{label}</label>}
        {isEssential && <span className="essential">*</span>}
      </div>
      <div className="input-box">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          style={{ border: "1px solid #000" }}
        />
      </div>
    </div>
  );
}
