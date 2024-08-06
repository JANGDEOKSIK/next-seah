import Radio from "@/app/_components/Radio";

export default function Agree({
  isNoTitle,
  isEssential,
  id,
  label,
  name,
  agreeTxt,
  agreeCon,
}) {
  return (
    <div className="input-wrap">
      {isNoTitle ? (
        ""
      ) : (
        <div className="input-tit f-body1-eb">
          <div className="label">
            <label htmlFor={id}>{label}</label>
            {isEssential && <span>*</span>}
          </div>
        </div>
      )}
      <div className="agree-wrap">
        <div className="agree-con">
          <div className="scroll-area f-body2-b">{agreeCon}</div>
        </div>
        <p className="f-body2-b agree-txt">{agreeTxt}</p>
        <Radio
          defaultChecked={true}
          name={name}
          value="disagree"
          isNoTitle={true}
        >
          동의하지 않음
        </Radio>
        <Radio
          name="problem-path"
          value="agree"
          isNoTitle={true}
        >
          동의
        </Radio>
      </div>
    </div>
  );
}
