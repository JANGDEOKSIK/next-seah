import dynamic from "next/dynamic";
import { Suspense } from "react";

export default async function Page({ params }) {
  console.log(params.reportId, "params.reportId");

  try {
    const dataTest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/menus`, {
      cache: "no-store",
    });
    const response = await dataTest.json();

    // const getSubMenus2 = await response
    //   ?.filter((menu, index) => {
    //     // console.log(menu.url, "sub");
    //     console.log(menu.url);
    //     return menu.url === "test" && menu.subMenu;

    //     // sub.subMenu.length !== 0;
    //     // sub.subMenu;
    //     // sub.subMenu[0] === params.reportId[0];
    //   })
    //   .subMenu.map((item) => console.log(item, "item"));

    // console.log(getSubMenus2, "getSubMenusgetSubMenusgetSubMenus");

    // console.log(response, "response");

    const getSubMenus = await response?.reduce((acc, menu) => {
      if (menu.subMenu) {
        acc = menu.subMenu;
      }
      return acc;
    }, []);

    const subs = getSubMenus?.filter((acc, sub) => {
      return acc.url === params.reportId[0] || "";
    });

    const PageComponent = dynamic(() => import(`./(page)/${subs[0]?.menuId}`), {
      ssr: false,
    });

    return (
      // <Suspense>
      <PageComponent />
      // </Suspense>
    );
  } catch (err) {
    return <div>errorr</div>;
  }
}
