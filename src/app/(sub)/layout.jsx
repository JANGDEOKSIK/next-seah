import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";

export default function Layout({ children }) {
  return <div className="wrap">{children}</div>;
}
