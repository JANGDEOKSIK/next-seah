import PageMenu from "@/app/(sub)/report/_components/PageMenu";
import Image from "next/image";
import ImgReportResultTitBg from "/public/images/img-report-result-tit-bg.jpg";

export default function GuidePage() {
  return (
    <>
      <div className="page-tit-wrap">
        <div className="bg">
          <Image
            src={ImgReportResultTitBg}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="inenr">
          <p className="page-tit f-tit1">제보결과 확인</p>
          <PageMenu />
        </div>
      </div>
    </>
  );
}
