"use client";

import Link from "next/link";
import { getList } from "@/app/_lib/fetch";
export default function Header() {
  const { data } = getList("/menu", ["root", "allMenus"]);
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <h1></h1>
        <nav>
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <Link
                  className="one-dep"
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="utils"></div>
      </header>
    </>
  );
}
