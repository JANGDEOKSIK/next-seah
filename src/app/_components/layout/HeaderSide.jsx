"use client";

import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderSideMenu from "../header/HeaderSideMenu";

export default function HeaderSide({ data }) {
  const [isMenuOpened, setIsMenuOpend] = useState(false);
  const handleMenuState = () => {
    setIsMenuOpend(!isMenuOpened);
  };

  const headerPathname = usePathname();

  return (
    <>
      <div className="btn-menu">
        <button
          type="button"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onClick={handleMenuState}
        >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            key="menuBtn"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isMenuOpened ? 1 : 0,
            }}
            exit={{ opacity: 0 }}
            className={"dim"}
          ></motion.div>
        )}
      </AnimatePresence>
      <HeaderSideMenu
        isMenuOpened={isMenuOpened}
        data={data}
        handleMenuState={handleMenuState}
        headerPathname={headerPathname}
      />
    </>
  );
}
