export default function Header({ title, dummy }) {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <div className="inner">
          <a
            href="javascript:"
            className="logo"
          ></a>
          <nav>
            <ul>
              {dummy
                ?.filter((item) => item.dpth < 2 && item.menuEtc === false)
                .map((item) => {
                  return (
                    <li
                      className="one-depth-w"
                      key={item.menuSeq}
                    >
                      <a
                        href="javascript:"
                        className="one-d"
                      >
                        <span>{item.menuNm}</span>
                      </a>
                      {item.childcnt == 0 ? (
                        ""
                      ) : (
                        <div className="two-depth-w">
                          {dummy?.map((subItem) => {
                            return subItem.subMenu?.map((twoD) => {
                              return (
                                <a
                                  href="javascript:"
                                  className="two-d"
                                >
                                  <span className="f-body2-b">
                                    {twoD.menuNm}
                                  </span>
                                </a>
                              );
                            });
                          })}
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </nav>
          <div className="util-wrap">
            <div className="lang-wrap">
              <a
                href="javascript:"
                className="on"
              >
                KOR
              </a>
              <a href="javascript:">ENG</a>
            </div>
            <a href="javascript:">
              <img src="/images/btn-all-menu.png" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
