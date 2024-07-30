"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import PageTransition from "@/app/_components/layout/PageTransition";
import Input from "@/app/_components/Input";
import Textarea from "@/app/_components/Textarea";
import SelectBox from "@/app/_components/SelectBox";

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
        <div className="sub-visual" style={{ background: `url(${process.env.PUBLIC_URL}/images/img-sub-visual-report-01.jpg) no-repeat center center/cover` }}></div>
      </div>
    </PageTransition>
  );
}
