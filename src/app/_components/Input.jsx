"use client";
import { useForm } from "react-hook-form";

export default function Input({ type, label, name, id, placeholder, essen, hasMsg, msg }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`form-area form-input ${hasMsg ? "has-msg" : ""}`}>
      <label htmlFor={id} className={`f-body1-eb ${essen ? "essen" : ""}`}>
        {label}
      </label>
      {hasMsg && <p className="msg f-desc-b">{msg}</p>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, { required: essen, minLength: 1 })}
      />
		</div>
  );
}
