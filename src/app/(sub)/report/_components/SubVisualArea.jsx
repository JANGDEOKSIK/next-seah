"use client";

import { usePathname } from "next/navigation";

export default function SubVisualArea() {
  const datas = require("/db.json"); // db.json에서 데이터 가져오기
  const pathname = usePathname();

  console.log(pathname); // url 확인
  console.log(datas);

  // url이 pathname과 일치하는 항목 필터링
  const matchedItem = datas.menu.find((item) => item.url === pathname);

  return (
    <>
      {pathname.indexOf("finish") < 0 ? (
        <div className="subvisual">
          {matchedItem ? (
            <div className="subvisual">
              <div>
                <h2 className="f-sub1 fc-white">{matchedItem.name}</h2>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <>finish</>
      )}
    </>
  );
}
