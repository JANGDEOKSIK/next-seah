"use client";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">이름</label>
        <input
          type="text"
          {...register("name", { required: true, minLength: 1 })}
        />
        {errors.name && errors.name.type === "required" && <p>작성하세용</p>}
        <br />
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && <p>작성하세용</p>}
        {errors.email && errors.email.type === "pattern" && (
          <p>이메일 형식에 맞게 작성하세용 </p>
        )}
        <br />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 5 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>작성하세용</p>
        )}
        {errors.password && errors.password.type === "maxLength" && (
          <p>5자 미만으로 작성하세용</p>
        )}
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}
