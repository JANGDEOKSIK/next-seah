import PageTransition from "@/app/_components/layout/PageTransition";
import SubVisualArea from "../_components/SubVisualArea";

export default function OnlinePage() {
  return (
    <>
      <SubVisualArea />
      <PageTransition>
        <div>online page</div>
        <div style={{ height: "120vh" }}></div>
      </PageTransition>
    </>
  );
}
