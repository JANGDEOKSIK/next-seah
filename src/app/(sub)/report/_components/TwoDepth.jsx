"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getList, setMutation } from "@/app/_lib/fetch";

export default function TwoDepth() {
  const { data, refetch } = getList("/menus", ["header", "menus"]);

  const { mutate } = setMutation("/menus", {
    onSuccess: (data) => {
      refetch();
    },
  });

  const pathname = usePathname();

  return (
    <div className="two-depth">
      {data
        ?.filter((item) => item.menuSeq == 2)
        ?.map((item) => {
          return item.subMenu?.map((subItem) => {
            return (
              <Link
                key={subItem.menuSeq}
                href={`/report${subItem.url}`}
                className={
                  pathname === `/report${subItem.url}`
                    ? "f-s-title2 on"
                    : "f-s-title2"
                }
              >
                {subItem.menuNm}
              </Link>
            );
          });
        })}
    </div>
  );
}
