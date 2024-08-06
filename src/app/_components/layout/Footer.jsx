import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="left">
          <Link
            href=""
            className="logo"
          >
            <img
              src="/images/logo-footer.png"
              alt=""
            />
          </Link>
          <div className="address">
            <p className="f-body2-b">04036 서울시 마포구 양화로 45 세아타워</p>
            <p className="f-body2-b">
              Copyright &copy; SeAH All rights reserved.
            </p>
          </div>
        </div>
        <div className="right">
          <Link
            href=""
            className="f-body2-b"
          >
            개인정보취급방침
          </Link>
          <Link
            href=""
            className="f-body2-b"
          >
            내부제보 운영규정
          </Link>
          <Link
            href=""
            className="f-body2-b"
          >
            고객문의
          </Link>
        </div>
      </div>
    </footer>
  );
}
