import PageTransition from "@/app/_components/layout/PageTransition";
import PageMenu from "../_components/PageMenu";
import Image from "next/image";
import ImgReportTitBg from "/public/images/img-report-tit-bg.jpg";

export default function LetterPhoneFaxPage() {
  return (
    <div id="wrap">
      <div className="page-tit-wrap">
        <div className="bg">
          <Image
            src={ImgReportTitBg}
            // layout="fill"
            fill
            alt=""
          />
        </div>
        <div className="inenr">
          <p className="page-tit f-tit1">서신·전화·Fax 이용안내</p>
          <PageMenu />
        </div>
      </div>
      <PageTransition>
        <div className="cont-wrap">
          <div classNam="inner"></div>
        </div>
      </PageTransition>
    </div>
  );
}
