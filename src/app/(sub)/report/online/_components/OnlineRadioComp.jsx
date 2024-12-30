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
  validation,
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
      {descriptionNotice && (
        <p className="f-bold desc-notice">{descriptionNotice}</p>
      )}
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
                {...register(groupId, validation)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {errors[groupId] && (
        <p className="error-msg">{errors[groupId]?.message}</p>
      )}
    </div>
  );
}
