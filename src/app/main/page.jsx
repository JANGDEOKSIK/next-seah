"use client";

import { useSelector } from "react-redux";
import PageTransition from "../_components/layout/PageTransition";
import { Children, useState } from "react";
import DataForm from "@/app/_components/DataForm";
import Row from "@/app/_components/Row";
import { Input2, Select2, TextArea2 } from "@/app/_components/Input2";
import Input from "../_components/Input";
import Textarea from "../_components/Textarea";
import SelectBox from "../_components/SelectBox";
import { useForm } from "react-hook-form";

export default function MainPage() {
  const [inputTitValue, setInputTitValue] = useState("");
  const [inputNumValue, setInputNumValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const OPTIONS0 = [
    { value: "세아홀딩스 계열", name: "세아홀딩스 계열" },
    { value: "세아홀딩스 계열1", name: "세아홀딩스 계열1" },
    { value: "세아홀딩스 계열2", name: "세아홀딩스 계열2" },
  ];

  const OPTIONS1 = [
    { value: "세아제강지주 계열", name: "세아제강지주 계열" },
    { value: "세아제강지주 계열1", name: "세아제강지주 계열1" },
    { value: "세아제강지주 계열2", name: "세아제강지주 계열2" },
  ];

  const onClick = () => {
    console.log(inputTitValue);
    console.log(inputNumValue);
  };

  const onTextAreaHandler = (e) => {
    setTextareaValue(e.target.value.length);
  };

  // 😇은지 작업중😇
  // Dummy
  const selectDummy = [
    {
      optionIdx: 1,
      tit: "구은지",
      option: ["삼겹살", "김치", "초코렛"],
    },
    {
      optionIdx: 2,
      tit: "나르",
      option: ["츄르", "사료", "마띠마띠"],
    },
    {
      optionIdx: 3,
      tit: "토똥이",
      option: ["티모시", "딸기", "영양제"],
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // 😇은지 작업중😇
  const test = (e) => {};

  return (
    <PageTransition>
      <div>
        234i234782348237949
        <Input
          id="myTit"
          isEssential={true}
          label="제목"
          placeholder="제목을 입력해 주세요."
          value={setInputTitValue}
        />
        <Input
          id="myNumber"
          isEssential={true}
          isVertical={true}
          label="번호"
          placeholder="번호를 입력해 주세요."
          value={setInputNumValue}
        />
        <Textarea
          id="content"
          isNoTitle={true}
          isEssential={true}
          label="내용"
          placeholder="내용을 입력해 주세요."
          value={setTextareaValue}
          textareaValue={textareaValue}
        />
        <SelectBox
          id="company"
          isEssential={true}
          label="대상회사"
          option0={OPTIONS0}
          option1={OPTIONS1}
        />
        <button onClick={onClick}>제출하기</button>
        <hr style={{ marginTop: 30, marginBottom: 30 }} />
        {/* 😇은지 작업중😇 */}
        <DataForm>
          <Row
            thTit={"대상회사"}
            isRequired={true}
          >
            <div className="form-group">
              <Select2 selectData={selectDummy} />
              <Select2 selectData={selectDummy} />
            </div>
          </Row>
          <Row
            thTit={"제보대상"}
            isRequired={false}
            inputId={"input1"}
          >
            <div className="form-group">
              <Input2 placeholder={"이름을 입력 해주세요."} />
            </div>
          </Row>
          <Row
            thTit={"내용"}
            isRequired={true}
          >
            <TextArea2
              placeholder={"내용을 입력 해주세요."}
              maxByte={4000}
            />
          </Row>
        </DataForm>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="eee"
            {...register("eee", { required: "값을 넣어라 닝겐!" })}
          />
          <button type="submit">submit</button>
        </form>
        <button
          className="btn2"
          type="button"
        >
          제출하기
        </button>
        {/* 😇은지 작업중😇 */}
      </div>
    </PageTransition>
  );
}
