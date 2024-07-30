"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import PageTransition from "@/app/_components/layout/PageTransition";
import Input from "@/app/_components/Input";
import Textarea from "@/app/_components/Textarea";
import SelectBox from "@/app/_components/SelectBox";
import SubVisual from "@/app/_components/SubVisual";

export default function Guide() {
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

  return (
    <PageTransition>
      <div id="wrap">
        <SubVisual subTitle="제보 가이드" />
        234i234782348237949
        <Input id="myTit" isNoTitle={false} isEssential={true} label="제목" placeholder="제목을 입력해 주세요." value={setInputTitValue} />
        <Input id="myNumber" isNoTitle={false} isEssential={true} isVertical={true} label="번호" placeholder="번호를 입력해 주세요." value={setInputNumValue} />
        <Textarea id="content" isNoTitle={false} isEssential={true} label="내용" placeholder="내용을 입력해 주세요." value={setTextareaValue} textareaValue={textareaValue} />
        <div className="form-flexbox">
          <SelectBox id="company" isEssential={true} label="대상회사" option={OPTIONS0} />
          <SelectBox id="company1" isNoTitle={true} isEssential={true} option={OPTIONS1} />
        </div>
        <button onClick={onClick}>제출하기</button>
      </div>
    </PageTransition>
  );
}
