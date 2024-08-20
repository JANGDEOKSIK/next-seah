"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  //redirect("/main")
  return (
    <div>
      <Link href="/main">메인으로 이동</Link>
    </div>
  );
}
