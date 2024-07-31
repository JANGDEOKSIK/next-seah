"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };

  return (
    <div>
      <h2>찾을 수 없는 페이지</h2>
      <button onClick={() => reset()}>Try again</button>
      <button onClick={onClick}>홈으로</button>
    </div>
  );
}
