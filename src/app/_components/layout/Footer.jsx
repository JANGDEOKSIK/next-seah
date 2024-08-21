"use client";

import Image from "next/image";
import seahLogo from "../../../../public/images/ci-bk.png";
import { getList } from "@/app/_lib/fetch";

export default function Footer() {
  const { data, isLoading } = getList("/menus", ["menuEtc"]);

  if (!isLoading) {
    return (
      <footer>
        <div className="f-inner flex">
          <div className="wrap">
            <h2>
              <Image
                src={seahLogo}
                alt="seah"
              />
            </h2>
            <p className="address f-desc2">
              04036 서울시 마포구 양화로 45 세아타워
            </p>
            <p className="copyright f-desc2">
              Copyright © SeAH All rights reserved.
            </p>
          </div>
          <div className="policy-list flex">
            {data
              ?.filter((item) => item.menuEtc)
              .map((item, i) => {
                return (
                  <a
                    className="f-desc2"
                    href="jacvascript:"
                    key={i}
                  >
                    {item.menuNm}
                  </a>
                );
              })}
          </div>
        </div>
      </footer>
    );
  }
}
