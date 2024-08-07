"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFormContext } from "react-hook-form";


export default function Radio({ label, name, id, checked, onChange, defaultChecked }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-radio">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        defaultChecked ={defaultChecked}
				{...register(name)}
      />
      <label htmlFor={id}>{label}</label>
		</div>
		
  );
}

