import Header from "@/app/_components/Header";

export default function Layout({ children }) {
  return (
    <div id="main">
      <Header></Header>
      {children}
      footer
    </div>
  );
}
