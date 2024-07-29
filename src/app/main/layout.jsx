import Header from "@/app/_components/layout/Header";
import Footer from "../_components/layout/Footer";

export default function Layout({ children }) {
  return (
    <div id="main">
      <Header title="my header ! ! !" />
      {children}
      <Footer />
    </div>
  );
}
