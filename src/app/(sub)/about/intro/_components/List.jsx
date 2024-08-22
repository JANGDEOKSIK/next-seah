"use client";

import Modal from "@/app/_components/modal/Modal";
import { getList, setMutation } from "@/app/_lib/fetch";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
    onError: (data) => {},
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  // 모달 관련
  const [returnTarget, setReturnTarget] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModalFn = (e) => {
    setIsOpen(true);
    setReturnTarget(e.currentTarget);
  }

  const closeModalFn = (e) => {
    setIsOpen(false);
    returnTarget.focus();
  }

  useEffect(()=>{
    console.log("returnTarget", returnTarget);
  }, [returnTarget])
  
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

      <div>
        <AnimatePresence>
          {isOpen && <Modal onClose={() => closeModalFn()} />}
        </AnimatePresence>
        <div>
          <button onClick={(e)=>openModalFn(e)}>팝업1</button>        
        </div>
      </div>
    </>
  );
}
