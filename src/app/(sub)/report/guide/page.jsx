"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function GuidePage() {
	const { data, isLoading, refetch } = getList(`/menus`, [
    "header",
    "menu",
  ]);

	const pathname = usePathname();
	
	return (
		<div id="wrap">

			<div className="sub-vis" style={{background: "url(/images/sub-vis1.jpg) no-repeat", backgroundSize: "cover"}}>
				<p className="sub-tit f-s-title1">제보 가이드</p>
				<div className="lnb">
					{ data
						?.filter(item => item.menuId === "ReportPage")
						.flatMap(item => item.subMenu)
						.map((subItem) => (
							<a href={`/report${subItem.url}`} key={subItem.menuSeq} className={pathname.includes(subItem.url) ? "on" : ""}>
								{subItem.menuNm}
							</a>
						))
					}
				</div>
			</div>
					
			<div className="sub-wrap inner">
				<div className="guide">

					<p className="top-copy f-title1-eb">윤리경영 제안센터는 세아 임직원 외에도 고객, 주주 및 협력사 등<br />이해관계자 모두 이용가능한 제보 채널입니다.</p>
					<div className="sec">
						<p className="tit f-title1-eb">제보유형</p>
						<ul className="card">
							<li>
								<div className="img">
									<img src="/images/img-report-sort1.jpg" alt="" />
								</div>
								<p className="f-body1-eb">이해관계자로부터 금품을 받는 행위</p>
							</li>
							<li>
								<div className="img">
									<img src="/images/img-report-sort2.jpg" alt="" />
								</div>
								<p className="f-body1-eb">거래업체에 대한 부당 지분 참여</p>
							</li>
							<li>
								<div className="img">
									<img src="/images/img-report-sort3.jpg" alt="" />
								</div>
								<p className="f-body1-eb">협력회사 선정의 투명성 결여</p>
							</li>
							<li>
								<div className="img">
									<img src="/images/img-report-sort4.jpg" alt="" />
								</div>
								<p className="f-body1-eb">회사자산의 불법·부당 사용</p>
							</li>
							<li>
								<div className="img">
									<img src="/images/img-report-sort5.jpg" alt="" />
								</div>
								<p className="f-body1-eb">문서·계수의 조작 및 허위 보고</p>
							</li>
							<li>
								<div className="img">
									<img src="/images/img-report-sort6.jpg" alt="" />
								</div>
								<p className="f-body1-eb">기타 윤리규범 위반<br />(직무태만, 관리감독소홀, 월권행위, 품위손상 등)</p>
							</li>
						</ul>
					</div>

					<div className="sec">
						<p className="tit f-title1-eb">제보유형</p>
						<p className="tit2">제보를 접수하시고 해당 시안을 종결하기까지<br /> 다음과 같은 처리 과정을 거칩니다.</p>

						<div className="step">
							<img src="/images/img-step.png" alt="" />
						</div>
						<div className="list">
							<dl>
								<dt className="f-body1-eb">1.제보접수</dt>
								<dd>제보 내용을 작성하여 접수합니다.</dd>
							</dl>
							<dl>
								<dt className="f-body1-eb">2.접수확인</dt>
								<dd>제보하신 내용 및 관련부서를 확인하고 정확성을 면밀히<br /> 검토합니다. 내용확인 후 조사에서 제외 또는 전담부서로<br /> 이관될 수 있습니다.</dd>
							</dl>
							<dl>
								<dt className="f-body1-eb">3.조사개시</dt>
								<dd>제보된 시안에 대해 심층적으로 조사를 진행하고<br /> 관련된 자료를 철저히 분석하여 상황을<br /> 체계적으로 파악합니다.</dd>
							</dl>
							<dl>
								<dt className="f-body1-eb">4.조사완료</dt>
								<dd>수집된 증거와 조사를 꼼꼼하게 검토하여 상황을<br /> 신중하게 판단하고 적절한 대응을 결정합니다.</dd>
							</dl>
							<dl>
								<dt className="f-body1-eb">5.종결</dt>
								<dd>필요한 후속조치를 신속하고 적극적으로 취하며,<br /> 처리결과에 따른 내용은 [제보결과 확인]을<br /> 통해 확인 하실 수 있습니다.</dd>
							</dl>
						</div>

						<div className="noti">
							<p className="f-title4-eb">제보 내용이 아래 사항에 해당하는 경우<br /> 조사 대상에서 제외될 수 있음을 알려드립니다.</p>
							<div className="gray-box">
								<p className="dot-txt">고객불만, 하자보수 등 서비스/품질 관련 사항</p>
								<p className="dot-txt">회사가 관여할 수 없는 개인 사생활에 관한 경우</p>
								<p className="dot-txt">허위사실 또는 일방적 주장으로 대상자를 비방하는 경우</p>
								<p className="dot-txt">근거 없는 악의적 제보는 제재대상이 될 수 있음을 안내 드립니다.</p>
							</div>
						</div>

					</div>

				</div>
			</div>

		</div>
	)
}