"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/main");
  return (
    <div>
      <Link href="/main">메인 페이지 이동</Link>
    </div>
  );
}
