import PageMenu from "@/app/(sub)/report/_components/PageMenu";
import Image from "next/image";
import ImgReportTitBg from "/public/images/img-report-tit-bg.jpg";

export default function GuidePage() {
  return (
    <>
      <div className="page-tit-wrap">
        <div className="bg">
          <Image
            src={ImgReportTitBg}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="inenr">
          <p className="page-tit f-tit1">서신·전화·Fax 이용안내</p>
          <PageMenu />
        </div>
      </div>
    </>
  );
}
