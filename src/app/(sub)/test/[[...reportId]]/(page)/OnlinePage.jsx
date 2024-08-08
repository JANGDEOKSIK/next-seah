import Input from "@/app/_components/input/Input";
import PageTransition from "@/app/_components/layout/PageTransition";
import ComboBox from "@/app/_components/input/ComboBox";
import TextArea from "@/app/_components/input/TextArea";
import Radio from "@/app/_components/input/Radio";

export default function OnlinePage() {
  const companyOption1 = [
    {
      value: "default",
      name: "세아홀딩스 계열",
    },
    {
      value: "seah",
      name: "세아",
    },
    {
      value: "seahHoldings",
      name: "세아홀딩스",
    },
  ];
  const companyOption2 = [
    {
      value: "default",
      name: "세아홀딩스 계열",
    },
    {
      value: "seah",
      name: "세아",
    },
    {
      value: "seahHoldings",
      name: "세아홀딩스",
    },
  ];

  const radioOption = [
    {
      value: "qwde",
      label: "내게 일어난 일이라서",
    },
    {
      value: "qwsgde",
      label: "외부인에게 들었음",
    },
    {
      value: "qwshe",
      label: "내가 직접 보거나 들은 일이라서",
    },
    {
      value: "qdhwe",
      label: "소문으로 들었음",
    },
    {
      value: "qwedj",
      label: "직장 동료에게 들었음 ",
    },
    {
      value: "qwge",
      label: "우연히 문서/파일을 보다가 알게 되었음",
    },
  ];

  const radioOption2 = [
    {
      value: "once",
      label: "한번",
    },
    {
      value: "1week",
      label: "일주일",
    },
    {
      value: "1to3months",
      label: "1개월 이상 3개월 미만",
    },
    {
      value: "lessThan1Yr",
      label: "3개월 이상 1년 미만",
    },
    {
      value: "lessThan3Yrs",
      label: "1년 이상 3년 미만",
    },
    {
      value: "moreThan3Yrs",
      label: "3년 이상",
    },
  ];

  const radioOption3 = [
    {
      value: "coworker",
      label: "회사 임직원",
    },
    {
      value: "groupCoworker",
      label: "그룹 임직원",
    },
    {
      value: "partnerCo",
      label: "협력사",
    },
    {
      value: "client",
      label: "고객",
    },
    {
      value: "Stakeholder",
      label: "외부 관계자",
    },
    {
      value: "etc",
      label: "밝히고 싶지 않음",
    },
  ];
  return (
    <PageTransition>
      <section className="section pdt-short">
        <h3 className="f-tit1 sub-tit">
          제보하고 싶은 내용을 올려주시면 빠른 시일내에 답변해 드리겠습니다.
        </h3>
        <div className="gray-box online-notice">
          <p className="notice-txt f-bdy2 f-bold">
            비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의 의사에
            반하여 공개되지 않도록 철저하게 비밀을 유지합니다.
            <br />
            제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로
            회신하여 드립니다.
          </p>
        </div>
      </section>
      <section className="section pdt-short">
        <form>
          <div className="form-wrap">
            <div className="form-title f-tit2">
              <span className="number">01</span>
              제보대상을 <br /> 입력해주세요.
            </div>
            <div className="form-area">
              <div className="form-list double">
                <ComboBox
                  label="대상회사"
                  id="company"
                  isEssential
                  children={companyOption1}
                />
                <ComboBox
                  id="company2"
                  children={companyOption2}
                />
              </div>
              <div className="form-list">
                <Input
                  id="reportSubject"
                  placeholder="제보대상을 입력해주세요"
                  label="제보대상"
                  isEssential
                />
              </div>
            </div>
          </div>
          <div className="form-wrap pdt-long">
            <div className="form-title f-tit2">
              <span className="number">01</span>
              제보대상을 <br /> 입력해주세요.
            </div>
            <div className="form-area">
              <div className="form-list">
                <ComboBox
                  label="제보구분"
                  id="reportCate"
                  isEssential
                  children={companyOption1}
                />
              </div>
              <div className="form-list">
                <Input
                  id="reportTitle"
                  placeholder="제목을 입력해 주세요."
                  label="제보대상"
                  isEssential
                />
              </div>
              <div className="form-list">
                <TextArea
                  label="내용"
                  isEssential
                  placeholder="내용을 입력해 주세요."
                  infoTxt={"작성가이드 안내 참고하여 작성해주세요."}
                  txtLimit={400}
                />
              </div>
              <div className="form-list">
                <Radio
                  children={radioOption}
                  title={"문제를 알게된 경로"}
                  id="route"
                />
              </div>
              <div className="form-list">
                <Radio
                  children={radioOption2}
                  title={"문제의 지속 기간"}
                  id="duration"
                />
              </div>
              <div className="form-list">
                <Radio
                  children={radioOption3}
                  title={"대상회사와 관계"}
                  id="relationship"
                />
              </div>
              <div className="form-list">
                <Input
                  id="personName"
                  placeholder="내용을 입력해 주세요."
                  label="제보와 관련된 문제를 잘 아는 사람과 알 것으로 예상되는 사람을 적어주세요."
                  txtShort
                  infoTxt={
                    "예시. xx팀 xxx 과장에게 확인 문의, 00년 0월 0일 xx팀 법인카드 내역 확인 등"
                  }
                  infoTxtBlock
                />
              </div>
              <div className="form-list">
                <Input
                  id="personName"
                  placeholder="내용을 입력해 주세요."
                  label="문제를 확인/조사하기 위해 가장 좋은 방법으로 생각되는 것을 적어주세요."
                  txtShort
                />
              </div>
            </div>
          </div>
        </form>
      </section>
    </PageTransition>
  );
}
