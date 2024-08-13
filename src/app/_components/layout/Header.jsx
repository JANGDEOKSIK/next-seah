"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "/public/images/icon-logo.svg";
import Loading from "@/app/loading";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

export default function Header() {
  const [hoverMenu, setHoverMenu] = useState(null);
  const [allMenu, setAllMenu] = useState(false);
  const [accorMenu, setAccorMenu] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["headerFooter"],
    queryFn: async () => {
      const promise = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_URL}/menus`);
      const response = await promise.json();

      return response;
    },
  });

  useEffect(() => {
    document.body.classList.toggle("stop-scroll", allMenu);
  }, [allMenu]);

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
  };
  const allMenuPopVariants = {
    hidden: { right: "-700rem" },
    enter: { right: "0" },
    exit: { right: "-700rem" },
  };
  const allMenuAccorVariants = {
    hidden: { height: 0 },
    enter: { height: "auto" },
    exit: { height: 0 },
  };

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
                      // className={`one-dpth ${hoverMenu === idx ? "on" : ""}`}
                      className={classNames("one-dpth", {
                        on: hoverMenu === idx,
                      })}
                      key={item.id}
                      onMouseEnter={() => setHoverMenu(idx)}
                      onMouseLeave={() => setHoverMenu(null)}
                    >
                      <button
                        type="button"
                        title="투뎁스 메뉴"
                      >
                        {item.menuNm}
                      </button>
                      <ul className="two-menu">
                        {item.subMenu.map((subItem) => (
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
                href="https://www.naver.com/"
                className="on f-bdy1-eb"
              >
                KOR
              </Link>
              <Link
                href="https://www.naver.com/"
                className="f-bdy1-eb"
              >
                ENG
              </Link>
            </div>
            <div className="allmenu">
              <button
                onClick={() => {
                  setAllMenu(true);
                }}
                type="button"
                className="allmenu-btn"
                title="전체메뉴 팝업"
              ></button>
              <AnimatePresence>
                {allMenu && (
                  <motion.div
                    className="allmenu-popup layer-poup"
                    key="allMenuPopDimd"
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="pop-wrap"
                      key="allMenuPop"
                      variants={allMenuPopVariants}
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pop-cont">
                        <div className="utils">
                          <Link
                            href="https://www.naver.com/"
                            className="on f-bdy1-eb"
                          >
                            KOR
                          </Link>
                          <Link
                            href="https://www.naver.com/"
                            className="f-bdy1-eb"
                          >
                            ENG
                          </Link>
                        </div>
                        <ul className="accordion-wrap">
                          {data.map(
                            (item, idx) =>
                              !item.menuEtc &&
                              item.menuShow && (
                                <li
                                  className={classNames("accordion-item", {
                                    on: accorMenu === idx,
                                  })}
                                  // className={`accordion-item ${
                                  //   accorMenu === idx ? "on" : ""
                                  // }`}
                                  key={item.id}
                                >
                                  <div className="accor-head">
                                    <button
                                      type="button"
                                      title="아코디언 열기"
                                      onClick={() =>
                                        accorMenu === idx
                                          ? setAccorMenu(null)
                                          : setAccorMenu(idx)
                                      }
                                    >
                                      <p className="f-tit2">{item.menuNm}</p>
                                    </button>
                                  </div>
                                  <AnimatePresence>
                                    {accorMenu === idx && (
                                      <motion.div
                                        key="allMenuAccor"
                                        className="accor-body"
                                        variants={allMenuAccorVariants}
                                        initial="hidden"
                                        animate="enter"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                      >
                                        <div className="accor-cont">
                                          {item.childCnt ? (
                                            item.subMenu.map((subItem) => (
                                              <Link
                                                href={subItem.url}
                                                key={subItem.menuSeq}
                                                className="f-sub2"
                                              >
                                                {subItem.menuNm}
                                              </Link>
                                            ))
                                          ) : (
                                            <Link
                                              href={item.url}
                                              className="f-sub2"
                                            >
                                              {item.menuNm}
                                            </Link>
                                          )}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </li>
                              )
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
                        onClick={() => {
                          setAllMenu(false);
                          setAccorMenu(null);
                        }}
                      ></button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
