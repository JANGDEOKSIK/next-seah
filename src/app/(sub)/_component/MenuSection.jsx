"use client";

import { getList } from "@/app/_lib/fetch";
import { QueryClient, useQuery } from "@tanstack/react-query";
import classNames from "classnames";
// import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { usePathname, useheaderPathnamer } from "next/navigation";
// import { useEffect } from "react";

export default function MenuSection({ name }) {
  // const router = useRouter();

  const headerPathname = usePathname();
  const queryClient = new QueryClient();
  queryClient.getQueryData(["menus"]);

  // console.log(queryClient, "queryClientqueryClientqueryClient");
  const { data } = getList("/menus", ["header", "menus"]);

  // console.log(headerPathname, "x-current-path");
  if (headerPathname.includes("result")) {
    return null;
  }

  return (
    <section className="menu-section">
      {/* <div className="inner">
        {data?.map((item) => {
          return (
            item.menuId === "ReportPage" &&
            item.subMenu.map((sub, index) => {
              return (
                <h2
                  className="title f-sub1"
                  key={`${sub}${index}`}
                >
                  {headerPathname.includes(sub.url) && sub.menuNm}
                </h2>
              );
            })
          );
        })}
        <ul className="side-menu f-sub2">
          {data?.map((item) => {
            return (
              item.menuId === "ReportPage" &&
              item.subMenu.map((sub, index) => {
                return (
                  <li key={`${sub}${index}`}>
                    <Link
                      href={`${sub.url}`}
                      className={classNames(
                        headerPathname === `${sub.url}` && "active"
                      )}
                    >
                      {sub.menuNm}
                    </Link>
                  </li>
                );
              })
            );
          })}
        </ul>
      </div> */}
    </section>
  );
}
