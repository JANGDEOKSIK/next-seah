"use client";

import PageTransition from "../_components/layout/PageTransition";
import {useForm} from "react-hook-form"
import InputBox from "../_components/input/InputBox";
import SelectBox from "../_components/input/SelectBox";
import Textarea from "../_components/input/Textarea";

export default function MainPage() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  // Dummy
  const selectDummy = [
    {
      optionIdx : 1,
      tit: "구은지",
      option: ["삼겹살", "김치", "초코렛"]
    },
    {
      optionIdx : 2,
      tit: "나르",
      option: ["츄르", "사료", "마띠마띠"]
    },
    {
      optionIdx : 3,
      tit: "토똥이",
      option: ["티모시", "딸기", "영양제"]
    },
  ]

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <PageTransition>
      <div className="inner">
        <div>
          <div>
            제보하고 싶은 내용을 올려주시면<br/>
            빠른 시일내에 답변해 드리겠습니다.
          </div>
          <div>
            비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의 의사에 반하여 공개되지 않도록 철저하게 비밀을 유지합니다.<br/>
            제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로 회신하여 드립니다.
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="column-layout-wrap">
            <div className="column-layout">
              <div className="left">
                <div className="cont-tit">
                  <p className="num">01</p>
                  <p className="tit">제보대상을<br/>입력해주세요.</p>
                </div>
              </div>
              <div className="right">
                <div className="form-wrap">
                  <SelectBox
                    thTit={"대상회사"}
                    isRequired={true}
                    inputId={"inputId1-1"}
                    selectData={selectDummy}
                  />
                  <InputBox
                      thTit={"제목"}
                      isRequired={true}
                      inputId={"inputId1-2"}
                      placeholder={"제목을 입력 해주세요."}
                    />
                </div>
              </div>
              {/* <form onSubmit={onSubmit}>
                <input type="text" id="eee" {...register("eee", {required: "값을 넣어라 닝겐!"})} />
                <button type="submit">submit</button>
              </form>
              <button className="btn2" type="button">제출하기</button> */}
            </div>
            <div className="column-layout">
              <div className="left">
                <div className="cont-tit">
                  <p className="num">02</p>
                  <p className="tit">제보 내용을<br/>작성해 주세요.</p>
                </div>
              </div>
              <div className="right">
                <div className="form-wrap">
                  <SelectBox
                    thTit={"제보구분"}
                    isRequired={true}
                    inputId={"inputId2-1"}
                    selectData={selectDummy}
                  />
                  <div className="form-group">
                    <InputBox
                      thTit={"제목"}
                      isRequired={true}
                      inputId={"inputId2-2-1"}
                      placeholder={"제목을 입력 해주세요."}
                    />
                    <InputBox
                      inputId={"inputId2-2-2"}
                      placeholder={"제목을 입력 해주세요."}
                    />
                  </div>
                  <Textarea
                    thTit={"내용"}
                    info={"작성가이드 안내 참고하여 작성해주세요."}
                    isRequired={true}
                    inputId={"inputId2-3"}
                    placeholder={"내용을 입력 해주세요."}
                    maxByte={4000}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <button type="submit" className="common-btn">제출하기</button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
}
