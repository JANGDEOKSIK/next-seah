export default function Header() {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <h1>
          <a href="">SeAH</a>
        </h1>
        <ul className="gnb">
          <li>
            <a href="">윤리경영제안센터 소개</a>
          </li>
          <li>
            <a href="">제보하기</a>
          </li>
        </ul>
        <div className="utils">
          <div className="lang">
            <a href="">KOR</a>
            <a href="">ENG</a>
          </div>
          <button type="button"></button>
        </div>
      </header>
    </>
  );
}
