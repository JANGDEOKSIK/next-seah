"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "/public/images/icon-logo.svg";
import Loading from "@/app/loading";

export default function Footer() {
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
    <footer>
      <div className="inner">
        <div className="left">
          <div className="logo">
            <Image
              src={Logo}
              alt="SeAH"
              // layout="fill"
              fill
            />
          </div>
          <address className="f-bdy2-b">
            <p>04036 서울시 마포구 양화로 45 세아타워</p>
            <p>Copyright © SeAH All rights reserved.</p>
          </address>
        </div>
        <div className="right">
          {data.map(
            (item, idx) =>
              item.menuEtc && (
                <Link
                  href={item.url}
                  key={item.id}
                  className="f-bdy2-b"
                >
                  {item.menuNm}
                </Link>
              )
          )}
        </div>
      </div>
    </footer>
  );
}
