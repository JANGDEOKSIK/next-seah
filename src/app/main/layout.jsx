import Header from "@/app/_components/layout/Header";
import Footer from "../_components/layout/Footer";
import PrefetchElement from "../_lib/prefetch";

export default function Layout({ children }) {
  return (
    <div id="main">
      <PrefetchElement
        url={"/menus"}
        keyValue={["str1", "str2"]}
      >
        <Header title="my header ! ! !" />
      </PrefetchElement>
      {children}
      <Footer />
    </div>
  );
}
