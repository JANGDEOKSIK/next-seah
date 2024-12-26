"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function ReportResultPage() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();

  return (
    <>
      <div className="visual-area result">
        <h2>제보결과 확인</h2>
        <ul className="sub-nav">
          {data
            ?.filter((item) => item.menuId === "ReportPage")
            .map((item) =>
              item.subMenu?.map((subItem) => {
                const linkPath = `/report${subItem.url}`;
                const isTrue = pathname === linkPath;

                return (
                  <li key={subItem.menuSeq}>
                    <a
                      href={`/report${subItem.url}`}
                      className={isTrue ? "on" : ""}
                    >
                      {subItem.menuNm}
                    </a>
                  </li>
                );
              })
            )}
        </ul>
      </div>
      <div className="contents-area result">
        <h3 className="f-exBold">
          제보하신 접수 건은 아래의 절차를 거쳐 <br />
          최종 결과 확인까지 소정의 시간이 소요되니 <br />
          이점 양지하여 주시기 바랍니다.
        </h3>
        <img src="/images/img-result-contents.png" alt="" />
      </div>
    </>
  );
}
