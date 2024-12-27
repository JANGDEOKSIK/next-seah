"use client";

import { useForm, FormProvider } from "react-hook-form";
import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

import OnlineInputComp from "./_components/OnlineInputComp";
import OnlineSelectComp from "./_components/OnlineSelectComp";

export default function Online() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();
  const methods = useForm();
  const onSubmitData = (data) => {
    console.log(data);
  };
  const companyOptions = [
    {
      id: "company1",
      name: "company1",
      placeholder: "대상회사를 선택해 주세요.",
      options: [
        { value: "company1", label: "세아홀딩스 계열" },
        { value: "company2", label: "세아홀딩스 계열" },
      ],
      validation: { required: "대상회사를 선택해 주세요." },
    },
    {
      id: "company2",
      name: "company2",
      placeholder: "대상회사를 선택해 주세요.",
      options: [
        { value: "company1", label: "세아제강지주 계열" },
        { value: "company2", label: "세아제강지주 계열" },
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
            className="join-form"
          >
            <div className="online-box">
              <div className="online-item">
                <div className="left">
                  <p className="num">01</p>
                  <p className="tit">
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
                  <p className="num">02</p>
                  <p className="tit">
                    제보대상을 <br />
                    입력해주세요.
                  </p>
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
                </div>
              </div>
              <div className="online-item"></div>
            </div>

            <button type="submit">회원 가입</button>
          </form>
        </FormProvider>

        {/* <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmitData)}
            className="join-form"
          >
            <OnlineInputComp
              inputId={"name"}
              label={"이름"}
              inputName={"name"}
              placeholder={"이름을 입력해 주세요."}
              validation={{
                required: "이름을 입력해 주세요.",
                pattern: {
                  value: /^[가-힣]+$/,
                  message: "이름을 한국어로 정확하게 입력해 주세요.",
                },
              }}
            />

            <OnlineInputComp
              inputId={"id"}
              label={"아이디"}
              inputName={"id"}
              placeholder={"아이디를 입력해 주세요."}
              validation={{
                required: "아이디를 입력해 주세요.",
                minLength: {
                  value: 5,
                  message: "아이디는 최소 다섯 글자부터 설정 가능합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "아이디는 최대 스무 글자까지 설정 가능합니다.",
                },
              }}
            />

            <OnlineInputComp
              inputId={"email"}
              label={"이메일"}
              isEssential={false}
              type={"email"}
              inputName={"email"}
              placeholder={"이메일을 입력해 주세요."}
              validation={{
                required: "이메일을 입력해 주세요.",
                pattern: {
                  value: "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
                  message: "정확한 이메일을 입력해 주세요.",
                },
              }}
            />

            <OnlineInputComp
              inputId={"pw"}
              label={"비밀번호"}
              type={"password"}
              inputName={"pw"}
              placeholder={"비밀번호를 입력해 주세요."}
              validation={{
                required: "비밀번호를 입력해 주세요.",
                minLength: {
                  value: "5",
                  message: "비밀번호는 최소 다섯 글자부터 설정 가능합니다.",
                },
                maxLength: {
                  value: "20",
                  message: "비밀번호는 최대 스무 글자까지 설정 가능합니다.",
                },
                pattern: {
                  value:
                    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@!%*#?&])[A-Za-zd@!%*#?&]$",
                  message:
                    "비밀번호는 최소 하나의 문자, 하나의 숫자, 하나의 특수문자가 들어가야 합니다.",
                },
              }}
            />
            <button type="submit">회원 가입</button>
          </form>
        </FormProvider> */}
      </div>
    </>
  );
}
