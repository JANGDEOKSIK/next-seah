"use client";

import { redirect, usePathname } from "next/navigation";

export default function SubVisualArea() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {pathname.indexOf("finish") < 0 ? (
        <div className="subvisual"></div>
      ) : (
        <></>
      )}
    </>
  );
}
