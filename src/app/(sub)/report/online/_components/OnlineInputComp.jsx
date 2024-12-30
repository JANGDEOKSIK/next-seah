import { useFormContext } from "react-hook-form";

export default function OnlineInputComp({
  inputId,
  isLabel = true,
  label,
  isEssential = true,
  type = "text",
  inputName,
  placeholder,
  validation,
  description,
  button = false,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="box">
      <div className="f-exBold label-wrap">
        {isLabel && (
          <label htmlFor={inputId}>
            <span>{label}</span>
          </label>
        )}
        {isEssential && <span className="f-exBold essential">*</span>}
      </div>
      {description && <p className="f-bold desc">{description}</p>}
      <div className="input-box">
        <input
          type={type}
          name={inputName}
          id={inputId}
          placeholder={type === "file" ? undefined : placeholder}
          {...register(inputId, validation)}
        />
        {button && (
          <a
            href="#"
            className="f-bold safe-num"
          >
            <span>안심번호 사용</span>
          </a>
        )}
      </div>
      {errors[inputId] && (
        <p className="error-msg">{errors[inputId]?.message}</p>
      )}
    </div>
  );
}
