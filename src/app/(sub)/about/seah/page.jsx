"use client";

import PageTransition from "@/app/_components/PageTransition";
import { getList, setMutation } from "@/app/_lib/fetch";

export default function Page() {
  const { data, isLoading } = getList("https://jsonplaceholder.typicode.com/todos", "todoList");

  const { mutate, isError, error } = setMutation("http://localhost:4000/posts", {
    onSuccess: (data) => {
      console.log("Success:", data);
    },
    onError: (error) => {
      console.log("Error:", error);
    },
  });

  const onClick = () => {
    mutate({ title: "A", body: "B" });
  };

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <PageTransition>
      <div>about/seah123</div>
      <button type="button" onClick={onClick}>
        post
      </button>
      <div>
        {data?.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </PageTransition>
  );
}
