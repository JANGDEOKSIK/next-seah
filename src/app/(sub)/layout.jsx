import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer"

export default function Layout({children}) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
