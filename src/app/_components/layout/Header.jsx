"use client";

import Link from "next/link";
import Image from "next/image";
import { getList, setMutation } from "../../_lib/fetch";

export default function Header() {
  const { data, refetch } = getList("/menus", ["header", "menus"]);

  const { mutate } = setMutation("/menus", {
    onSuccess: (data) => {
      refetch();
    },
  });

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
            <Link href="">
              <Image
                src="/images/btn-all-menu.png"
                width={52}
                height={52}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
