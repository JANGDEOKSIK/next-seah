"use client";

import { getList, setMutation } from "@/app/_lib/fetch";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function MutatePage() {

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = setMutation("/posts", {
    onSuccess: (data) => {
      refetch();
    },
    onError: (data) => {},
  });

	const onSubmit = (data) => {
		console.log("제출할 데이터: ", data);
		mutate(data);
	};
	
	return (
		<div style={{paddingTop: "200px"}}>
			<form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="타이틀을 입력해주세여"
            id="title"
            {...register("title")}
          />
        </div>
         <div>
          <textarea
            placeholder="내용을 입력해주세여"
            id="body"
            {...register("body", { required: true })}
          />
        </div>
        <button type="submit">submit</button>
      </form>
		</div>
	)
}