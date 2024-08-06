"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "/public/images/icon-logo.svg";
import Loading from "@/app/loading";

export default function Header() {
  const [hoverMenu, setHoverMenu] = useState(null);
  const { isLoading, error, data } = useQuery({
    queryKey: ["headerFooter"],
    queryFn: async () => {
      const promise = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_URL}/menus`);
      const response = await promise.json();

      return response;
    },
  });
  // console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <div className="inner">
          <h1 className="logo">
            <Link
              href="/main"
              title="메인페이지 이동"
            >
              <Image
                src={Logo}
                alt="SeAH"
                // layout="fill"
                fill
              />
            </Link>
          </h1>
          <nav className="nav">
            <ul className="nav-menu">
              {data.map(
                (item, idx) =>
                  !item.menuEtc &&
                  item.menuShow &&
                  (item.childCnt ? (
                    <li
                      className={`one-dpth ${hoverMenu === idx ? "on" : ""}`}
                      key={item.id}
                      onMouseEnter={() => setHoverMenu(idx)}
                      onMouseLeave={() => setHoverMenu(null)}
                    >
                      <Link
                        href="javascript:"
                        title="투뎁스 메뉴"
                      >
                        {item.menuNm}
                      </Link>
                      <ul className="two-menu">
                        {item.subMenu.map((subItem, idx) => (
                          <li
                            key={subItem.menuSeq}
                            className="two-dpth"
                          >
                            <Link href={subItem.url}>{subItem.menuNm}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={item.id}
                      className="one-dpth"
                    >
                      <Link href={item.url}>{item.menuNm}</Link>
                    </li>
                  ))
              )}
            </ul>
          </nav>
          <div className="util-menu">
            <div className="utils">
              <Link
                href="javascript:"
                className="on f-bdy1-eb"
              >
                KOR
              </Link>
              <Link
                href="javascript:"
                className="f-bdy1-eb"
              >
                ENG
              </Link>
            </div>
            <div className="allmenu">
              <button
                type="button"
                className="allmenu-btn"
                title="전체메뉴 팝업"
              ></button>
              <div className="allmenu-popup layer-poup">
                <div className="pop-wrap">
                  <div className="pop-cont">
                    <div className="utils">
                      <Link
                        href="javascript:"
                        className="on f-bdy1-eb"
                      >
                        KOR
                      </Link>
                      <Link
                        href="javascript:"
                        className="f-bdy1-eb"
                      >
                        ENG
                      </Link>
                    </div>
                    <ul className="accordion-wrap">
                      {data.map(
                        (item, idx) =>
                          !item.menuEtc &&
                          item.menuShow &&
                          (item.childCnt ? (
                            <li
                              className="accordion-item"
                              key={item.id}
                            >
                              <div className="accor-head">
                                <a
                                  title="아코디언 열기"
                                  href="javascript:"
                                >
                                  <p className="f-tit2">{item.menuNm}</p>
                                </a>
                              </div>
                              <div className="accor-body">
                                <div className="accor-cont">
                                  {item.subMenu.map((subItem, idx) => (
                                    <Link
                                      href={subItem.url}
                                      key={subItem.menuSeq}
                                      className="f-sub2"
                                    >
                                      {subItem.menuNm}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </li>
                          ) : (
                            <li
                              className="accordion-item"
                              key={item.id}
                            >
                              <div className="accor-head">
                                <a
                                  title="아코디언 열기"
                                  href="javascript:"
                                >
                                  <p className="f-tit2">{item.menuNm}</p>
                                </a>
                              </div>
                              <div className="accor-body">
                                <div className="accor-cont">
                                  <Link
                                    href={item.url}
                                    className="f-sub2"
                                  >
                                    {item.menuNm}
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))
                      )}
                    </ul>
                    <div className="etcs">
                      {data.map(
                        (item, idx) =>
                          item.menuEtc && (
                            <Link
                              href={item.url}
                              key={item.id}
                              className="f-desc1"
                            >
                              {item.menuNm}
                            </Link>
                          )
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    title="팝업 닫기"
                    className="pop-btn"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
