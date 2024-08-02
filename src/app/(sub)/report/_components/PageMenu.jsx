"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageMenu() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="page-menu">
      <Link
        href="/report/guide"
        className={`menu f-sub2 ${pathname === "/report/guide" ? "on" : ""}`}
      >
        제보가이드
      </Link>
      <Link
        href="/report/report"
        className={`menu f-sub2 ${pathname === "/report/report" ? "on" : ""}`}
      >
        온라인 제보
      </Link>
      <Link
        href="/report/result"
        className={`menu f-sub2 ${pathname === "/report/result" ? "on" : ""}`}
      >
        제보결과 확인
      </Link>
      <Link
        href="/report/info"
        className={`menu f-sub2 ${pathname === "/report/info" ? "on" : ""}`}
      >
        서신·전화·Fax 이용안내
      </Link>
    </div>
  );
}
