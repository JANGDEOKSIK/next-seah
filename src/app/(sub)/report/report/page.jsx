"use client";

import PageMenu from "@/app/(sub)/report/_components/PageMenu";
import Image from "next/image";
import ImgReportTitBg from "/public/images/img-report-tit-bg.jpg";
import { useForm } from "react-hook-form";
import InputBox from "@/app/_components/input/InputBox";
import SelectBox from "@/app/_components/input/SelectBox";
import Textarea from "@/app/_components/input/Textarea";
import RadioBox from "@/app/_components/input/RadioBox";

export default function GuidePage() {
  const {
    register,
    handleSubmit,
    control,
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
    console.log("sdfdf");
  };

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
            <p className="page-tit f-tit1">온라인 제보</p>
            <PageMenu />
          </div>
        </div>
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
                      <div>
                        <InputBox
                          thTit="제보대상"
                          inputId="inputIdA2"
                          placeholder="대상을 입력해 주세요."
                          {...register("inputIdA2", {})}
                        />
                      </div>
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
                        placeholder="제목을 입력해 주세요."
                        errors={errors.inputIdB2}
                        {...register("inputIdB2", {
                          required: "* 제목을 입력해 주세요.",
                        })}
                      />
                      <Textarea
                        thTit="내용"
                        info="작성가이드 안내 참고하여 작성해주세요."
                        isRequired={true}
                        inputId="inputIdB3"
                        placeholder="내용을 입력해 주세요."
                        maxByte={4000}
                        errors={errors.inputIdB3}
                        {...register("inputIdB3", {
                          required: "* 내용을 입력해 주세요.",
                        })}
                      />
                      <RadioBox
                        thTit="문제를 알게된 경로"
                        isRequired={false}
                        inputId="inputIdB4"
                        inputName="inputIdB4"
                        errors={errors.inputIdB4}
                        {...register("inputIdB4", {})}
                      />
                    </div>
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
      </div>
    </>
  );
}
