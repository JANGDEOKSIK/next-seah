"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGetList } from "@/app/_lib/fetch";
import PageMenu from "./PageMenu";
import Loading from "@/app/loading";

export default function PageTitWrap({ bg }) {
  const pathname = usePathname();
  const pathnameOneDepth = pathname.split("/");
  const { data, isLoading, refetch } = useGetList("/menus", ["headerFooter"]);
  if (isLoading) {
    return <Loading />;
  }
  const nowMenu = data.find((menu) => menu.url === `/${pathnameOneDepth[1]}`);
  const nowMenuTwoDetph = nowMenu.subMenu;
  const nowMenuTwoDetph2 = nowMenuTwoDetph.find(
    (menu) => menu.url === pathname
  );

  return (
    <div className="page-tit-wrap">
      <div className="bg">
        <Image
          src={bg}
          // layout="fill"
          fill
          alt=""
        />
      </div>
      <div className="inenr">
        <p className="page-tit f-tit1">{nowMenuTwoDetph2.menuNm}</p>
        <PageMenu
          path={pathname}
          subMenu={nowMenuTwoDetph}
        />
      </div>
    </div>
  );
}
