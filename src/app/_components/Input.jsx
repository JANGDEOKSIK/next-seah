export default function Input({id, isVertical, label, isEssential = false, placeholder}) {
  return (
    <>
      <div className={"input-wrap " + (isVertical ? '' : 'horizontal')}>
        <div className="input-tit">
          <label htmlFor={id}>{label}</label>
          {isEssential && <span>*</span>}
        </div>
        <input id={id} type="text" placeholder={placeholder} />
      </div>
    </>
  );
}