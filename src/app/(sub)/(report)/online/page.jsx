"use client";

import PageMenu from "@/app/(sub)/(report)/_components/PageMenu";
import Image from "next/image";
import ImgReportTitBg from "/public/images/img-report-tit-bg.jpg";
import { useForm } from "react-hook-form";
import InputBox from "@/app/_components/input/InputBox";
import Aattachment from "@/app/_components/input/Aattachment";
import SelectBox from "@/app/_components/input/SelectBox";
import Textarea from "@/app/_components/input/Textarea";
import RadioBox from "@/app/_components/input/RadioBox";
import PageTransition from "@/app/_components/layout/PageTransition";

export default function GuidePage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  // Dummy
  const selectDummy = [
    {
      value: "1",
      tit: "구은지",
      options: [
        {
          value: "1-1",
          tit: "삼겹살",
        },
        {
          value: "1-2",
          tit: "김치",
        },
        {
          value: "1-3",
          tit: "초코렛",
        },
      ],
    },
    {
      value: "2",
      tit: "나르",
      options: [
        {
          value: "2-1",
          tit: "츄르",
        },
        {
          value: "2-2",
          tit: "사료",
        },
        {
          value: "2-3",
          tit: "마띠마띠",
        },
      ],
    },
    {
      value: "3",
      tit: "토똥이",
      options: [
        {
          value: "3-1",
          tit: "티모시",
        },
        {
          value: "3-2",
          tit: "딸기",
        },
        {
          value: "3-3",
          tit: "영양제",
        },
      ],
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
          <p className="page-tit f-tit1">온라인 제보</p>
          <PageMenu />
        </div>
      </div>
      <PageTransition>
        <div className="cont-wrap">
          <div className="inner">
            <section className="page-info-wrap">
              <p className="info f-tit1">
                제보하고 싶은 내용을 올려주시면 <br />
                빠른 시일내에 답변해 드리겠습니다.
              </p>
              <div className="gray-box">
                <p className="mark f-desc2">
                  비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의
                  의사에 반하여 공개되지 않도록 철저하게 비밀을 유지합니다.{" "}
                  <br />
                  제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로
                  회신하여 드립니다.
                </p>
              </div>
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="column-layout-wrap">
                <div className="column-layout">
                  <div className="left">
                    <div className="cont-tit">
                      <p className="num f-bdy2-b">01</p>
                      <p className="tit f-tit2">
                        제보대상을
                        <br />
                        입력해주세요.
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-wrap">
                      <SelectBox
                        thTit="대상회사"
                        isRequired={true}
                        inputId="inputIdA1"
                        selectData={selectDummy}
                        isOption={true}
                        control={control}
                        errors={errors.inputIdA1}
                        {...register("inputIdA1", {
                          required: "* 구분을 선택해 주세요.",
                        })}
                      />
                      <InputBox
                        thTit="제보대상"
                        inputId="inputIdA2"
                        inputName="inputIdA2"
                        placeholder="대상을 입력해 주세요."
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column-layout">
                  <div className="left">
                    <div className="cont-tit">
                      <p className="num f-bdy2-b">02</p>
                      <p className="tit f-tit2">
                        제보 내용을
                        <br />
                        작성해 주세요.
                      </p>
                      <button
                        type="button"
                        className="info-btn f-bdy2-b"
                        title="팝업 열기"
                      >
                        작성가이드 안내
                      </button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-wrap">
                      <SelectBox
                        thTit="제보구분"
                        isRequired={true}
                        inputId="inputIdB1"
                        selectData={selectDummy}
                        control={control}
                        errors={errors.inputIdB1}
                        {...register("inputIdB1", {
                          required: "* 구분을 선택해 주세요.",
                        })}
                      />
                      <InputBox
                        thTit="제목"
                        isRequired={true}
                        inputId="inputIdB2"
                        inputName="inputIdB2"
                        placeholder="제목을 입력해 주세요."
                        register={register}
                        rules={{ required: "* 제목을 입력해 주세요." }}
                        errors={errors}
                      />
                      <Textarea
                        thTit="내용"
                        thInfo="작성가이드 안내 참고하여 작성해주세요."
                        isRequired={true}
                        inputId="inputIdB3"
                        inputName="inputIdB3"
                        placeholder="내용을 입력해 주세요."
                        maxByte={4000}
                        register={register}
                        rules={{ required: "* 내용을 입력해 주세요." }}
                        errors={errors}
                      />
                      <RadioBox
                        thTit="문제를 알게된 경로"
                        isRequired={false}
                        inputName="inputIdB4"
                        radioData={[
                          {
                            value: "value1",
                            tit: "내게 일어난 일이라서",
                            id: "inputIdB4a",
                          },
                          {
                            value: "value2",
                            tit: "외부인에게 들었음",
                            id: "inputIdB4b",
                          },
                          {
                            value: "value3",
                            tit: "내가 직접 보거나 들은 일이라서",
                            id: "inputIdB4c",
                          },
                          {
                            value: "value4",
                            tit: "소문으로 들었음",
                            id: "inputIdB4d",
                          },
                          {
                            value: "value5",
                            tit: "직장 동료에게 들었음",
                            id: "inputIdB4e",
                          },
                          {
                            value: "value6",
                            tit: "우연히 문서/파일을 보다가 알게 되었음",
                            id: "inputIdB4f",
                          },
                        ]}
                        register={register}
                      />
                      <RadioBox
                        thTit="문제의 지속 기간"
                        isRequired={false}
                        inputName="inputIdB5"
                        radioData={[
                          { value: "value1", tit: "한번", id: "inputIdB5a" },
                          { value: "value2", tit: "일주일", id: "inputIdB5b" },
                          {
                            value: "value3",
                            tit: "1개월 시아 3개월 미만",
                            id: "inputIdB5c",
                          },
                          {
                            value: "value4",
                            tit: "3개월 이상 1년 미만",
                            id: "inputIdB5d",
                          },
                          {
                            value: "value5",
                            tit: "1년 이상 3년 미만",
                            id: "inputIdB5e",
                          },
                          {
                            value: "value6",
                            tit: "3년 이상",
                            id: "inputIdB5f",
                          },
                        ]}
                        register={register}
                      />
                      <RadioBox
                        thTit="대상회사와 관계"
                        isRequired={false}
                        inputName="inputIdB6"
                        radioData={[
                          {
                            value: "value1",
                            tit: "회사 임직원",
                            id: "inputIdB6a",
                          },
                          {
                            value: "value2",
                            tit: "그룹 임직원",
                            id: "inputIdB6b",
                          },
                          { value: "value3", tit: "협력사", id: "inputIdB6c" },
                          { value: "value4", tit: "고객", id: "inputIdB6d" },
                          {
                            value: "value5",
                            tit: "외부 관계자",
                            id: "inputIdB6e",
                          },
                          {
                            value: "value6",
                            tit: "밝히고 싶지 않음",
                            id: "inputIdB6f",
                          },
                        ]}
                        register={register}
                      />
                      <InputBox
                        thTit="제보와 관련된 문제를 잘 아는 사람과 알 것으로 <br/>예상되는 사람을 적어주세요."
                        inputId="inputIdB7"
                        inputName="inputIdB7"
                        placeholder="내용을 입력해 주세요."
                        register={register}
                      />
                      <InputBox
                        thTit="문제를 확인/조사하기 위해 가장 좋은 방법으로 <br/>생각되는 것을 적어주세요."
                        inputId="inputIdB8"
                        inputName="inputIdB8"
                        placeholder="내용을 입력해 주세요."
                        register={register}
                      />
                      <Aattachment
                        inputId="inputIdB9"
                        errors={errors.inputIdB9}
                        {...register("inputIdB9")}
                      />
                    </div>
                  </div>
                </div>
                <div className="column-layout">
                  <div className="left">
                    <div className="cont-tit">
                      <p className="num f-bdy2-b">03</p>
                      <p className="tit f-tit2">
                        제보자 정보를 <br />
                        입력해 주세요.
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-wrap">
                      <InputBox
                        thTit="이름"
                        isRequired={true}
                        inputId="inputIdC1"
                        inputName="inputIdC1"
                        placeholder="이름을 입력해 주세요."
                        register={register}
                        rules={{ required: "* 이름을 입력해 주세요." }}
                        errors={errors}
                      />
                      <InputBox
                        thTit="이메일"
                        inputId="inputIdC2"
                        inputName="inputIdC2"
                        placeholder="이메일을 입력해 주세요."
                        register={register}
                      />
                    </div>
                  </div>
                </div>
                <div className="column-layout">
                  <div className="left">
                    <div className="cont-tit">
                      <p className="num f-bdy2-b">04</p>
                      <p className="tit f-tit2">
                        등록한 비밀번호는 <br />
                        제보 진행 및 결과확인을 <br />
                        하기위한 용도입니다.
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-wrap">
                      <InputBox
                        thTit="비밀번호"
                        isRequired={true}
                        inputId="inputIdD1"
                        inputName="inputIdD1"
                        placeholder="비밀번호를 입력해 주세요."
                        register={register}
                        rules={{ required: "* 비밀번호를 입력해 주세요." }}
                        errors={errors}
                      />
                      <div>
                        <InputBox
                          thTit="비밀번호 확인"
                          isRequired={true}
                          inputId="inputIdD2"
                          inputName="inputIdD2"
                          placeholder="비밀번호를 다시 입력해 주세요."
                          register={register}
                          rules={{
                            required: "* 비밀번호를 다시 입력해 주세요.",
                          }}
                          errors={errors}
                        />
                        <div className="dots">
                          <p className="dot f-desc2">
                            제보결과확인을 위한 비밀번호이며 영문, 숫자를 포함한
                            6~10자리 조합으로 사용해 주시기 바랍니다.
                          </p>
                          <p className="dot f-desc2">
                            비밀번호 찾기 기능이 제공되지 않으므로 진행 및
                            결과확인을 위해 꼭 기억하시기 바랍니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-layout">
                  <div className="left">
                    <div className="cont-tit">
                      <p className="num f-bdy2-b">05</p>
                      <p className="tit f-tit2">
                        개인정보취급방침을 <br />
                        확인해 주세요.
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-wrap"></div>
                  </div>
                </div>
              </div>
              <div className="btn-wrap">
                <button
                  type="submit"
                  className="secondary-btn"
                >
                  제출하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
