"use client";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
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
        onSubmit={handleSubmit(submitForm)}
      >
        <label htmlFor="id">id</label>
        <input
          type="text"
          {...register("id", { required: true, maxLength: 10 })}
        />
        {errors.id && <p>ERROR!!!</p>}
        <br />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 5 })}
        />
        {errors.password && <p>ERROR!!!</p>}
        <br />
        <br />
        <button>Login</button>
      </form>
      {/* <form>
        <div>
          <label htmlFor="id">id</label>
          <br />
          <input
            id="id"
            type="text"
            placeholder="아이디를 입력하세요"
            {...register("id", {
              required: "아이디는 필수 입력입니다.",
              minLength: {
                value: 2,
                message: "2글자 이상 입력해주세요",
              },
            })}
          />
          {errors.id && <p>{errors.id.message}</p>}
        </div>
        <br />

        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="******"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다",
              minLength: {
                value: 2,
                message: "2자리 이상 입력하셈",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <br />
        <br />
        <button type="submit">로그인</button>
      </form> */}
    </div>
  );
}
