export default function Header({ title, dummy }) {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <div className="inner">
          <a href="javascript:" className="logo"></a>
          <nav>
            <ul>
              {dummy.menus
                .filter((item) => item.dpth < 2 && item.menuEtc === false)
                .map((item) => {
                  return (
                    <li className="one-depth-w" key={item.menuSeq}>
                      <a href="javascript:" className="one-d">
                        <span>{item.menuNm}</span>
                      </a>
                      {dummy.menus.map((item) => {
                        item.subMenu.map((subItem) => {
                          <div className="two-depth-w">
                            <a href="javascript:" className="two-d" key={item.menuSeq}>
                              <span className="f-body2-b">{subItem.menuNm}</span>
                            </a>
                          </div>;
                        });
                      })}
                    </li>
                  );
                })}
            </ul>

            {/* <ul>
              <li className="one-depth-w">
                <a href="javascript:" className="one-d">
                  <span>제보하기</span>
                </a>
                <div className="two-depth-w">
                  <a href="javascript:" className="two-d">
                    <span className="f-body2-b">제보 가이드</span>
                  </a>
                  <a href="javascript:" className="two-d">
                    <span className="f-body2-b">온라인 제보</span>
                  </a>
                  <a href="javascript:" className="two-d">
                    <span className="f-body2-b">제보결과 확인</span>
                  </a>
                  <a href="javascript:" className="two-d">
                    <span className="f-body2-b">서신&middot;전화&middot;Fax 이용안내</span>
                  </a>
                </div>
              </li>
            </ul> */}
          </nav>
          <div className="util-wrap">
            <div className="lang-wrap">
              <a href="javascript:" className="on">
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
