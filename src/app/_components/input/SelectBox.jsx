const SelectBox = ({ selectData }) => {
  return (
    <div className="form-select">
      <select id="" title="" required>
        {
          selectData.map((item, idx) => (
            <option key={idx} value="">{item.tit}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectBox;