import dynamic from "next/dynamic";

export default async function Page({ params }) {
  try {
    const dataTest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/menus`, {
      cache: "no-store",
    });
    const response = await dataTest.json();

    console.log(response, "response");

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

    return <PageComponent />;
  } catch (err) {
    return <div>errorr</div>;
  }
}
