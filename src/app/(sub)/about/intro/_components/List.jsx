"use client";

import Modal from "@/app/_components/modal/Modal";
import { getList, setMutation } from "@/app/_lib/fetch";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function List() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, refetch } = getList("/lists", ["intro", "lists"]);

  const { mutate } = setMutation("/lists", {
    onSuccess: (data) => {
      refetch();
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const [isOpen, setIsOpen] = useState(false);
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

      <button onClick={() => setIsOpen(true)}>팝업</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}
