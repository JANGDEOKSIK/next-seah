import Link from "next/link";

export default function ReportGuidePage() {
  return (
    <>
      <div id="wrap">
        <header>
          <div className="inner">
            <h1 className="logo">
              <Link href={"/"} />
            </h1>
            <nav>
              <ul>
                <li>
                  <Link href={"/윤리경영제안센터 소개"} />
                </li>
                <li></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
