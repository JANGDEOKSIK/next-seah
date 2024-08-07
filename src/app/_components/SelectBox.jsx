"use client";
import { useForm } from "react-hook-form";

export default function SelectBox({ label, labelTxt, name, id, essen, options }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`form-area form-select ${label ? "" : "no-lab"}`}>
			{label && (
				<label htmlFor={id} className={`f-body1-eb ${essen ? "essen" : ""}`}>
					{labelTxt}
				</label>
			)}
			 <select
					id={id}
					{...register(name, { required: essen })}
				>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
  );
}
