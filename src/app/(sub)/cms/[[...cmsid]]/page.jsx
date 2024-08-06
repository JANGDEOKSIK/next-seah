"use client";

import { useRouter } from "next/navigation";

export default function cmsidPage({ params }) {
  console.log("params", params);

  /* const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug); */

  return (
    <>
      cms id test page
      {/* [folder]/index .js .jsx .tsx 동적 경로 세그먼트
      [...folder]/index .js .jsx .tsx 포괄 경로 구간 - 선택적 포괄경로와 비슷하지만 경로 요소가 반드시 존재해야 한다는 차이가 있음 (/cms 까지만 칠 경우 에러가 난다)
      [[...folder]]/index .js .jsx .tsx 선택적 포괄 경로 구간 (경로를 /cms 까지만 경로 쳐도 cmsid는 빈 {} 로 반환됨) */}
      <hr />
      <div>params.cmsid 값 {params.cmsid}</div>
      <hr />
    </>
  );
}
