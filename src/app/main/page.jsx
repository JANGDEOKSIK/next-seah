"use client";

import { useSelector } from "react-redux";
import PageTransition from "../_components/layout/PageTransition";
import { useState } from "react";
import Input from "../_components/Input";
import Textarea from "../_components/Textarea";
import SelectBox from "../_components/SelectBox";

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
      </div>
    </PageTransition>
  );
}
