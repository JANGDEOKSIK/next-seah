"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import { getList, setMutation } from "@/app/_lib/fetch";

export default function Nav({ data }) {
  //const { data, isLoading, refetch } = getList("/menus", ["header", "gnb"]);

  /*let data;
  const promise = await fetch("http://localhost:4000/menus")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      data = json;
    });
    */

  const [isTwoDvisibleArr, setIsTwoDvisibleArr] = useState([]);

  const handleTwoD = (index) => {
    const updatedIndexArr = isTwoDvisibleArr.includes(index)
      ? isTwoDvisibleArr.filter((i) => i !== index)
      : [index];
    setIsTwoDvisibleArr(updatedIndexArr);
  };

  const handleTwoDHide = () => {
    setIsTwoDvisibleArr([]);
  };

  return (
    <>
      <nav onMouseLeave={handleTwoDHide}>
        <ul>
          {data?.map((item, index) => {
            if (item.menuEtc === false) {
              return (
                <li key={index}>
                  <Link
                    href={`${!item.subMenu ? item.url : ""}`}
                    className="one-d"
                    onMouseEnter={() => handleTwoD(index)}
                    onFocus={() => handleTwoD(index)}
                  >
                    <span>{item.menuNm}</span>
                  </Link>

                  <AnimatePresence>
                    {isTwoDvisibleArr.includes(index) && item.subMenu && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.15,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                      >
                        <ul className="nav-twodepth">
                          {item.subMenu?.map((twoDItem, idx) => {
                            return (
                              <li key={idx}>
                                <Link
                                  href={`${item.url}${twoDItem.url}`}
                                  className="two-d"
                                >
                                  <span>{twoDItem.menuNm}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
}
