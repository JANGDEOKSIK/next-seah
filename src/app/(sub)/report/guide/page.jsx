import PageTransition from "@/app/_components/layout/PageTransition";
import SubVisualArea from "../_components/SubVisualArea";
import Image from "next/image";

export default function ReportGuidePage() {
  return (
    <>
      <SubVisualArea />
      <PageTransition>
        <h2>Guide Page</h2>
        <div style={{ height: "120vh" }}>
          <img
            src="/images/img-report1.jpg"
            alt=""
          />
          <Image
            src="/images/img-report2.jpg"
            width="438"
            height="500"
            className="img2"
          />
        </div>
      </PageTransition>
    </>
  );
}
