import Input from "@/app/_components/input/Input";
import PageTransition from "@/app/_components/layout/PageTransition";
import ComboBox from "@/app/_components/input/ComboBox";
import TextArea from "@/app/_components/input/TextArea";
import Radio from "@/app/_components/input/Radio";
import FileAdd from "@/app/_components/input/FileAdd";
import RadioButton from "@/app/_components/input/RadioButton";
import safetyNum from "../../../../../../public/images/image-safety-num.png";
import Image from "next/image";
import PrimaryButton from "@/app/_components/button/PrimaryButton";

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
              <div className="form-list">
                <FileAdd
                  label="첨부파일"
                  id="fileAdd"
                />
              </div>
            </div>
          </div>
          <div className="form-wrap pdt-long">
            <div className="form-title f-tit2">
              <span className="number">03</span>
              제보자 정보를 <br /> 입력해주세요.
            </div>
            <div className="form-area">
              <div className="form-list">
                <RadioButton id={"reporterInfo"} />
              </div>
              <div className="form-list">
                <Input
                  id="reporterName"
                  placeholder="이름을 입력해 주세요."
                  label="이름"
                  isEssential
                />
              </div>
              <div className="form-list">
                <Input
                  id="reporterName"
                  placeholder="이메일을 입력해 주세요."
                  label="이메일"
                />
              </div>
              <div className="form-list">
                <Input
                  id="phoneNumber"
                  placeholder="연락처를 입력해 주세요."
                  label="연락처"
                  isEssential
                  hasCheckbox
                  btnTxt="안심번호 사용"
                  type="number"
                />
              </div>
              <div className="info-safety-num">
                <Image
                  src={safetyNum}
                  alt="안심번호란? 본인이 실제 번호를 알리고 싶지 않을 때, 생성하는 가상의 임시번호로 이를 통해 제보자의 개인정보 보호를 보다 안전하게 지키실 수 있습니다. 안심번호 사용 선택 후 연락처 입력. 안심번호 생성. 안심번호(050)로 전달. 연락이 필요한 경우 안심번호로 연결. 안심번호 사용시 제보자의 번호는 노출되지 않고 자동 변환되어 감사실로 전달됩니다."
                />
              </div>
            </div>
          </div>
          <div className="form-wrap pdt-long">
            <div className="form-title f-tit2">
              <span className="number">04</span>
              등록한 비밀번호는 <br />
              제보 진행 및 결과확인을 <br />
              하기위한 용도입니다.
            </div>
            <div className="form-area">
              <div className="form-list">
                <Input
                  id="reporterName"
                  placeholder="이름을 입력해 주세요."
                  label="이름"
                  isEssential
                />
              </div>
              <div className="form-list">
                <Input
                  id="phoneNumber"
                  placeholder="비밀번호를 입력해 주세요."
                  label="비밀번호"
                  isEssential
                  type="password"
                />
              </div>
              <div className="form-list">
                <Input
                  id="phoneNumber"
                  placeholder="비밀번호를 입력해 주세요."
                  label="비밀번호를 다시 입력해 주세요."
                  isEssential
                  type="password"
                />
              </div>
              <div className="bullet-list-wrap">
                <div className="bullet-list">
                  제보결과확인을 위한 비밀번호이며 영문, 숫자를 포함한 6~10자리
                  조합으로 사용해 주시기 바랍니다.
                </div>
                <div className="bullet-list">
                  비밀번호 찾기 기능이 제공되지 않으므로 진행 및 결과확인을 위해
                  꼭 기억하시기 바랍니다.
                </div>
              </div>
            </div>
          </div>
          <div className="form-wrap pdt-long">
            <div className="form-title f-tit2">
              <span className="number">05</span>
              개인정보취급방침을 <br />
              확인해 주세요.
            </div>
            <div className="form-area">
              <div className="form-list">
                <div className="title-area">
                  <label htmlFor="">
                    개인정보 수집 및 이용 동의
                    <span className="essential">*</span>
                  </label>
                </div>
                <div className="terms-wrap">
                  <div className="terms-list">
                    <div className="scroll-content">
                      <div className="terms">
                        <div className="terms-tit">수집하는 개인정보 항목</div>
                        <div className="terms-txt">
                          - 수집항목: 성명, 전화번호, 이메일 주소
                        </div>
                        <div className="terms-txt">
                          - 수집방법: 개인정보 항목 수집에 대한 고객 동의 후
                          고객 직접 작성을 통한 수집
                        </div>
                      </div>
                      <div className="terms">
                        <div className="terms-tit">수집 및 이용 목적</div>
                        <div className="terms-txt">
                          - 본인 확인 절차에 활용, 상담·문의 및 민원사항 확인,
                          사실조사를 위한 연락·통지, 고객에 대한 답변, 처리결과
                          통보
                        </div>
                      </div>
                      <div className="terms">
                        <div className="terms-tit">
                          개인정보 처리 및 보유 기간
                        </div>
                        <div className="terms-txt">- 보유기간: 3년</div>
                        <div className="terms-txt">
                          - 회사는 개인정보의 수집·이용 목적이 달성되거나
                          고객으로부터 동의받은 개인정보 보유·이용기간이 만료된
                          경우 고객이 회사의 개인정보 수집에 대한 동의를
                          철회하는 경우, 고객의 개인정보를 파기합니다.
                        </div>
                        <div className="terms-txt">
                          - 법령에 따른 개인정보 보유 기간 또는 정보주체로부터
                          개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간
                          내에서 개인정보를 처리· 보유합니다.
                        </div>
                        <div className="terms-txt">
                          - 단, 제1항 및 제2항에도 불구하고, 회사는 관련법령의
                          규정에 의하여 고객의 개인정보를 일정기간 보존할
                          필요성이 있는 경우에는 법령에 근거한 기간 동안 수집한
                          개인정보의 전부 또는 일부를 보유할 수 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="scroll-content">

                  </div> */}
                  <div className="radio-wrap">
                    <div className="title-area">
                      개인정보처리 방침에 따라 개인정보 수집ㆍ활용에 동의합니다.
                    </div>
                    <div className="radio-group">
                      <div className="radio">
                        <input
                          type="radio"
                          name="personalInfo"
                          id="personalInfoDisAgree"
                        />
                        <label htmlFor="personalInfoDisAgree">
                          동의하지 않음
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          name="personalInfo"
                          id="personalInfoAgree"
                        />
                        <label htmlFor="personalInfoAgree">동의</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-list">
                <div className="title-area">
                  <label htmlFor="">
                    개인정보 제3자 제공동의
                    <span className="essential">*</span>
                  </label>
                </div>
                <div className="terms-wrap">
                  <div className="terms-list">
                    <div className="scroll-content">
                      <div className="terms">
                        <div className="terms-tit">
                          회사는 고객의 개인정보를 원칙적으로 외부에 제공하지
                          않습니다. 다만, 다음 각 호의 경우는 예외로 합니다.
                        </div>
                        <div className="terms-tit">
                          가. 고객의 상담 또는 민원이 세아그룹의 다른 계열회사에
                          관한 사항인 경우, 고객에 대한 원활한 서비스 제공을
                          위하여 해당 계열회사에 고객의 개인정보를 제공할 수
                          있습니다. 이 경우 고객으로부터 미리 동의를 받을
                          것입니다.
                        </div>
                        <div className="terms-txt">
                          - 제공 받는 자 : 제보된 계열 회사
                        </div>
                        <div className="terms-txt">- 보유 및 이용기간: 3년</div>
                        <div className="terms-txt">
                          - 개인정보 항목 : 성명, 전화번호, 이메일 주소
                        </div>
                        <div className="terms-txt">
                          - 개인정보 항목 : 성명, 전화번호, 이메일 주소
                        </div>
                        <div className="terms-txt">- 보유 및 이용기간: 3년</div>
                      </div>
                      <div className="terms">
                        <div className="terms-tit">
                          나. 법령의 규정에 의거하거나, 수사 목적으로 법령에
                          정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                        </div>
                        <div className="terms-txt">
                          - 고객의 동의 없이 고객의 개인정보를 해당 수사기관
                          등에 제공할 수 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="radio-wrap">
                    <div className="title-area">
                      개인정보 제3자 제공에 동의합니다.
                    </div>
                    <div className="radio-group">
                      <div className="radio">
                        <input
                          type="radio"
                          name="personalInfo"
                          id="personalInfoDisAgree"
                        />
                        <label htmlFor="personalInfoDisAgree">
                          동의하지 않음
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          name="personalInfo"
                          id="personalInfoAgree"
                        />
                        <label htmlFor="personalInfoAgree">동의</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-btn-wrap">
            <PrimaryButton label="제출하기" />
          </div>
        </form>
      </section>
    </PageTransition>
  );
}
