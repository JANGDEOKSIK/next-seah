"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function PolicyPage() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();

  return (
    <>
      <div className="contents-area policy">
        <h2 className="f-exBold title">
          {
            data?.map(function (item) {
              if (item.url === pathname) {
                return item.menuNm;
              }
            })
          }
        </h2>
        <img src="/images/img-policy-contents.png" alt="" />
      </div>
    </>
  );
}
