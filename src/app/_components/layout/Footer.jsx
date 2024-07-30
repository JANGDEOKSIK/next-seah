export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="left">
          <a href="javascript:" className="logo">
            <img src="/images/logo-footer.png" alt="" />
          </a>
          <div className="address">
            <p className="f-body2-b">04036 서울시 마포구 양화로 45 세아타워</p>
            <p className="f-body2-b">Copyright &copy; SeAH All rights reserved.</p>
          </div>
        </div>
        <div className="right">
          <a href="javascript:" className="f-body2-b">
            개인정보취급방침
          </a>
          <a href="javascript:" className="f-body2-b">
            내부제보 운영규정
          </a>
          <a href="javascript:" className="f-body2-b">
            고객문의
          </a>
        </div>
      </div>
    </footer>
  );
}
