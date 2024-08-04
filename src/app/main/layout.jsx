import Header from "@/app/_components/layout/Header";
import Footer from "../_components/layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
