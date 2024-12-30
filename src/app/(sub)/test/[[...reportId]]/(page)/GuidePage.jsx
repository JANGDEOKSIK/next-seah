import Image from "next/image";
import reportType1 from "../../../../../../public/images/img-report-type01.jpg";
import reportType2 from "../../../../../../public/images/img-report-type02.jpg";
import reportType3 from "../../../../../../public/images/img-report-type03.jpg";
import reportType4 from "../../../../../../public/images/img-report-type04.jpg";
import reportType5 from "../../../../../../public/images/img-report-type05.jpg";
import reportType6 from "../../../../../../public/images/img-report-type06.jpg";
import reportStep from "../../../../../../public/images/img-report-step.jpg";
import PageTransition from "@/app/_components/layout/PageTransition";

export default function GuidePage() {
  return (
    // <PageTransition>
    <>
      <section className="section pdt-short">
        <h3 className="f-tit1 sub-tit">
          윤리경영 제안센터는 세아 임직원 외에도 고객, 주주 및 협력사 등
          이해관계자 모두 이용가능한 제보 채널입니다.
        </h3>
      </section>
      <section className="section pdt-short">
        <div className="sec-tit f-tit1">제보유형</div>
        <div className="report-type">
          <div className="type">
            <div className="img-wrap">
              <Image
                src={reportType1}
                alt={"제보"}
              />
            </div>
            <p className="txt f-bdy1 f-exBold">
              이해관계자로부터 금품을 받는 행위
            </p>
          </div>
          <div className="type">
            <div className="img-wrap">
              <Image
                src={reportType2}
                alt={"제보"}
              />
            </div>
            <p className="txt f-bdy1 f-exBold">
              거래업체에 대한 부당 지분 참여
            </p>
          </div>
          <div className="type">
            <div className="img-wrap">
              <Image
                src={reportType3}
                alt={"제보"}
              />
            </div>
            <p className="txt f-bdy1 f-exBold">협력회사 선정의 투명성 결여</p>
          </div>
          <div className="type">
            <div className="img-wrap">
              <Image
                src={reportType4}
                alt={"제보"}
              />
            </div>
            <p className="txt f-bdy1 f-exBold">회사자산의 불법·부당 사용</p>
          </div>
          <div className="type">
            <div className="img-wrap">
              <Image
                src={reportType5}
                alt={"제보"}
              />
            </div>
            <p className="txt f-bdy1 f-exBold">문서·계수의 조작 및 허위 보고</p>
          </div>
          <div className="type">
            <div className="img-wrap">
              <Image
                src={reportType6}
                alt={"제보"}
              />
            </div>
            <p className="txt f-bdy1 f-exBold">
              기타 윤리규범 위반
              <br />
              (직무태만, 관리감독소홀, 월권행위, 품위손상 등)
            </p>
          </div>
        </div>
      </section>
      <section className="section pdt-long">
        <div className="sec-tit f-tit1">제보절차</div>
        <p className="sec-desc f-bdy2 f-bold">
          제보를 접수하시고 해당 시안을 종결하기까지
          <br />
          다음과 같은 처리 과정을 거칩니다.
        </p>
        <div className="report-step">
          <div className="img-wrap">
            <Image
              src={reportStep}
              alt="제보 절차 이미지"
            />
          </div>
          <div className="step-list">
            <div className="step">
              <div className="step-tit">1.제보접수</div>
              <div className="step-txt">제보 내용을 작성하여 접수합니다.</div>
            </div>
            <div className="step">
              <div className="step-tit">2.접수확인</div>
              <div className="step-txt">
                제보하신 내용 및 관련부서를 확인하고 정확성을 면밀히 검토합니다.
                내용확인 후 조사에서 제외 또는 전담부서로 이관될 수 있습니다.
              </div>
            </div>
            <div className="step">
              <div className="step-tit">3.조사개시</div>
              <div className="step-txt">
                제보된 시안에 대해 심층적으로 조사를 진행하고 관련된 자료를
                철저히 분석하여 상황을 체계적으로 파악합니다.
              </div>
            </div>
            <div className="step">
              <div className="step-tit">4.조사완료</div>
              <div className="step-txt">
                수집된 증거와 조사를 꼼꼼하게 검토하여 상황을 신중하게 판단하고
                적절한 대응을 결정합니다.
              </div>
            </div>
            <div className="step">
              <div className="step-tit">5.종결</div>
              <div className="step-txt">
                필요한 후속조치를 신속하고 적극적으로 취하며, 처리결과에 따른
                내용은 &#91;제보결과 확인&#93;을 통해 확인 하실 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pdt-long">
        <div className="sec-tit f-tit1">
          제보 내용이 아래 사항에 해당하는 경우
          <br />
          조사 대상에서 제외될 수 있음을 알려드립니다.
        </div>
        <div className="gray-box report-notice">
          <ul className="bullet-list-wrap">
            <li className="bullet-list">
              고객불만, 하자보수 등 서비스/품질 관련 사항
            </li>
            <li className="bullet-list">
              회사가 관여할 수 없는 개인 사생활에 관한 경우
            </li>
            <li className="bullet-list">
              허위사실 또는 일방적 주장으로 대상자를 비방하는 경우
            </li>
            <li className="bullet-list">
              근거 없는 악의적 제보는 제재대상이 될 수 있음을 안내 드립니다.
            </li>
          </ul>
        </div>
      </section>
    </>
    // </PageTransition>
  );
}
