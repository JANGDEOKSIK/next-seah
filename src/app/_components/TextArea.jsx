"use client";
import { useForm } from "react-hook-form";

export default function TextArea({ label, name, id, essen, hasMsg, msg }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`form-area form-text ${hasMsg ? "has-msg" : ""}`}>
      <label htmlFor={id} className={`f-body1-eb ${essen ? "essen" : ""}`}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        {...register(name, { required: essen, minLength: 1 })}
      />
			{hasMsg && <p className="msg f-desc-b">{msg}</p>}
		</div>
		
  );
}
