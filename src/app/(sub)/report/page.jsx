import PageTransition from "@/app/_components/layout/PageTransition";
// import PrefetchElement from "@/app/_lib/prefetch";
import Link from "next/link";

export default function IntroPage() {
  return (
    <PageTransition>
      <div className="content-wrap">
        {/* sub visual  */}
        <div className="sub-visual">
          <div className="inner">
            <h2 className="title">제보 가이드</h2>

            <ul className="navigator-wrap">
              <li>
                <Link href={"/"}>
                  <span>제보 가이드</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
