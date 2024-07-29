import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header title={"about과 seah의 헤더입니다."}></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
