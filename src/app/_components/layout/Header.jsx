"use client";

import { getList, setMutation } from "@/app/_lib/fetch";
// import { QueryClient, useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import HeaderSide from "./HeaderSide";

export default function Header() {
  // const { data } = useQuery({
  //   queryKey: ["header", "menus"],
  //   queryFn: async () => {
  //     const promise = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/menus`);
  //     const response = promise.json();
  //     return response;
  //   },
  // });

  const { data, isLoading, refetch } = getList("/menus", ["header", "menus"]);

  // const [isMenuOpened, setIsMenuOpend] = useState(false);

  // const headerPathname = usePathname();

  // const handleMenuState = () => {
  //   setIsMenuOpend(!isMenuOpened);
  // };

  // const dataTest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/menus`, {
  //   cache: "no-store",
  // });
  // const response = await dataTest.json();

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
              aria-label="메인 화면으로 가기"
            />
          </h1>
          <nav>
            <ul className="nav-header">
              <li className="f-bdy1"></li>
              {data
                ?.filter((item) => item.dpth === 1 && !item.menuEtc)
                .map((item) => {
                  return (
                    <li
                      className="f-bdy1"
                      key={item.menuSeq}
                    >
                      {item.url ? (
                        <Link href={`${item.url}`}>{item.menuNm}</Link>
                      ) : (
                        <div>
                          {item.menuNm}
                          <div className="dpth2">
                            <ul className="f-desc2 fc-gray60">
                              {item.subMenu
                                ?.filter(
                                  (sub) => sub.parentSeq === item.menuSeq
                                )
                                .map((subMenu, index) => {
                                  return (
                                    <li key={index}>
                                      <Link href={`${subMenu.url}`}>
                                        {subMenu.menuNm}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}

              {/* {data?.map((item) => {
                return (
                  item.dpth === 1 &&
                  !item.menuEtc && (
                    <li
                      key={item.menuId}
                      className="f-bdy1"
                    >
                      {item.url ? (
                        <Link href={`${item.url}`}>{item.menuNm}</Link>
                      ) : (
                        <div>{item.menuNm}</div>
                      )}
                      <div className="dpth2">
                        <ul className="f-desc2 fc-gray60">
                          {item.subMenu?.map((sub, index) => {
                            return (
                              sub.parentSeq === item.menuSeq && (
                                <li key={index}>
                                  <Link href={`${sub.url}`}>{sub.menuNm}</Link>
                                </li>
                              )
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                );
              })} */}
            </ul>
          </nav>
          <div className="utils">
            <div className="lang-type f-bdy1">
              <a>KOR</a>
              <a>ENG</a>
            </div>
            <HeaderSide data={data} />
            {/* <MenuButton data={data} /> */}
            {/* <div className="btn-menu">
              <button
                type="button"
                aria-haspopup="true"
                aria-controls="menu"
                aria-expanded="false"
                // onClick={handleMenuState}
              >
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </button>
            </div> */}
          </div>
        </div>
        {/* <AnimatePresence>
          {isMenuOpened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isMenuOpened ? 1 : 0,
              }}
              exit={{ opacity: 0 }}
              className={"dim"}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMenuOpened && (
            <motion.div
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, right: "-100%" }}
              animate={{
                opacity: isMenuOpened ? 1 : 0,
                right: isMenuOpened ? 0 : "-100%",
              }}
              exit={{ opacity: 0, right: "-100%" }}
              className={classNames("slide-menu")}
              aria-label="하위 메뉴"
            >
              <div className="lang-type f-bdy1">
                <a>KOR</a>
                <a>ENG</a>
              </div>
              <ul className="menu-wrap">
                {data?.map((item) => {
                  return (
                    item.dpth === 1 &&
                    !item.menuEtc && (
                      <li
                        className={classNames(
                          "menu f-tit2 fc-gray60",
                          item.url === headerPathname && "active"
                        )}
                      >
                        {item.url ? (
                          <Link href={`${item.url}`}>{item.menuNm}</Link>
                        ) : (
                          <div>{item.menuNm}</div>
                        )}
                        <div className="dpth2">
                          <ul className="f-desc2 fc-gray60">
                            {item.subMenu?.map((sub) => {
                              return (
                                sub.parentSeq === item.menuSeq && (
                                  <li className="f-sub2">
                                    <Link href={`${sub.url}`}>
                                      {sub.menuNm}
                                    </Link>
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
              <ul className="footer-menu">
                {data?.map((item) => {
                  return (
                    item.menuEtc && (
                      <li className="f-desc1 fc-gray60">
                        <Link href={item.url}>{item.menuNm}</Link>
                      </li>
                    )
                  );
                })}
              </ul>
              <button
                className="menu-close"
                type="button"
                onClick={handleMenuState}
              ></button>
            </motion.div>
          )}
        </AnimatePresence> */}
      </header>
    </>
  );
}
