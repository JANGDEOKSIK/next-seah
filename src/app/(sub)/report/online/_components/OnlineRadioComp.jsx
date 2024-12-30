import { useFormContext } from "react-hook-form";

export default function OnlineRadioComp({
  inputId,
  isLabel = true,
  isEssential,
  groupId,
  label,
  options = [],
  description,
  descriptionNotice,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="box">
      <div className="f-exBold label-wrap">
        {isLabel && <label htmlFor={inputId}>{label}</label>}
        {isEssential && <span className="f-exBold essential">*</span>}
      </div>
      {description && (
        <div className="desc-box">
          <div className="scrl-area">{description}</div>
        </div>
      )}
      {descriptionNotice && <p className="desc-notice">{descriptionNotice}</p>}
      <div className="option-box">
        {options.map((option, index) => (
          <div
            className="option-item"
            key={index}
          >
            <label>
              <input
                type="radio"
                id={`${groupId}-${index}`}
                value={option.value}
                {...register(groupId)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {errors[inputId] && (
        <p className="error-msg">{errors[inputId]?.message}</p>
      )}
    </div>
  );
}
