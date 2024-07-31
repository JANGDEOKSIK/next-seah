"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function Header({ title }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["header"],
    queryFn: async () => {
      const promise = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_URL}/menus`);
      const response = await promise.json();

      return response;
    },
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <div className="inner">
          {/* <div>{title}</div> */}
          <h1 className="logo">
            <Link href="/main">로고</Link>
          </h1>
          <nav className="nav">
            {data.map((item, idx) =>
              item.url ? (
                <p key={idx}>
                  <Link href={item.url}>{item.menuNm}</Link>
                </p>
              ) : (
                <p key={idx}>
                  <span>{item.menuNm}</span>
                </p>
              )
            )}
          </nav>
          <div>
            <div>
              <div>KOR</div>
              <div>ENG</div>
            </div>
            <button type="button">버튼</button>
          </div>
        </div>
      </header>
    </>
  );
}
