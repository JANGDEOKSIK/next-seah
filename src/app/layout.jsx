import ReduxProvider from "@/store/provider";
import QueryProvider from "./_lib/queryProvider";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import PrefetchElement from "./_lib/prefetch";
import "@/scss/index.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, loading }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <ReduxProvider>
            {loading}
            <PrefetchElement
              url={"/menu"}
              keyValue={["root", "allMenus"]}
            >
              <Header />
            </PrefetchElement>

            {children}
            <Footer />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
