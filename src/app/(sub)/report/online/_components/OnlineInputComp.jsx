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
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="box">
      <div className="label-wrap">
        {isLabel && <label htmlFor={inputId}>{label}</label>}
        {isEssential && <span className="essential">*</span>}
      </div>
      <input
        type={type}
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        {...register(inputId, validation)}
      />
      {errors[inputId] && <p>{errors[inputId]?.message}</p>}
    </div>
  );
}
