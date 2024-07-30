export default function Header({ title }) {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <div className="inner">
          <a href="javascript:" className="logo"></a>
          <img src={process.env.PUBLIC_URL + "/images/logo-white.png"} />
        </div>
      </header>
    </>
  );
}
