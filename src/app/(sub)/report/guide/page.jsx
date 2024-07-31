"use client";

import PageMenu from "@/app/(sub)/report/_components/PageMenu";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ImgReportTitBg from "/public/images/img-report-tit-bg.jpg";

export default function GuidePage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["report", "guide"],
    queryFn: async () => {
      const promise = await fetch(
        `${process.env.NEXT_PUBLIC_DUMMY_URL}/reportType`
      );
      const response = await promise.json();

      return response;
    },
  });
  // console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <div id="wrap">
        <div className="page-tit-wrap">
          <div className="bg">
            <Image
              src={ImgReportTitBg}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="inenr">
            <p className="page-tit f-tit1">제보 가이드</p>
            <PageMenu />
          </div>
        </div>
        <div className="cont-wrap">
          <div className="inner">
            <section className="page-info-wrap">
              <p className="info f-tit1">
                윤리경영 제안센터는 세아 임직원 외에도 고객, 주주 및 협력사 등
                <br />
                이해관계자 모두 이용가능한 제보 채널입니다.
              </p>
            </section>
            <section>
              <div className="sec-tit">
                <p className="tit f-tit1">제보유형</p>
              </div>
              <ul className="type-list">
                {data.map((item, idx) => (
                  <li
                    className="item"
                    key={item.idx}
                  >
                    <div className="img">
                      <Image
                        src={item.imgUrl}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <p className="txt f-bdy1-eb">{item.txt}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <div className="sec-tit">
                <p className="tit f-tit1">제보절차</p>
                <p className="txt f-bdy2-b">
                  제보를 접수하시고 해당 시안을 종결하기까지
                  <br />
                  다음과 같은 처리 과정을 거칩니다.
                </p>
              </div>
              <div className="process-wrap">
                <ul className="process-circle">
                  <li className="item">
                    <p className="num f-desc2">01</p>
                    <p className="tit f-bdy1-eb">제보접수</p>
                  </li>
                  <li className="item">
                    <p className="num f-desc2">02</p>
                    <p className="tit f-bdy1-eb">접수확인</p>
                  </li>
                  <li className="item">
                    <p className="num f-desc2">03</p>
                    <p className="tit f-bdy1-eb">조사개시</p>
                  </li>
                  <li className="item">
                    <p className="num f-desc2">04</p>
                    <p className="tit f-bdy1-eb">조사완료</p>
                  </li>
                  <li className="item">
                    <p className="num f-desc2">05</p>
                    <p className="tit f-bdy1-eb">종결</p>
                  </li>
                </ul>
                <ul className="process-list">
                  <li className="item">
                    <p className="tit f-bdy1-eb">1.제보접수</p>
                    <p className="txt f-bdy2-b">
                      제보 내용을 작성하여 접수합니다.
                    </p>
                  </li>
                  <li className="item">
                    <p className="tit f-bdy1-eb">2.접수확인</p>
                    <p className="txt f-bdy2-b">
                      제보하신 내용 및 관련부서를 확인하고 정확성을 면밀히
                      <br />
                      검토합니다. 내용확인 후 조사에서 제외 또는 전담부서로
                      <br />
                      이관될 수 있습니다.
                    </p>
                  </li>
                  <li className="item">
                    <p className="tit f-bdy1-eb">3.조사개시</p>
                    <p className="txt f-bdy2-b">
                      제보된 시안에 대해 심층적으로 조사를 진행하고 <br />
                      관련된 자료를 철저히 분석하여 상황을 <br />
                      체계적으로 파악합니다.
                    </p>
                  </li>
                  <li className="item">
                    <p className="tit f-bdy1-eb">4.조사완료</p>
                    <p className="txt f-bdy2-b">
                      수집된 증거와 조사를 꼼꼼하게 검토하여 상황을 <br />
                      신중하게 판단하고 적절한 대응을 결정합니다.
                    </p>
                  </li>
                  <li className="item">
                    <p className="tit f-bdy1-eb">5.종결</p>
                    <p className="txt f-bdy2-b">
                      필요한 후속조치를 신속하고 적극적으로 취하며, <br />
                      처리결과에 따른 내용은 [제보결과 확인]을 <br />
                      통해 확인 하실 수 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <div className="sec-tit">
                <p className="info f-tit4">
                  제보 내용이 아래 사항에 해당하는 경우 <br />
                  조사 대상에서 제외될 수 있음을 알려드립니다.
                </p>
              </div>
              <div className="gray-box">
                <div className="dots grid-col2">
                  <p className="dot f-desc2">
                    고객불만, 하자보수 등 서비스/품질 관련 사항
                  </p>
                  <p className="dot f-desc2">
                    회사가 관여할 수 없는 개인 사생활에 관한 경우
                  </p>
                  <p className="dot f-desc2">
                    허위사실 또는 일방적 주장으로 대상자를 비방하는 경우
                  </p>
                  <p className="dot f-desc2">
                    근거 없는 악의적 제보는 제재대상이 될 수 있음을 안내
                    드립니다.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
