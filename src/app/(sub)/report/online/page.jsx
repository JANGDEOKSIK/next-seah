"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function Online() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();

  return (
    <>
      <div className="visual-area report">
        <h2>온라인 제보</h2>
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
      <div className="contents-area">
        <h3 className="f-exBold">
          제보하고 싶은 내용을 올려 주시면 <br />
          빠른 시일내에 답변해 드리겠습니다.
        </h3>
        <div className="online-notice">
          <p>
            비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의 의사에
            반하여 공개되지 않도록 철저하게 비밀을 유지합니다. <br />
            제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로
            회신하여 드립니다.
          </p>
        </div>
        <div className="online-input-box">
          <div className="online-input-item"></div>
        </div>
      </div>
    </>
  );
}
