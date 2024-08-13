"use client";

import Link from "next/link";
import Image from "next/image";
import { getList, setMutation } from "../../_lib/fetch";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

export default function AllMenu({ open, onClose }) {
  console.log(open);
  const { data, refetch } = getList("/menus", ["header", "menus"]);

  const { mutate } = setMutation("/menus", {
    onSuccess: (data) => {
      refetch();
    },
  });

  const [openSection, setOpenSection] = useState(null);
  const contentRefs = useRef({});

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((key) => {
      const twoDepth = contentRefs.current[key];
      if (openSection === parseInt(key)) {
        twoDepth.style.height = `${twoDepth.scrollHeight}px`;
      } else {
        twoDepth.style.height = "0px";
      }
    });
  }, [openSection]);

  return (
    <>
      <div className={classNames("allmenu-wrap", open ? " on" : "")}>
        <div className="top-wrap">
          <div className="lang-wrap">
            <Link
              href=""
              className="on"
            >
              KOR
            </Link>
            <Link href="">ENG</Link>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
          >
            <Image
              width={24}
              height={24}
              src="/images/btn-all-menu-close.svg"
              alt=""
            />
          </button>
        </div>
        <div className="menu-wrap">
          <ul>
            {data
              ?.filter((item) => item.dpth < 2 && item.menuEtc === false)
              .map((item, index) => {
                return (
                  <li
                    className="one-depth-w"
                    key={item.menuSeq}
                  >
                    <p
                      className={`one-d${openSection === index ? " on" : ""}`}
                      onClick={() => toggleSection(index)}
                    >
                      <span className="f-title2-eb">{item.menuNm}</span>
                    </p>
                    {item.childcnt == 0 ? (
                      ""
                    ) : (
                      <div
                        className="two-depth-w"
                        ref={(el) => (contentRefs.current[index] = el)}
                      >
                        {item.subMenu?.map((twoD) => {
                          return (
                            <Link
                              href=""
                              className="two-d"
                              key={twoD.menuSeq}
                            >
                              <span className="f-s-title2">{twoD.menuNm}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="etc-wrap">
          {data
            ?.filter((item) => item.menuEtc === true)
            .map((item) => {
              return (
                <Link
                  href=""
                  className="one-d"
                  key={item.id}
                >
                  <span className="f-desc-eb">{item.menuNm}</span>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
