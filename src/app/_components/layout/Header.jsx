"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isBlackHeader = pathname === "/customer-inquiry";

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header className={isBlackHeader ? "black" : ""}>
        <h1>
          <a href="">SeAH</a>
        </h1>
        <ul className="gnb">
          <li>
            <a href="">윤리경영제안센터 소개</a>
          </li>
          <li>
            <a href="">제보하기</a>
          </li>
        </ul>
        <div className="utils">
          <div className="lang">
            <a href="" className="f-exBold on">KOR</a>
            <a href="" className="f-exBold">ENG</a>
          </div>
          <button type="button"></button>
        </div>
      </header>
    </>
  );
}
