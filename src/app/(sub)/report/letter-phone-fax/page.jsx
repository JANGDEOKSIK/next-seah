"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function letterPhoneFaxPage() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();

  return (
    <>
      <div className="visual-area report">
        <h2>서신·전화·Fax 이용안내</h2>
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
      <div className="contents-area no-padding-bt">
        <h3 className="f-exBold">
          윤리경영 제안센터는 온라인 제보 외에도 <br />
          서신, 전화, 또는 Fax를 통해 제보가 가능합니다.
        </h3>
        <div className="contact-type">
          <p className="f-exBold title">제보방법</p>
          <ul className="type-list">
            <li className="type-item">
              <p className="f-exBold">서신(우편) 제보</p>
              <p>(04036) 서울 마포구 양화로 45 세아타워 30층 감사실</p>
            </li>
            <li className="type-item">
              <p className="f-exBold">전화 제보</p>
              <p>02-6970-0165</p>
            </li>
            <li className="type-item">
              <p className="f-exBold">Fax 제보</p>
              <p>02-6970-0126</p>
            </li>
          </ul>
        </div>
        <div className="contact-guide">
          <div className="txt-box">
            <p className="f-exBold title">제보가이드</p>
            <p className="f-exBold desc">
              제보 유형, 절차, 유의사항 등을 제보 가이드에서 안내하고 있습니다. <br />
              제보를 하시기 전에 제보가이드를 참고해주시기 바랍니다.
            </p>
            <a href="/report/guide"><span className="f-exBold">제보가이드 확인하기</span></a>
          </div>
        </div>
      </div>
    </>
  );
}
