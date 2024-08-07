//"use client";

import Link from "next/link";
// import { getList, setMutation } from "@/app/_lib/fetch";

export default function Nav({ data }) {
  //const { data, isLoading, refetch } = getList("/menus", ["header", "gnb"]);

  /*let data;
  const promise = await fetch("http://localhost:4000/menus")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      data = json;
    });
    */

  return (
    <>
      <nav>
        <ul>
          {data?.map((item, index) => {
            return (
              <li key={index}>
                <Link href={"/"}>
                  <span>{item.menuNm}</span>
                </Link>

                <div className="nav-twodepth">
                  <ul>
                    {item.subMenu?.map((twoDItem, index) => {
                      return (
                        <li key={index}>
                          <Link href={"/"}>
                            <span>{twoDItem.menuNm}</span>
                          </Link>

                          <div className="nav-twodepth"></div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
