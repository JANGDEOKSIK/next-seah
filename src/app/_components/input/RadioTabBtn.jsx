const RadioTabBtn = ({ inputName, radioData, register }) => {
  return (
    <div className="tab-wrap input-wrap">
      <div className="form-group">
        {radioData.map((item, idx) => (
          <div
            className="form-radio-btn"
            key={idx}
          >
            <input
              type="radio"
              id={item.id}
              name={inputName}
              value={item.value}
              {...register(inputName)}
            />
            <label htmlFor={item.id}>{item.tit}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioTabBtn;
