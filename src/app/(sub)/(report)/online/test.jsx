"use client";

import { useForm } from "react-hook-form";
import InputBox from "@/app/_components/input/InputBox";
import RadioTabBtn from "@/app/_components/input/RadioTabBtn";

export default function OnlinePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inputIdE1: "disagree",
      inputIdE2: "disagree",
    },
  });

  const onError = () => {
    const errorMessages = Object.values(errors)
      .map((err) => err.message)
      .join("\n");
    alert(`폼 제출 중 오류가 발생했습니다:\n${errorMessages}`);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="column-layout-wrap">
        <div className="form-wrap">
          <RadioTabBtn
            inputId="tabIdC"
            inputName="tabIdC"
            register={register}
          />
          <InputBox
            thTit="이름"
            isRequired={true}
            inputId="inputIdC1"
            inputName="inputIdC1"
            placeholder="이름을 입력해 주세요."
            register={register}
            rules={{ required: "* 이름을 입력해 주세요." }}
            errors={errors}
          />
        </div>
      </div>
      <div className="btn-wrap">
        <button
          type="submit"
          className="secondary-btn"
        >
          제출하기
        </button>
      </div>
    </form>
  );
}
