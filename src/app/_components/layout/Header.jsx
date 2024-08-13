"use client";
import Link from "next/link";
import Image from "next/image";
import { getList } from "@/app/_lib/fetch";

export default function Header({  }) {
  const { data, isLoading, refetch } = getList(`/menus`, [
    "header",
    "menu",
  ]);

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <Link href="/" className="logo"><Image src="/images/logo-wht.png" alt="" fill/></Link>
				<ul>
          { !isLoading && data
            ?.filter((item) => item.dpth === 1 && item.menuEtc === false)
            .map((item, idx) => (
              <li key={item.menuSeq}>
                <Link 
                  href={item.subMenu?.length > 0 ? "/" : item?.url}
                  className="one-dep f-body1-eb"
                >
                  <span>{item.menuNm}</span>
                </Link>
                {item.subMenu?.length > 0 && (
                  <div>
                    {item.subMenu
                      ?.filter((subItem) => subItem.dpth === 2)
                      .map((subItem) => (
                        <Link href={subItem.url} key={subItem.menuSeq} className="two-dep f-body2-b">
                          <span>{subItem.menuNm}</span>
                        </Link>
                      ))
                    }
                  </div>
                )}
              </li>
            ))
          }
				</ul>
				<div className="util">
					<div className="lang">
						<a href="" className="on f-body1-eb">KOR</a>
						<a href="" className="f-body1-eb">ENG</a>
					</div>
					<a href="" className="all-menu"></a>
				</div>
      </header>
    </>
  );
}
