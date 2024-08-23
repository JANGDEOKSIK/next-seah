// "use client";

import classNames from "classnames";
import Link from "next/link";

export default async function MenuSection({ params }) {
  const dataTest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/menus`, {
    cache: "no-store",
  });
  const response = await dataTest.json();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  if (params.reportId[0] === "result") {
    return null;
  }

  console.log(params, "paramsparamsparamsparamsparams");

  return (
    <section className={classNames("menu-section", params.reportId[0])}>
      <div className="inner">
        <h2 className="title f-sub1">
          {response?.map((item) => {
            return (
              item.menuId === "ReportPage" &&
              item.subMenu.map((sub) => {
                // console.log([params.reportId[0]], "params.reportId[0]");
                // console.log(sub.url);

                return sub.url === params.reportId[0] && sub.menuNm;
              })
            );
          })}
        </h2>
        <ul className="side-menu f-sub2">
          {response?.map((item) => {
            return (
              item.menuId === "ReportPage" &&
              item.subMenu.map((sub) => {
                return (
                  <li>
                    <Link
                      href={`${sub.url}`}
                      className={classNames(
                        params.reportId[0] === `${sub.url}` && "active"
                      )}
                    >
                      {sub.menuNm}
                    </Link>
                  </li>
                );
              })
            );
          })}
        </ul>
      </div>
    </section>
  );
}
