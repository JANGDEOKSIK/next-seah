"use client";
import Link from "next/link";
import { getList, setMutation } from "@/app/_lib/fetch";

export default function Header({ title }) {
  const { data, isLoading, refetch } = getList("/menus", ["about", "todoList"]);

  /*const { mutate, isError, error } = setMutation("/posts", {
    onSuccess: (data) => {
      refetch();
      console.log("Success:", data);
    },
    onError: (error) => {
      console.log("Error:", error);
    },
  });*/

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <h1 className="logo">
          <Link href={"/"}>
            <span></span>
          </Link>
        </h1>

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
                        console.log("twoDItem", twoDItem);
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

        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
