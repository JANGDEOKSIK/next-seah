"use client";

import Link from "next/link";
import classNames from "classnames";

export default function PageMenu({ path, subMenu }) {
  console.log(path);
  return (
    <div className="page-menu">
      {subMenu.map((item, idx) => (
        <Link
          key={item.idx}
          href={item.url}
          className={classNames("menu f-sub2", { on: path === item.url })}
        >
          {item.menuNm}
        </Link>
      ))}
      {/* <Link
        href="/guide"
        className={`menu f-sub2 ${pathname === "/guide" ? "on" : ""}`}
      >
        제보가이드
      </Link> */}
    </div>
  );
}
