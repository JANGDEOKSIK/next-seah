"use client";

import PageTransition from "@/app/_components/layout/PageTransition";
import { getList, setMutation } from "@/app/_lib/fetch";
import Link from "next/link";
import { useState } from "react";

export default function Page({ params, searchParams }) {
  console.log(params, searchParams);
  const { data, isLoading, refetch } = getList("/dummy/menu.json", [
    "about",
    "todoList",
  ]);

  const { mutate, isError, error } = setMutation("/posts", {
    onSuccess: (data) => {
      refetch();
      console.log("Success:", data);
    },
    onError: (error) => {
      console.log("Error:", error);
    },
  });

  const onClick = () => {
    mutate({ title: "C", body: "D" });
  };

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <PageTransition>
      <div>about/seah123</div>
      <Link href={"/main"}>main</Link>
      <button
        type="button"
        onClick={onClick}
      >
        post
      </button>
      <div>
        {data?.map((item, index) => (
          <div key={index}>{item.keywords}</div>
        ))}
      </div>
    </PageTransition>
  );
}
