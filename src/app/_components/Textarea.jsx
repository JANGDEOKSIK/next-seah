import classNames from "classnames";

export default function Textarea({isNoTitle, id, label, isEssential, placeholder, value, textareaValue}){
  
  const max_length = 4000

  const onChange = (e) => {
    textareaValue = e.target.value;

    if (textareaValue.length <= max_length) {
      value(textareaValue);
    } else {
      value(textareaValue.slice(0, max_length));
    }
  }

  return(
    <>
      <div className={classNames('input-wrap', {'no-title':isNoTitle})}>
        <div className="input-tit">
          <div className="label">
            <label htmlFor={id}>{label}</label>
            {isEssential && <span>*</span>}
          </div>
          <div className="info-txt">작성가이드 안내 참고하여 작성해주세요.</div>
        </div>
        <div className="textarea-wrap">
          <textarea maxLength={max_length} id={id} placeholder={placeholder} onChange={onChange}></textarea>
          <div class="check-byte">
            <p class="r-byte">{textareaValue.length}<span></span>자</p>/<p class="l-byte"><span>{max_length}</span>자</p>
          </div>
        </div>
      </div>
    </>
  )
}