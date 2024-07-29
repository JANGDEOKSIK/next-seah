import classNames from "classnames";

export default function Textarea({isNoTitle, id, label, isEssential, placeholder, value, textareaValue}){

  const onChange = (e) => {
    value(e.target.value)
  }

  const max_length = 4000;

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