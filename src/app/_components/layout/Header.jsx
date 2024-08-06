export default function Header({  }) {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>
        <a href="" className="logo"><img src="/images/logo-wht.png" alt="" /></a>
				<ul>
					<li>
						<a href="" className="one-dep f-body1-eb"><span>윤리경영제안센터 소개</span></a>
					</li>
					<li>
						<a href="" className="one-dep f-body1-eb"><span>제보하기</span></a>
						<div>
							<a href="" className="two-dep f-body2-b"><span>제보 가이드</span></a>
							<a href="" className="two-dep f-body2-b"><span>온라인 제보</span></a>
							<a href="" className="two-dep f-body2-b"><span>제보결과 확인</span></a>
							<a href="" className="two-dep f-body2-b"><span>서신·전화·Fax 이용안내</span></a>
						</div>
					</li>
				</ul>
				<div className="util">
					<div className="lang">
						<a href="" className="on f-body1-eb">KOR</a>
						<a href="" className="f-body1-eb">ENG</a>
					</div>
					<a href="" className="all-menu"></a>
				</div>
      </header>
    </>
  );
}
