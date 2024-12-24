"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function manageRulePage() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();

  return (
    <>
      <div className="contents-area manage-rule">
        <h2 className="f-exBold title">
          {
            data?.map((item) => {
              if (item.url === pathname) {
                return item.menuNm;
              }
            })
          }
        </h2>
        <img src="/images/img-manage-rule-contents.png" alt="" />
      </div>
    </>
  );
}
