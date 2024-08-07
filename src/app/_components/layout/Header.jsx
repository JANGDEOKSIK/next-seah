//"use client";
import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <h1 className="logo">
          <Link href={"/"}>
            <span></span>
          </Link>
        </h1>

        <Nav></Nav>
      </header>
    </>
  );
}
