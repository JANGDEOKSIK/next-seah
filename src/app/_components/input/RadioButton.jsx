export default function RadioButton({ id }) {
  return (
    <div className="radio-btn-wrap">
      <div className="radio-btn">
        <input
          type="radio"
          id={id + "0"}
          name={id}
        />
        <label htmlFor={id + "0"}>실명</label>
      </div>
      <div className="radio-btn">
        <input
          type="radio"
          id={id + "1"}
          name={id}
        />
        <label htmlFor={id + "1"}>익명</label>
      </div>
    </div>
  );
}
