"use client";

import { useForm } from "react-hook-form";
import "../../scss/index.scss"; // SCSS 파일을 import

export default function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*
    - register 함수: 폼의 각 입력 필드를 React Hook Form 라이브러리의 폼 관리 시스템에 등록하는 역할을 함 (폼 필드 등록 함수)
    - handleSubmit: 폼 제출 시 유효성 검사를 수행하고 통과한 경우에만 지정된 콜백 함수를 호출하는 역할을 함 (폼 처리 함수)
    - formState: 폼 필드 유효성 검사 결과를 포함하는 객체
  */

  const onSubmitData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className="join-form">
      {/* onSubmitData 콜백 함수는 유효성 검사를 통과한 폼 데이터를 인수로 받음, 제출 시 모든 필드이 유효성 검사 수행 */}
      <div>
        <label htmlFor="name">
          이름 <span className="essential">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="이름을 입력해 주세요."
          {...register("name", {
            required: "이름을 입력해 주세요.",
            pattern: {
              value: /^[가-힣]+$/,
              message: "이름을 한국어로 정확하게 입력해 주세요.",
            },
          })}
        />
        {/* register 함수의 옵션으로 유효성 검사 규칙을 설정, 통과하지 못한 경우 formState.errors 객체에 에러 메시지 저장됨 */}
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="id">
          아이디 <span className="essential">*</span>
        </label>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="아이디를 입력해 주세요."
          {...register("id", {
            required: "아이디를 입력해 주세요.",
            minLength: {
              value: 5,
              message: "아이디는 최소 다섯 글자부터 설정 가능합니다.",
            },
            maxLength: {
              value: 20,
              message: "아이디는 최대 스무 글자까지 설정 가능합니다.",
            },
            pattern: {
              value: "",
              message: "아이디는 영문 소문자로만 입력 가능합니다.",
            },
          })}
        />
        {errors.id && <p>{errors.id.message}</p>}
      </div>
      <div>
        <label htmlFor="">
          이메일 <span className="essential">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="이메일을 입력해 주세요."
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
              message: "정확한 이메일을 입력해 주세요.",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="pw">
          비밀번호 <span className="essential">*</span>
        </label>
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="비밀번호를 입력해 주세요."
          {...register("pw", {
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
          })}
        />
        {errors.pw && <p>{errors.pw.message}</p>}
      </div>
      <button type="submit">회원 가입</button>
    </form>
  );
}
