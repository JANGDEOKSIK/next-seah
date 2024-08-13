"use client";

import Link from "next/link";
import Image from "next/image";
import { getList, setMutation } from "../../_lib/fetch";
import AllMenu from "./AllMenu";
import { useState } from "react";

export default function Header() {
  const { data, refetch } = getList("/menus", ["header", "menus"]);

  const { mutate } = setMutation("/menus", {
    onSuccess: (data) => {
      refetch();
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const onclick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <div className="inner">
          <Link
            href=""
            className="logo"
          ></Link>
          <nav>
            <ul>
              {data
                ?.filter((item) => item.dpth < 2 && item.menuEtc === false)
                .map((item) => {
                  return (
                    <li
                      className="one-depth-w"
                      key={item.menuSeq}
                    >
                      <Link
                        href=""
                        className="one-d"
                      >
                        <span>{item.menuNm}</span>
                      </Link>
                      {item.childcnt == 0 ? (
                        ""
                      ) : (
                        <div className="two-depth-w">
                          {data?.map((subItem) => {
                            return subItem.subMenu?.map((twoD) => {
                              return (
                                <Link
                                  href=""
                                  className="two-d"
                                  key={twoD.menuSeq}
                                >
                                  <span className="f-body2-b">
                                    {twoD.menuNm}
                                  </span>
                                </Link>
                              );
                            });
                          })}
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </nav>
          <div className="util-wrap">
            <div className="lang-wrap">
              <Link
                href=""
                className="on"
              >
                KOR
              </Link>
              <Link href="">ENG</Link>
            </div>
            <button
              type="button"
              onClick={onclick}
            >
              <Image
                src="/images/btn-all-menu.png"
                width={52}
                height={52}
              />
            </button>
          </div>
        </div>
        <AllMenu
          open={isOpen}
          onClose={onClose}
        />
      </header>
    </>
  );
}
