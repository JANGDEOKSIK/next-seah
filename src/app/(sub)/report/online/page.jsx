"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PageTransition from "@/app/_components/layout/PageTransition";
import Input from "@/app/_components/Input";
import Textarea from "@/app/_components/Textarea";
import SelectBox from "@/app/_components/SelectBox";
import TwoDepth from "../_components/TwoDepth";
import Radio from "@/app/_components/Radio";
import File from "@/app/_components/File";
import Checkbox from "@/app/_components/Checkbox";
import Agree from "../_components/Agree";
import classNames from "classnames";

export default function Guide() {
  const [reportSubject, setReportSubject] = useState(""); // 제보대상
  const [inputTitValue, setInputTitValue] = useState(""); // 제목
  const [inputNumValue, setInputNumValue] = useState(""); // 연락처
  const [textareaValue, setTextareaValue] = useState(""); // 내용
  const [expectPerson, setExpectPerson] = useState(""); // 제보와 관련된 예상되는 사람
  const [goodWay, setgoodWay] = useState(""); // 문제 조사를 위해 가장 좋은 방법
  const [name, setName] = useState(""); // 이름
  const [email, setEmail] = useState(""); // 이메일
  const [password, setPassword] = useState(""); // 비밀번호
  const [passwordConfirm, setPasswordConfirm] = useState(""); // 비밀번호 확인
  const OPTIONS0 = [
    { value: "세아홀딩스 계열", name: "세아홀딩스 계열" },
    { value: "세아홀딩스 계열1", name: "세아홀딩스 계열1" },
    { value: "세아홀딩스 계열2", name: "세아홀딩스 계열2" },
  ];
  const agreeContent = [
    {
      content: `수집하는 개인정보 항목\n수집항목: 성명, 전화번호, 이메일 주소\n수집방법: 개인정보 항목 수집에 대한 고객 동의 후 고객 직접 작성을 통한 수집\n\n수집 및 이용 목적\n본인 확인 절차에 활용, 상담·문의 및 민원사항 확인, 사실조사를 위한 연락·통지, 고객에 대한 답변, 처리결과 통보\n\n개인정보 처리 및 보유 기간\n보유기간: 3년\n회사는 개인정보의 수집·이용 목적이 달성되거나 고객으로부터 동의받은 개인정보 보유·이용기간이 만료된 경우 고객이 회사의 개인정보 수집에 대한 동의를 철회하는 경우, 고객의 개인정보를 파기합니다.\n법령에 따른 개인정보 보유 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리· 보유합니다.\n단, 제1항 및 제2항에도 불구하고, 회사는 관련법령의 규정에 의하여 고객의 개인정보를 일정기간 보존할 필요성이 있는 경우에는 법령에 근거한 기간 동안 수집한 개인정보의 전부 또는 일부를 보유할 수 있습니다.`,
      name: "agree1",
      label: "개인정보 수집 및 이용 동의",
      txt: "개인정보처리 방침에 따라 개인정보 수집ㆍ활용에 동의합니다.",
    },
    {
      content: `회사는 고객의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음 각 호의 경우는 예외로 합니다.\n\n가. 고객의 상담 또는 민원이 세아그룹의 다른 계열회사에 관한 사항인 경우, 고객에 대한 원활한 서비스 제공을 위하여 해당 계열회사에 고객의 개인정보를 제공할 수 있습니다. 이 경우 고객으로부터 미리 동의를 받을 것입니다.\n\n제공  받는 자 : 제보된 계열 회사\n개인정보 항목 : 성명, 전화번호, 이메일 주소\n보유 및 이용기간: 3년\n나. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우 고객의 동의 없이 고객의 개인정보를 해당 수사기관 등에 제공할 수 있습니다.`,
      name: "agree2",
      label: "개인정보 제3자 제공동의",
      txt: "개인정보 제3자 제공에 동의합니다.",
    },
  ];

  const onTextAreaHandler = (e) => {
    setTextareaValue(e.target.value.length);
  };

  /* tab */
  const tabs = [
    { id: "0", label: "실명" },
    { id: "1", label: "익명" },
  ];
  const [activeTab, setActiveTab] = useState("0");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId == 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log(isDisabled);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PageTransition>
      <div id="wrap">
        <div
          className="sub-visual"
          style={{
            background: `url(/images/img-sub-visual-report-01.jpg) no-repeat center center/cover`,
          }}
        >
          <h2 className="f-s-title1">온라인 제보</h2>
          <TwoDepth />
        </div>
        <div className="report-wrap">
          <div className="inner">
            <div className="tit-wrap">
              <p className="f-title1-eb">
                제보하고 싶은 내용을 올려주시면 <br />
                빠른 시일내에 답변해 드리겠습니다.
              </p>
              <div className="gray-bg-box">
                <p className="info-txt f-body2-b">
                  비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의
                  의사에 반하여 공개되지 않도록 철저하게 비밀을 유지합니다.
                  <br />
                  제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로
                  회신하여 드립니다.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="cont-inner">
                <div className="half-div">
                  <div className="tit-div">
                    <p className="red-circle f-body2-eb">01</p>
                    <p className="f-title2-eb">
                      제보대상을 <br />
                      입력해주세요.
                    </p>
                  </div>
                  <div className="input-table">
                    <SelectBox
                      id="company"
                      isEssential={true}
                      label="대상회사"
                      option={OPTIONS0}
                    />
                    <Input
                      id="reportSubject"
                      isNoTitle={false}
                      isEssential={false}
                      label="제보대상"
                      placeholder="제보대상을 입력해 주세요."
                      value={setReportSubject}
                      register={register}
                    />
                  </div>
                </div>
              </div>
              <div className="cont-inner">
                <div className="half-div">
                  <div className="tit-div">
                    <p className="red-circle f-body2-eb">02</p>
                    <p className="f-title2-eb">
                      제보내용을 <br />
                      작성해주세요.
                    </p>
                  </div>
                  <div className="input-table">
                    <SelectBox
                      id="sort"
                      isNoTitle={false}
                      isEssential={true}
                      label="제보구분"
                      option={OPTIONS0}
                    />
                    <Input
                      id="title"
                      isNoTitle={false}
                      isEssential={false}
                      label="제목"
                      placeholder="제목을 입력해주세요."
                      value={setInputTitValue}
                      register={register}
                      validation={{ required: "Title is required" }}
                      error={errors.title}
                    />
                    <Textarea
                      id="content"
                      isNoTitle={false}
                      isEssential={true}
                      label="내용"
                      placeholder="내용을 입력해 주세요."
                      value={setTextareaValue}
                      textareaValue={textareaValue}
                    />
                    <div className="form-radio-box">
                      <Radio
                        id="problemPath"
                        label="문제를 알게된 경로"
                        defaultChecked={true}
                        name="problem-path"
                        value="happen-to-me"
                      >
                        내게 일어난 일이라서
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="problem-path"
                        value="heard-outsider"
                      >
                        외부인에게 들었음
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="problem-path"
                        value="heard-myself"
                      >
                        내가 직접 보거나 들은 일이라서
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="problem-path"
                        value="rumor"
                      >
                        소문으로 들었음
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="problem-path"
                        value="heard-colleague"
                      >
                        직장 동료에게 들었음
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="problem-path"
                        value="saw-chance"
                      >
                        우연히 문서/파일을 보다가 알게 되었음
                      </Radio>
                    </div>
                    <div className="form-radio-box">
                      <Radio
                        id="problemDuration"
                        label="문제의 지속 기간"
                        defaultChecked={true}
                        name="problem-duration"
                        value="once"
                      >
                        한번
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="problem-duration"
                        value="one-week"
                      >
                        일주일
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="problem-duration"
                        value="three-month"
                      >
                        1개월 이상 3개월 미만
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="problem-duration"
                        value="one-year"
                      >
                        3개월 이상 1년 미만
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="problem-duration"
                        value="three-year"
                      >
                        1년 이상 3년 미만
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="problem-path"
                        value="more than three-year"
                      >
                        3년 이상
                      </Radio>
                    </div>
                    <div className="form-radio-box">
                      <Radio
                        id="relationshipCompany"
                        label="대상회사와 관계"
                        defaultChecked={true}
                        name="relationship-company"
                        value="company-executive"
                      >
                        회사 임직원
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="relationship-company"
                        value="group-executive"
                      >
                        그룹 임직원
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="relationship-company"
                        value="cooperative-company"
                      >
                        협력사
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="relationship-company"
                        value="customer"
                      >
                        고객
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        name="relationship-company"
                        value="outside-party"
                      >
                        외부 관계자
                      </Radio>
                      <Radio
                        isNoTitle={true}
                        defaultChecked={false}
                        name="relationship-company"
                        value="not reveal"
                      >
                        밝히고 싶지 않음
                      </Radio>
                    </div>
                    <Input
                      id="expectPerson"
                      isNoTitle={false}
                      isEssential={false}
                      label="제보와 관련된 문제를 잘 아는 사람과 알 것으로 예상되는 사람을 적어주세요."
                      ex="예시. xx팀 xxx 과장에게 확인 문의, 00년 0월 0일 xx팀 법인카드 내역 확인 등"
                      placeholder="내용을 입력해 주세요."
                      value={setExpectPerson}
                      register={register}
                    />
                    <Input
                      id="goodWay"
                      isNoTitle={false}
                      isEssential={false}
                      label="문제를 확인/조사하기 위해 가장 좋은 방법으로 생각되는 것을 적어주세요."
                      placeholder="내용을 입력해 주세요."
                      value={setInputTitValue}
                      register={register}
                    />
                    <File
                      id="uploadFile"
                      isNoTitle={false}
                      isEssential={false}
                      label="첨부파일"
                      value={setInputTitValue}
                    />
                  </div>
                </div>
              </div>
              <div className="cont-inner">
                <div className="half-div">
                  <div className="tit-div">
                    <p className="red-circle f-body2-eb">03</p>
                    <p className="f-title2-eb">
                      제보자 정보를 <br />
                      입력해 주세요.
                    </p>
                  </div>
                  <div className="input-table">
                    <div className="tab-btn">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          className={activeTab === tab.id ? "on" : ""}
                          onClick={() => handleTabClick(tab.id)}
                        >
                          <span className="f-body2-eb">{tab.label}</span>
                        </button>
                      ))}
                    </div>
                    <Input
                      id="name"
                      isNoTitle={false}
                      isEssential={true}
                      label="이름"
                      placeholder="이름을 입력해 주세요."
                      value={setName}
                      isDisabled={isDisabled}
                      register={register}
                      validation={{ required: "Name is required" }}
                      error={errors.name}
                    />
                    <Input
                      id="email"
                      isNoTitle={false}
                      isEssential={false}
                      label="이메일"
                      placeholder="이메일을 입력해 주세요."
                      value={setEmail}
                      register={register}
                    />
                    <div className="form-flexbox">
                      <Input
                        id="phoneNumber"
                        isNoTitle={false}
                        isEssential={true}
                        label="연락처"
                        placeholder="연락처를 입력해 주세요."
                        value={setInputNumValue}
                        isSafe={true}
                        register={register}
                        validation={{ required: "Phone Number is required" }}
                        error={errors.phoneNumber}
                      />
                      <div className="form-checkbox">
                        <Checkbox
                          id="safeNum"
                          isNoTitle={true}
                        >
                          안심번호 사용
                        </Checkbox>
                      </div>
                    </div>
                    <div className="safe-num-info">
                      <p className="tit f-body2-b">
                        <span className="f-body2-eb">안심번호란?</span> 본인의
                        실제 번호를 알리고 싶지 않을때, 생성하는 가상의
                        임시번호로 이를 통해 제보자의 개인정보 보호를 보다
                        안전하게 지키실 수 있습니다.
                      </p>
                      <div className="process-wrap">
                        <div className="process">
                          <p className="img">
                            <img
                              src="/images/img-safe-number-process-01.jpg"
                              alt=""
                            />
                          </p>
                          <p className="f-desc-b">
                            안심번호 사용 선택
                            <br />
                            연락처 입력 <span>010</span>-0000-0000
                          </p>
                        </div>
                        <div className="process">
                          <p className="img">
                            <img
                              src="/images/img-safe-number-process-02.jpg"
                              alt=""
                            />
                          </p>
                          <p className="f-desc-b">안심번호 생성</p>
                        </div>
                        <div className="process">
                          <p className="img">
                            <img
                              src="/images/img-safe-number-process-03.jpg"
                              alt=""
                            />
                          </p>
                          <p className="f-desc-b">
                            <span>안심번호(050)</span>로 전달
                            <br />
                            연락이 필요한 경우 안심번호로 연결
                          </p>
                        </div>
                      </div>
                      <p className="f-body2-b txt">
                        안심번호 사용시 제보자의 번호는 노출되지 않고
                        050-XXXX-XXXX로 자동변환되어 감사실로 전달됩니다.
                      </p>
                    </div>
                    <div className="form-info-txt">
                      <p className="f-desc-b">
                        안심번호 특성상 감사팀에서 연락 후 제보자가 재발신 시
                        실제 전화번호가 노출될 수 있으므로 주의 바랍니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-inner">
                <div className="half-div">
                  <div className="tit-div">
                    <p className="red-circle f-body2-eb">04</p>
                    <p className="f-title2-eb">
                      등록한 비밀번호는 <br />
                      제보 진행 및 결과확인을 <br />
                      하기위한 용도입니다.
                    </p>
                  </div>
                  <div className="input-table">
                    <Input
                      id="password"
                      isNoTitle={false}
                      isEssential={true}
                      label="비밀번호"
                      placeholder="비밀번호를 입력해 주세요."
                      value={setPassword}
                      register={register}
                      validation={{ required: "Password is required" }}
                      error={errors.password}
                    />
                    <Input
                      id="passwordConfirm"
                      isNoTitle={false}
                      isEssential={true}
                      label="비밀번호 확인"
                      placeholder="비밀번호를 다시 입력해 주세요."
                      value={setPasswordConfirm}
                      register={register}
                      validation={{ required: "Password Confirm is required" }}
                      error={errors.passwordConfirm}
                    />
                    <div className="form-info-txt">
                      <p className="f-desc-b">
                        제보결과확인을 위한 비밀번호이며 영문, 숫자를 포함한
                        6~10자리 조합으로 사용해 주시기 바랍니다.
                      </p>
                      <p className="f-desc-b">
                        비밀번호 찾기 기능이 제공되지 않으므로 진행 및
                        결과확인을 위해 꼭 기억하시기 바랍니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-inner">
                <div className="half-div">
                  <div className="tit-div">
                    <p className="red-circle f-body2-eb">05</p>
                    <p className="f-title2-eb">
                      개인정보취급방침을 <br />
                      확인해 주세요.
                    </p>
                  </div>
                  <div className="input-table">
                    {agreeContent?.map((item, idx) => {
                      return (
                        <Agree
                          isNotitle={false}
                          isEssential={true}
                          label={item.label}
                          name={item.name}
                          agreeTxt={item.txt}
                          agreeCon={item.content}
                        />
                      );
                    })}
                    <div className="captcha-wrap">
                      <div className="captcha-div">
                        <img
                          src="/images/@img-captcha.png"
                          alt=""
                        />
                      </div>
                      <button
                        type="button"
                        className="refresh"
                      ></button>
                      <Input
                        id="captha"
                        isNoTitle={true}
                        isEssential={true}
                        placeholder="대소문자를 구분하여 입력해주세요"
                        register={register}
                        validation={{ required: "captha is required" }}
                        error={errors.captha}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-wrap center submit">
                <button
                  className="color-btn orange"
                  onClick={onSubmit}
                  type="submit"
                >
                  제출하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
