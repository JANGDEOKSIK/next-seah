export default function SelectBox({id, label, isEssential, option, isNoTitle}){
  return(
    <>
      <div className="input-wrap">
        {
          isNoTitle ? "" : 
          <div className="input-tit f-body1-eb">
            <div className="label">
              <label htmlFor={id}>{label}</label>
              {isEssential && <span>*</span>}
            </div>
          </div>
        }
        
        <div className="form-select">
          <select id={id}>
            {
              option.map((item) => {
                return(
                  <option value={item.value} key={item.value}>{item.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      
    </>
  )
}