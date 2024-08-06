"use client";

import { getList } from "@/app/_lib/fetch";

export default function Footer() {
  const { data, isLoading, refetch } = getList(`/menus`, [
    "header",
    "menu",
  ]);

  return (
    <footer>
      <div className="left">
        <div className="logo">
          <img src="/images/logo-bk.png" alt="" />
        </div>
        <p>04036 서울시 마포구 양화로 45 세아타워</p>
        <p>Copyright © SeAH All rights reserved.</p>
      </div>
      <div className="right">
        { data
          ?.filter((item) => item.dpth === 1 && item.menuEtc === true)
          .map((item, idx) => (
            <a href={item.url} key={item.menuSeq}>{item.menuNm}</a>
          ))
        }
      </div>
    </footer>
  )
}
