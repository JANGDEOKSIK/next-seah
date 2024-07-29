"use client";

import { useRouter } from "next/navigation";
export default function notFound() {
  const router = useRouter();

  const onClick = () => {
    router.replace("/");
  };
  return (
    <>
      <h2>찾을 수 없는 페이지</h2>
      <button
        onClick={onClick}
        onChange={true}
      >
        메인으로
      </button>
    </>
  );
}
