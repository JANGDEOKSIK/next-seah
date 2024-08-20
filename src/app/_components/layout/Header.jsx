"use client";
import Link from "next/link";
import Nav from "./nav";
import { getList } from "@/app/_lib/fetch";

export default function Header() {
  const { data } = getList("/menus", ["str1", "str2"]);

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <h1 className="logo">
          <Link href={"/main"}>
            <span></span>
          </Link>
        </h1>

        <Nav data={data}></Nav>

        <div className="util-area">util 영역</div>
      </header>
    </>
  );
}
