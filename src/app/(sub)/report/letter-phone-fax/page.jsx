import PageTransition from "@/app/_components/layout/PageTransition";
import PageTitWrap from "../_components/PageTitWrap";
import ImgReportTitBg from "/public/images/img-report-tit-bg.jpg";

export default function LetterPhoneFaxPage() {
  return (
    <div id="wrap">
      <PageTitWrap bg={ImgReportTitBg} />
      <PageTransition>
        <div className="cont-wrap">
          <div classNam="inner"></div>
        </div>
      </PageTransition>
    </div>
  );
}
