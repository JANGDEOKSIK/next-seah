"use client";

import { useForm, FormProvider } from "react-hook-form";
import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

import OnlineInputComp from "./_components/OnlineInputComp";
import OnlineSelectComp from "./_components/OnlineSelectComp";
import OnlineRadioComp from "./_components/OnlineRadioComp";

export default function Online() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();
  const methods = useForm();
  const {
    register,
    watch,
    formState: { errors },
  } = methods;
  const content = watch("content", "");
  const onSubmitData = (data) => {
    console.log(data);
  };
  const companyOptions = [
    {
      id: "company1",
      name: "company1",
      placeholder: "대상회사를 선택해 주세요.",
      options: [
        { value: "company1-1", label: "세아홀딩스 계열" },
        { value: "company1-2", label: "세아홀딩스 계열" },
      ],
      validation: { required: "대상회사를 선택해 주세요." },
    },
    {
      id: "company2",
      name: "company2",
      placeholder: "대상회사를 선택해 주세요.",
      options: [
        { value: "company2-1", label: "세아제강지주 계열" },
        { value: "company2-2", label: "세아제강지주 계열" },
      ],
      validation: { required: "대상회사를 선택해 주세요." },
    },
  ];
  const reportOptions = [
    {
      id: "report",
      name: "report",
      placeholder: "제보구분을 선택해 주세요.",
      options: [
        { value: "report1", label: "제보구분1" },
        { value: "report2", label: "제보구분2" },
      ],
      validation: { required: "제보구분을 선택해 주세요." },
    },
  ];

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  return (
    <>
      <div className="visual-area report">
        <h2>온라인 제보</h2>
        <ul className="sub-nav">
          {data
            ?.filter((item) => item.menuId === "ReportPage")
            .map((item) =>
              item.subMenu?.map((subItem) => {
                const linkPath = `/report${subItem.url}`;
                const isTrue = pathname === linkPath;

                return (
                  <li key={subItem.menuSeq}>
                    <a
                      href={`/report${subItem.url}`}
                      className={isTrue ? "on" : ""}
                    >
                      {subItem.menuNm}
                    </a>
                  </li>
                );
              })
            )}
        </ul>
      </div>
      <div className="contents-area report-online">
        <h3 className="f-exBold">
          제보하고 싶은 내용을 올려 주시면 <br />
          빠른 시일내에 답변해 드리겠습니다.
        </h3>
        <div className="online-notice">
          <p>
            비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의 의사에
            반하여 공개되지 않도록 철저하게 비밀을 유지합니다. <br />
            제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로
            회신하여 드립니다.
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmitData)}
            className="online-apply-form"
          >
            <div className="online-box">
              <div className="online-item">
                <div className="left">
                  <p className="f-exBold num">01</p>
                  <p className="f-exBold tit">
                    제보대상을 <br />
                    입력해주세요.
                  </p>
                </div>
                <div className="right">
                  <OnlineSelectComp
                    groupLabel="대상회사"
                    selects={companyOptions}
                    isEssential={true}
                  />
                  <OnlineInputComp
                    inputId={"name"}
                    label={"제보대상"}
                    inputName={"name"}
                    placeholder={"이름을 입력해 주세요."}
                    isEssential={false}
                  />
                </div>
              </div>
              <div className="online-item">
                <div className="left">
                  <p className="f-exBold num">02</p>
                  <p className="f-exBold tit">
                    제보 내용을 <br />
                    작성해 주세요.
                  </p>
                  <a href="#">
                    <img
                      src="/images/img-online5.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="right">
                  <OnlineSelectComp
                    groupLabel="제보구분"
                    selects={reportOptions}
                    isEssential={true}
                  />
                  <OnlineInputComp
                    inputId={"title"}
                    label={"제목"}
                    inputName={"title"}
                    placeholder={"제목을 입력해 주세요."}
                    validation={{
                      required: "제목을 입력해 주세요.",
                    }}
                  />
                  <div className="box">
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "bold",
                      }}
                      htmlFor="reportConts"
                    >
                      내용<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="textarea-box">
                      <textarea
                        {...register("content", {
                          required: "내용을 입력해 주세요.",
                        })}
                        id="reportConts"
                        placeholder="내용을 입력해 주세요."
                      />
                      <p>
                        <span>{content.length}</span> / 4,000자
                      </p>
                    </div>
                    {errors.content && (
                      <p className="error-msg">{errors.content.message}</p>
                    )}
                  </div>
                  <OnlineRadioComp
                    inputId="path-0"
                    groupId="path"
                    label="문제를 알게된 경로"
                    options={[
                      { label: "내게 일어난 일이라서" },
                      { label: "내가 직접 보거나 들은 일이라서" },
                      { label: "직장 동료에게 들었음" },
                      { label: "외부인에게 들었음" },
                      { label: "소문으로 들었음" },
                      { label: "우연히 문서/파일을 보다가 알게 되었음" },
                    ]}
                    description={false}
                    descriptionNotice={false}
                  />
                  <OnlineRadioComp
                    inputId="duration-0"
                    groupId="duration"
                    label="문제의 지속 기간"
                    options={[
                      { label: "한번" },
                      { label: "일주일" },
                      { label: "1개월 이상 3개월 미만" },
                      { label: "3개월 이상 1년 미만" },
                      { label: "1년 이상 3년 미만" },
                      { label: "3년 이상" },
                    ]}
                    description={false}
                    descriptionNotice={false}
                  />
                  <OnlineRadioComp
                    inputId="relationship-0"
                    groupId="relationship"
                    label="대상회사와 관계"
                    options={[
                      { label: "회사 임직원" },
                      { label: "그룹 임직원" },
                      { label: "협력사" },
                      { label: "고객" },
                      { label: "외부 관계자" },
                      { label: "밝히고 싶지 않음" },
                    ]}
                    description={false}
                    descriptionNotice={false}
                  />
                  <OnlineInputComp
                    inputId={"solveMethod"}
                    label={
                      "문제를 확인/조사하기 위해 가장 좋은 방법으로 생각되는 것을 적어주세요."
                    }
                    inputName={"solveMethod"}
                    placeholder={"내용을 입력해 주세요."}
                    isEssential={false}
                    description={
                      "예시. xx팀 xxx 과장에게 확인 문의, 00년 0월 0일 xx팀 법인카드 내역 확인 등"
                    }
                  />
                  <p className="f-exBold file-tit">파일 업로드</p>
                  <OnlineInputComp
                    inputId="uploadFile"
                    label="파일첨부"
                    type="file"
                    inputName="uploadFile"
                    isEssential={false}
                  />
                  <img
                    src="/images/img-online1.png"
                    alt=""
                    style={{
                      marginTop: "16px",
                    }}
                  />
                </div>
              </div>
              <div className="online-item">
                <div className="left">
                  <p className="f-exBold num">03</p>
                  <p className="f-exBold tit">
                    제보자 정보를 <br />
                    입력해 주세요.
                  </p>
                </div>
                <div className="right">
                  <div className="btn-wrap">
                    <a
                      href="#"
                      className="f-exBold on"
                    >
                      실명
                    </a>
                    <a
                      href="#"
                      className="f-exBold"
                    >
                      익명
                    </a>
                  </div>
                  <OnlineInputComp
                    inputId={"realName"}
                    label={"이름"}
                    inputName={"realName"}
                    placeholder={"이름을 입력해 주세요."}
                    validation={{
                      required: "이름을 입력해 주세요.",
                    }}
                  />
                  <OnlineInputComp
                    inputId={"realNameEmail"}
                    label={"이메일"}
                    inputName={"realNameEmail"}
                    placeholder={"이메일을 입력해 주세요."}
                    isEssential={false}
                  />
                  <OnlineInputComp
                    inputId={"realNameTel"}
                    label={"연락처"}
                    inputName={"realNameTel"}
                    placeholder={"연락처를 입력해 주세요."}
                    button={true}
                    validation={{
                      required: "연락처를 입력해 주세요.",
                    }}
                  />
                  <img
                    src="/images/img-online2.png"
                    alt=""
                    style={{
                      marginTop: "16px",
                    }}
                  />
                </div>
              </div>
              <div className="online-item">
                <div className="left">
                  <p className="f-exBold num">04</p>
                  <p className="f-exBold tit">
                    등록한 비밀번호는 <br />
                    제보 진행 및 결과확인을 <br />
                    하기위한 용도입니다.
                  </p>
                </div>
                <div className="right">
                  <OnlineInputComp
                    inputId={"password"}
                    label={"비밀번호"}
                    inputName={"password"}
                    placeholder={"비밀번호를 입력해 주세요."}
                    validation={{
                      required: "비밀번호를 입력해 주세요.",
                    }}
                  />
                  <OnlineInputComp
                    inputId={"passwordChk"}
                    label={"비밀번호 확인"}
                    inputName={"passwordChk"}
                    placeholder={"비밀번호를 입력해 주세요."}
                    validation={{
                      required: "비밀번호를 입력해 주세요.",
                    }}
                  />
                  <img
                    src="/images/img-online3.png"
                    alt=""
                    style={{
                      marginTop: "16px",
                    }}
                  />
                </div>
              </div>
              <div className="online-item">
                <div className="left">
                  <p className="f-exBold num">05</p>
                  <p className="f-exBold tit">
                    개인정보취급방침을 <br />
                    확인해 주세요.
                  </p>
                </div>
                <div className="right">
                  <OnlineRadioComp
                    inputId="useAgree-0"
                    groupId="useAgree"
                    isEssential={true}
                    label="개인정보 수집 및 이용 동의"
                    options={[
                      { label: "동의하지 않음", value: "disagree" },
                      { label: "동의", value: "agree" },
                    ]}
                    description={
                      <>
                        수집하는 개인정보 항목 <br />
                        - 수집항목: 성명, 전화번호, 이메일 주소 <br />
                        - 수집방법: 개인정보 항목 수집에 대한 고객 동의 후 고객
                        직접 작성을 통한 수집 <br />
                        <br />
                        수집 및 이용 목적 <br />
                        - 본인 확인 절차에 활용, 상담·문의 및 민원사항 확인,
                        사실조사를 위한 연락·통지, 고객에 대한 답변, 처리결과
                        통보 <br />
                        <br />
                        개인정보 처리 및 보유 기간 <br />
                        - 보유기간: 3년 <br />
                        - 회사는 개인정보의 수집·이용 목적이 달성되거나
                        고객으로부터 동의받은 개인정보 보유·이용기간이 만료된
                        경우 <br />
                        고객이 회사의 개인정보 수집에 대한 동의를 철회하는 경우,
                        고객의 개인정보를 파기합니다. <br />
                        - 법령에 따른 개인정보 보유 기간 또는 정보주체로부터
                        개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간
                        내에서 개인정보를 처리· 보유합니다. <br />- 단, 제1항 및
                        제2항에도 불구하고, 회사는 관련법령의 규정에 의하여
                        고객의 개인정보를 일정기간 보존할 필요성이 있는 경우에는
                        법령에 근거한 기간 동안 수집한 개인정보의 전부 또는
                        일부를 보유할 수 있습니다.
                      </>
                    }
                    descriptionNotice={
                      "개인정보처리 방침에 따라 개인정보 수집ㆍ활용에 동의합니다."
                    }
                    validation={{ required: "선택해 주세요." }}
                  />
                  <OnlineRadioComp
                    inputId="provAgree-0"
                    groupId="provAgree"
                    isEssential={true}
                    label="개인정보 제3자 제공동의"
                    options={[
                      { label: "동의하지 않음", value: "disagree" },
                      { label: "동의", value: "agree" },
                    ]}
                    description={
                      <>
                        회사는 고객의 개인정보를 원칙적으로 외부에 제공하지
                        않습니다. 다만, 다음 각 호의 경우는 예외로 합니다.{" "}
                        <br />
                        <br />
                        가. 고객의 상담 또는 민원이 세아그룹의 다른 계열회사에
                        관한 사항인 경우, 고객에 대한 원활한 서비스 제공을
                        위하여 해당 계열회사에 고객의 개인정보를 제공할 수
                        있습니다. 이 경우 고객으로부터 미리 동의를 받을
                        것입니다. <br />
                        - 제공 받는 자 : 제보된 계열 회사 <br />
                        - 개인정보 항목 : 성명, 전화번호, 이메일 주소 <br />
                        - 보유 및 이용기간: 3년 <br />
                        <br />
                        나. 법령의 규정에 의거하거나, 수사 목적으로 법령에
                        정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                        고객의 동의 없이 고객의 개인정보를 해당 수사기관 등에
                        제공할 수 있습니다.
                      </>
                    }
                    descriptionNotice={"개인정보 제3자 제공에 동의합니다."}
                    validation={{ required: "선택해 주세요." }}
                  />
                  <img
                    src="/images/img-online4.png"
                    alt=""
                    style={{
                      marginTop: "48px",
                    }}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="report-btn"
            >
              제출하기
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
