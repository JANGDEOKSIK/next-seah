"use client";

import { getList } from "@/app/_lib/fetch";

export default function Guide() {
  const { data, isLoading, refetch } = getList("/dummy/menu.json", [
    "about",
    "todoList",
  ]);

  return (
    <>
      <div className="visual-area report">
        <h2>제보 가이드</h2>
        <ul className="sub-nav">
          <li>
            <a
              href=""
              className="on"
            >
              제보 가이드
            </a>
          </li>
          <li>
            <a href="">온라인 제보</a>
          </li>
          <li>
            <a href="">제보결과 확인</a>
          </li>
          <li>
            <a href="">서신·전화·Fax 이용안내</a>
          </li>
        </ul>
      </div>
      <div className="contents-area">
        <h3 className="f-exBold">
          윤리경영 제안센터는 세아 임직원 외에도 고객, 주주 및 협력사 등 <br />
          이해관계자 모두 이용가능한 제보 채널입니다.
        </h3>
        <div className="report-type">
          <p className="f-exBold title">제보유형</p>
          <ul className="type-list">
            <li className="type-item">
              <div className="img-box">
                <img
                  src="/images/img-report-type1.jpg"
                  alt=""
                />
              </div>
              <p className="f-exBold item-desc">
                이해관계자로부터 금품을 받는 행위
              </p>
            </li>
            <li className="type-item">
              <div className="img-box">
                <img
                  src="/images/img-report-type2.jpg"
                  alt=""
                />
              </div>
              <p className="f-exBold item-desc">
                거래업체에 대한 부당 지분 참여
              </p>
            </li>
            <li className="type-item">
              <div className="img-box">
                <img
                  src="/images/img-report-type3.jpg"
                  alt=""
                />
              </div>
              <p className="f-exBold item-desc">협력회사 선정의 투명성 결여</p>
            </li>
            <li className="type-item">
              <div className="img-box">
                <img
                  src="/images/img-report-type4.jpg"
                  alt=""
                />
              </div>
              <p className="f-exBold item-desc">회사자산의 불법·부당 사용</p>
            </li>
            <li className="type-item">
              <div className="img-box">
                <img
                  src="/images/img-report-type5.jpg"
                  alt=""
                />
              </div>
              <p className="f-exBold item-desc">
                문서·계수의 조작 및 허위 보고
              </p>
            </li>
            <li className="type-item">
              <div className="img-box">
                <img
                  src="/images/img-report-type6.jpg"
                  alt=""
                />
              </div>
              <p className="f-exBold item-desc">
                기타 윤리규범 위반 <br />
                (직무태만, 관리감독소홀, 월권행위, 품위손상 등)
              </p>
            </li>
          </ul>
        </div>
        <div className="report-progress">
          <p className="f-exBold title">제보절차</p>
          <p className="f-bold desc">
            제보를 접수하시고 해당 시안을 종결하기까지 <br />
            다음과 같은 처리 과정을 거칩니다.
          </p>
          <div className="progress-wrap">
            <div className="img-box">
              <img
                src="/images/img-report-step.png"
                alt="01 제보접수 02 접수확인 03 조사개시 04 조사완료 05 종결"
              />
            </div>
            <div className="item-box">
              <div className="progress-item">
                <p className="f-exBold item-tit">1. 제보접수</p>
                <p className="f-bold item-desc">
                  제보 내용을 작성하여 접수합니다.
                </p>
              </div>
              <div className="progress-item">
                <p className="f-exBold item-tit">2. 접수확인</p>
                <p className="f-bold item-desc">
                  제보하신 내용 및 관련부서를 확인하고 정확성을 면밀히 <br />
                  검토합니다. 내용확인 후 조사에서 제외 또는 전담부서로 <br />
                  이관될 수 있습니다.
                </p>
              </div>
              <div className="progress-item">
                <p className="f-exBold item-tit">3. 조사개시</p>
                <p className="f-bold item-desc">
                  제보된 시안에 대해 심층적으로 조사를 진행하고 <br />
                  관련된 자료를 철저히 분석하여 상황을 <br />
                  체계적으로 파악합니다.
                </p>
              </div>
              <div className="progress-item">
                <p className="f-exBold item-tit">4. 조사완료</p>
                <p className="f-bold item-desc">
                  수집된 증거와 조사를 꼼꼼하게 검토하여 상황을 <br />
                  신중하게 판단하고 적절한 대응을 결정합니다.
                </p>
              </div>
              <div className="progress-item">
                <p className="f-exBold item-tit">5. 종결</p>
                <p className="f-bold item-desc">
                  필요한 후속조치를 신속하고 적극적으로 취하며, <br />
                  처리결과에 따른 내용은 [제보결과 확인]을 <br />
                  통해 확인 하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="progress-notice">
            <p className="f-exBold notice-tit">
              제보 내용이 아래 사항에 해당하는 경우 <br />
              조사 대상에서 제외될 수 있음을 알려드립니다.
            </p>
            <div className="notice-desc">
              <ul className="dot-list">
                <li className="f-bold">
                  고객불만, 하자보수 등 서비스/품질 관련 사항
                </li>
                <li className="f-bold">
                  회사가 관여할 수 없는 개인 사생활에 관한 경우
                </li>
                <li className="f-bold">
                  허위사실 또는 일방적 주장으로 대상자를 비방하는 경우
                </li>
                <li className="f-bold">
                  근거 없는 악의적 제보는 제재대상이 될 수 있음을 안내 드립니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
