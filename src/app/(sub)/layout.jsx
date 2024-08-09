import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import PrefetchElement from "../_lib/prefetch";

export default function Layout({ children }) {
  return (
    <>
      <PrefetchElement
        url={"/menus"}
        keyValue={["str1", "str2"]}
      >
        <Header title={"about과 seah의 헤더입니다."} />

        <div className="cont-area">{children}</div>
      </PrefetchElement>
      <Footer />
    </>
  );
}
