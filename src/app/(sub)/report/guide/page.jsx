"use client";

import PageTransition from "@/app/_components/layout/PageTransition";
import { getList } from "@/app/_lib/fetch";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ReportGuidePage() {
  const pathname = usePathname();
  // console.log(pathname);

  // 경로를 '/'로 분리하고, 마지막 부분을 가져옵니다.
  const parts = pathname.split("/");
  const lastPart = "/" + parts[parts.length - 1] || "";
  // console.log(lastPart); // url 확인

  const { data, isLoading } = getList("/menus", ["subMenu", "menus"]);
  // console.log(data);

  if (!isLoading) {
    return (
      <>
        <PageTransition>
          <div className="top-tit-area">
            <h2 className="f-sub1 fc-white">
              {data
                ?.filter((item) => item.subMenu) // 전체에서 subMenu를 포함하고 있는 배열 골라내기
                .map((item) => {
                  return item.subMenu // subMenu를 포함하고 있는 배열에서 subMenu배열만 골라내기
                    .filter((item) => item.url === lastPart) // subMenu배열 중에 url이 lastPart와 일치하는 객체 반환하기
                    .map((item) => item.menuNm); //일치하는 객체의 타이틀메뉴 가져오기
                })}
            </h2>
            <ul className="lnb-list">
              {data
                ?.filter((item) => item.subMenu) // 전체에서 subMenu를 포함하고 있는 배열 골라내기
                .map((item) =>
                  item.subMenu.map(function (menu, idx) {
                    // subMenu에서 menuNm만 돌아서 뽑기
                    return (
                      <li
                        key={idx}
                        className="f-sub2 fc-white"
                      >
                        <a href="jacvascript:">{menu.menuNm}</a>
                      </li>
                    );
                  })
                )}
            </ul>
          </div>
          <p className="f-tit1 sub-desc">
            윤리경영 제안센터는 세아 임직원 외에도 고객, 주주 및 협력사 등
            <br />
            이해관계자 모두 이용가능한 제보 채널입니다.
          </p>
          <section className="sc-reporttype inner">
            <h3 className="f-tit1">제보유형</h3>
            <ul className="type-list grid3">
              <li className="type-item">
                <div className="ig-wrap">
                  <Image
                    src={require("../../../../../public/images/img-report-type1.jpg")}
                    alt="listimg"
                  />
                </div>
                <p className="f-bdy1">이해관계자로부터 금품을 받는 행위</p>
              </li>
              <li className="type-item">
                <div className="ig-wrap">
                  <Image
                    src={require("../../../../../public/images/img-report-type2.jpg")}
                    alt="listimg"
                  />
                </div>
                <p className="f-bdy1">거래업체에 대한 부당 지분 참여</p>
              </li>
              <li className="type-item">
                <div className="ig-wrap">
                  <Image
                    src={require("../../../../../public/images/img-report-type3.jpg")}
                    alt="listimg"
                  />
                </div>
                <p className="f-bdy1">협력회사 선정의 투명성 결여</p>
              </li>
              <li className="type-item">
                <div className="ig-wrap">
                  <Image
                    src={require("../../../../../public/images/img-report-type4.jpg")}
                    alt="listimg"
                  />
                </div>
                <p className="f-bdy1">회사자산의 불법·부당 사용</p>
              </li>
              <li className="type-item">
                <div className="ig-wrap">
                  <Image
                    src={require("../../../../../public/images/img-report-type5.jpg")}
                    alt="listimg"
                  />
                </div>
                <p className="f-bdy1">문서·계수의 조작 및 허위 보고</p>
              </li>
              <li className="type-item">
                <div className="ig-wrap">
                  <Image
                    src={require("../../../../../public/images/img-report-type6.jpg")}
                    alt="listimg"
                  />
                </div>
                <p className="f-bdy1">
                  기타 윤리규범 위반 <br />
                  (직무태만, 관리감독소홀, 월권행위, 품위손상 등)
                </p>
              </li>
            </ul>
          </section>
          <section className="sc-reportstep inner">
            <h3 className="f-tit1">제보절차</h3>
            <p className="f-bdy2">
              제보를 접수하시고 해당 시안을 종결하기까지 <br />
              다음과 같은 처리 과정을 거칩니다.
            </p>
            <ul className="circle-list flex">
              <li className="flex">
                <span className="f-desc1">01</span>
                <span className="f-bdy1">제보접수</span>
              </li>
              <li className="flex">
                <span className="f-desc1">02</span>
                <span className="f-bdy1">접수확인</span>
              </li>
              <li className="flex">
                <span className="f-desc1">03</span>
                <span className="f-bdy1">조사개시</span>
              </li>
              <li className="flex">
                <span className="f-desc1">04</span>
                <span className="f-bdy1">조사완료</span>
              </li>
              <li className="flex">
                <span className="f-desc1">05</span>
                <span className="f-bdy1">종결</span>
              </li>
            </ul>
            <ul className="bar-list grid3">
              <li>
                <p className="f-bdy1">1.제보접수</p>
                <p className="f-desc2">제보 내용을 작성하여 접수합니다.</p>
              </li>
              <li>
                <p className="f-bdy1">2.접수확인</p>
                <p className="f-desc2">
                  제보하신 내용 및 관련부서를 확인하고 정확성을 면밀히
                  <br /> 검토합니다. 내용확인 후 조사에서 제외 또는
                  <br /> 전담부서로 이관될 수 있습니다.
                </p>
              </li>
              <li>
                <p className="f-bdy1">3.조사개시</p>
                <p className="f-desc2">
                  제보된 시안에 대해 심층적으로 조사를 진행하고
                  <br /> 관련된 자료를 철저히 분석하여 상황을
                  <br /> 체계적으로 파악합니다.
                </p>
              </li>
              <li>
                <p className="f-bdy1">4.조사완료</p>
                <p className="f-desc2">
                  수집된 증거와 조사를 꼼꼼하게 검토하여 상황을
                  <br /> 신중하게 판단하고 적절한 대응을 결정합니다.
                </p>
              </li>
              <li>
                <p className="f-bdy1">5.종결</p>
                <p className="f-desc2">
                  필요한 후속조치를 신속하고 적극적으로 취하며,
                  <br /> 처리결과에 따른 내용은 [제보결과 확인]을
                  <br /> 통해 확인 하실 수 있습니다.
                </p>
              </li>
            </ul>
          </section>
          <section className="sc-except inner">
            <p className="f-tit5">
              제보 내용이 아래 사항에 해당하는 경우 <br />
              조사 대상에서 제외될 수 있음을 알려드립니다.
            </p>
            <ul className="box-list flex">
              <li className="f-desc1">
                고객불만, 하자보수 등 서비스/품질 관련 사항
              </li>
              <li className="f-desc1">
                회사가 관여할 수 없는 개인 사생활에 관한 경우
              </li>
              <li className="f-desc1">
                허위사실 또는 일방적 주장으로 대상자를 비방하는 경우
              </li>
              <li className="f-desc1">
                근거 없는 악의적 제보는 제재대상이 될 수 있음을 안내 드립니다.
              </li>
            </ul>
          </section>
        </PageTransition>
      </>
    );
  }
}
