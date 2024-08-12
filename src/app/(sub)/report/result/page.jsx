import PageTransition from "@/app/_components/layout/PageTransition";
import PageTitWrap from "../_components/PageTitWrap";
import ImgReportResultTitBg from "/public/images/img-report-result-tit-bg.jpg";

export default function ResultPage() {
  return (
    <div id="wrap">
      <PageTitWrap bg={ImgReportResultTitBg} />
      <PageTransition>
        <div className="cont-wrap">
          <div className="inner"></div>
        </div>
      </PageTransition>
    </div>
  );
}
