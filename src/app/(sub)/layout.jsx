import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import SubVisualArea from "./report/_components/SubVisualArea";
import PrefetchElement from "../_lib/prefetch";

export default function Layout({ children }) {
  return (
    <>
      <PrefetchElement
        url={"/menu"}
        keyValue={["root", "allMenus"]}
      >
        <Header />
      </PrefetchElement>
      {/* <SubVisualArea /> */}

      {children}
      <Footer />
    </>
  );
}
