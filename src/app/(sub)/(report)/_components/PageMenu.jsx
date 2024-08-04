"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageMenu() {
  const pathname = usePathname();

  return (
    <div className="page-menu">
      <Link
        href="/guide"
        className={`menu f-sub2 ${pathname === "/guide" ? "on" : ""}`}
      >
        제보가이드
      </Link>
      <Link
        href="/online"
        className={`menu f-sub2 ${pathname === "/online" ? "on" : ""}`}
      >
        온라인 제보
      </Link>
      <Link
        href="/result"
        className={`menu f-sub2 ${pathname === "/result" ? "on" : ""}`}
      >
        제보결과 확인
      </Link>
      <Link
        href="/letter-phone-fax"
        className={`menu f-sub2 ${
          pathname === "/letter-phone-fax" ? "on" : ""
        }`}
      >
        서신·전화·Fax 이용안내
      </Link>
    </div>
  );
}
