import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import SubVisual from "@/app/_components/SubVisual";

export default function Layout({ children }) {
  return <div id="wrap">{children}</div>;
}
