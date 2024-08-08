import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeaderSideMenu({
  isMenuOpened,
  data,
  handleMenuState,
  headerPathname,
}) {
  return (
    <AnimatePresence>
      {isMenuOpened && (
        <motion.div
          key="headerSideMenu"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, right: "-100%" }}
          animate={{
            opacity: isMenuOpened ? 1 : 0,
            right: isMenuOpened ? 0 : "-100%",
          }}
          exit={{ opacity: 0, right: "-100%" }}
          className={classNames("slide-menu")}
          aria-label="하위 메뉴"
        >
          <div className="lang-type f-bdy1">
            <a>KOR</a>
            <a>ENG</a>
          </div>
          <ul className="menu-wrap">
            {data?.map((item) => {
              return (
                item.dpth === 1 &&
                !item.menuEtc && (
                  <li
                    key={item.menuSeq}
                    className={classNames(
                      "menu f-tit2 fc-gray60",
                      item.url === headerPathname && "active"
                    )}
                  >
                    {item.url ? (
                      <Link href={`${item.url}`}>{item.menuNm}</Link>
                    ) : (
                      <div>{item.menuNm}</div>
                    )}
                    <div className="dpth2">
                      <ul className="f-desc2 fc-gray60">
                        {item.subMenu?.map((sub) => {
                          return (
                            sub.parentSeq === item.menuSeq && (
                              <li
                                className="f-sub2"
                                key={sub.menuSeq}
                              >
                                <Link href={`${sub.url}`}>{sub.menuNm}</Link>
                              </li>
                            )
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
          <ul className="footer-menu">
            {data?.map((item) => {
              return (
                item.menuEtc && (
                  <li
                    className="f-desc1 fc-gray60"
                    key={item.menuSeq}
                  >
                    <Link href={item.url}>{item.menuNm}</Link>
                  </li>
                )
              );
            })}
          </ul>
          <button
            className="menu-close"
            type="button"
            onClick={handleMenuState}
          ></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
