import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import dummy from "../../../db.json";

export default function Layout({ children }) {
  return (
    <>
      <Header dummy={dummy} title={"about과 seah의 헤더입니다."}></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
