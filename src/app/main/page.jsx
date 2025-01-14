"use client";

import { useSelector } from "react-redux";
import PageTransition from "../_components/layout/PageTransition";
import { Children, useState } from "react";
import Input from "../_components/Input";
import Textarea from "../_components/Textarea";
import SelectBox from "../_components/SelectBox";
import { useForm } from "react-hook-form";

export default function MainPage() {
  const [inputTitValue, setInputTitValue] = useState(" ");
  const [inputNumValue, setInputNumValue] = useState(" ");
  const [textareaValue, setTextareaValue] = useState(" ");
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
      <div></div>
    </PageTransition>
  );
}
