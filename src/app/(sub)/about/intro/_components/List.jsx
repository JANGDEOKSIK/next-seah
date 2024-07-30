"use client";

import { getList, setMutation } from "@/app/_lib/fetch";
import { useForm } from "react-hook-form";

export default function List() {
  const { data, refetch } = getList("/lists", ["intro", "lists"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = setMutation("/lists", {
    onSuccess: (data) => {
      console.log(data);
      refetch();
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <>
      <div>
        {data?.map((item, index) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="타이틀 입력"
            id="title"
            {...register("title")}
          />
          <button type="submit">타이틀 추가하기</button>
        </div>
      </form>
    </>
  );
}
