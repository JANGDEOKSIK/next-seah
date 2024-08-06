"use client";

import React from "react";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import { getList, setMutation } from "../_lib/fetch";

export default function Layout({ children }) {
  const { data, refetch } = getList("/menus", ["header", "menus"]);

  const { mutate } = setMutation("/menus", {
    onSuccess: (data) => {
      refetch();
    },
  });

  return (
    <>
      <Header
        dummy={data}
        title={"about과 seah의 헤더입니다."}
      ></Header>
      {children}
      <Footer />
    </>
  );
}
