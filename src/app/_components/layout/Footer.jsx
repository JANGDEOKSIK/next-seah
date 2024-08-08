import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <link href="/main" />
        </div>
        <ul className="footer-link">
          <li>
            <Link href="/">개인정보취급방침</Link>
          </li>
          <li>
            <Link href="/">내부제보 운영규정</Link>
          </li>
          <li>
            <Link href="/">고객 문의</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="txt f-bdy1 f-bold">
          04036 서울시 마포구 양화로 45 세아타워
        </p>
        <p className="txt f-bdy1 f-bold">
          Copyright © SeAH All rights reserved.
        </p>
      </div>
    </footer>
  );
}
