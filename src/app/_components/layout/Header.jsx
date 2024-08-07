import Link from "next/link";

export default function Header() {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <h1></h1>
        <nav>
          <ul>
            <li>
              <Link
                className="one-dep"
                href={"/report/guide"}
              >
                윤리경영제안센터 소개
              </Link>
            </li>
            <li>
              <Link
                className="one-dep"
                href={"/report/online"}
              >
                제보하기
              </Link>
            </li>
          </ul>
        </nav>
        <div className="utils"></div>
      </header>
    </>
  );
}
