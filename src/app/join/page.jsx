"use client";

import { useForm, FormProvider } from "react-hook-form";
import JoinInputComp from "./_components/JoinInputComp";
import "../../scss/index.scss";

export default function Join() {
  const methods = useForm();
  const onSubmitData = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitData)}
        className="join-form"
      >
        <JoinInputComp
          inputId={"name"}
          label={"이름"}
          inputName={"name"}
          placeholder={"이름을 입력해 주세요."}
          validation={{
            required: "이름을 입력해 주세요.",
            pattern: {
              value: /^[가-힣]+$/,
              message: "이름을 한국어로 정확하게 입력해 주세요.",
            },
          }}
        />

        <JoinInputComp
          inputId={"id"}
          label={"아이디"}
          inputName={"id"}
          placeholder={"아이디를 입력해 주세요."}
          validation={{
            required: "아이디를 입력해 주세요.",
            minLength: {
              value: 5,
              message: "아이디는 최소 다섯 글자부터 설정 가능합니다.",
            },
            maxLength: {
              value: 20,
              message: "아이디는 최대 스무 글자까지 설정 가능합니다.",
            },
          }}
        />

        <JoinInputComp
          inputId={"email"}
          label={"이메일"}
          isEssential={false}
          type={"email"}
          inputName={"email"}
          placeholder={"이메일을 입력해 주세요."}
          validation={{
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
              message: "정확한 이메일을 입력해 주세요.",
            },
          }}
        />

        <JoinInputComp
          inputId={"pw"}
          label={"비밀번호"}
          type={"password"}
          inputName={"pw"}
          placeholder={"비밀번호를 입력해 주세요."}
          validation={{
            required: "비밀번호를 입력해 주세요.",
            minLength: {
              value: "5",
              message: "비밀번호는 최소 다섯 글자부터 설정 가능합니다.",
            },
            maxLength: {
              value: "20",
              message: "비밀번호는 최대 스무 글자까지 설정 가능합니다.",
            },
            pattern: {
              value: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@!%*#?&])[A-Za-zd@!%*#?&]$",
              message:
                "비밀번호는 최소 하나의 문자, 하나의 숫자, 하나의 특수문자가 들어가야 합니다.",
            },
          }}
        />
        <button type="submit">회원 가입</button>
      </form>
    </FormProvider>
  );
}
