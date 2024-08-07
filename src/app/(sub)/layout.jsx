import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import SubVisualArea from "./report/_components/SubVisualArea";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SubVisualArea />
      {children}
      <Footer />
    </>
  );
}
