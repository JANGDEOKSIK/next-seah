'use client'

import { useSelector } from "react-redux";
import PageTransition from "../_components/PageTransition"
import { useState } from "react";
import Input from "../_components/Input";
import Textarea from "../_components/Textarea";

export default function MainPage() {
  // const promise = await fetch(`${process.env.REACT_APP_BASE_URL}/dummy/menu.json`);
  // const response = await promise.json();

  // console.log(response);

  
  const [inputTitValue, setInputTitValue] = useState("");
  const [inputNumValue, setInputNumValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const onClick = () => {
    console.log(inputTitValue)
    console.log(inputNumValue)
  }

  const onTextAreaHandler = (e) => {
    setTextareaValue(e.target.value.length);
  };

  return (
    <PageTransition>
      <div>
        234i234782348237949
        <Input id="myTit" isEssential={true} label="제목" placeholder="제목을 입력해 주세요." value={setInputTitValue} />
        <Input id="myNumber" isEssential={true} isVertical={true} label="번호" placeholder="번호를 입력해 주세요." value={setInputNumValue} />
        <Textarea id="content" isNoTitle={true} isEssential={true} label="내용" placeholder="내용을 입력해 주세요." value={setTextareaValue} textareaValue={textareaValue} />
        <button onClick={onClick}>제출하기</button>
      </div>
    </PageTransition>
  );
}
