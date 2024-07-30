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
        <div className="sub-visual" style={{ background: `url(/images/img-sub-visual-report-01.jpg) no-repeat center center/cover` }}>
          <h2 className="f-s-title1">제보 가이드</h2>
        </div>

        <div className="report-wrap">
          <div className="inner">
            <div className="tit-wrap">
              <p className="f-title1-eb">윤리경영 제안센터는 세아 임직원 외에도 고객, 주주 및 협력사 등 이해관계자 모두 이용가능한 제보 채널입니다.</p>
            </div>
            <div className="cont-inner"></div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
