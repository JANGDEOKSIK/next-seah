export default function NewInput({label, isLabel, isEss, placeholder }){
	return (
		<div className="form-input">
			<div className="label-area">
				{isLabel && <label htmlFor="">{label}</label>}
				{isEss && <span className="ess" style={{width: '5px', height: '5px', background: 'red', display: 'inline-block'}}></span>}
			</div>
			<input type="text" placeholder={placeholder}/>
		</div>
	)
}