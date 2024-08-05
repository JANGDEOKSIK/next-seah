import { useForm } from "react-hook-form";

export default function JoinInputComp({
  inputId,
  isLabel = true,
  label,
  isEssential = true,
  type = "text",
  inputName,
  placeholder,
  validation,
}) {
  const { register } = useForm();

  return (
    <div>
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
    </div>
  );
}
