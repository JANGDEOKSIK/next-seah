"use client";

import { useSelector } from "react-redux";
import PageTransition from "../_components/layout/PageTransition";
import { useState } from "react";
import Input from "../_components/Input";
import Textarea from "../_components/Textarea";
import SelectBox from "../_components/SelectBox";

export default function MainPage() {
  // const promise = await fetch(`${process.env.REACT_APP_BASE_URL}/dummy/menu.json`);
  // const response = await promise.json();

  // console.log(response);

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
      <div>
        234i234782348237949
      </div>
    </PageTransition>
  );
}
