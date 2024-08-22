"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SkipNavi() {
  const skipNavRef = useRef();
  const pathname = usePathname();

  useEffect(()=>{
    skipNavRef.current.focus();
  }, [pathname]);

  return(
    <div id="skipNavi" tabIndex={0} ref={skipNavRef}>
      <Link href="#wrap">본문 바로가기</Link>
    </div>
  )
}