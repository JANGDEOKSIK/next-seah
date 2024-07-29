'use client'

import { useSelector } from "react-redux";
import PageTransition from "../_components/PageTransition"
import { Children, useState } from "react";
import Input from "../_components/Input";
import DataForm from "@/app/_components/DataForm";
import Row from "@/app/_components/Row";
import { Input2, Select2, TextArea2 } from "@/app/_components/Input2";

export default function MainPage() {
  // const promise = await fetch(`${process.env.REACT_APP_BASE_URL}/dummy/menu.json`);
  // const response = await promise.json();

  // console.log(response);

  
  const [inputTitValue, setInputTitValue] = useState("");
  const [inputNumValue, setInputNumValue] = useState("");

  const onClick = () => {
    console.log(inputTitValue)
    console.log(inputNumValue)
  }

  // 😇은지 작업중😇
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
  // 😇은지 작업중😇

  return (
    <PageTransition>
      <div>
        234i234782348237949
        <Input id="myTit" isEssential={true} label="제목" placeholder="제목을 입력해 주세요." value={setInputTitValue} />
        <Input id="myNumber" isEssential={true} isVertical={true} label="번호" placeholder="번호를 입력해 주세요." value={setInputNumValue} />
        <button onClick={onClick}>제출하기</button>

        <hr style={{marginTop: 30, marginBottom: 30}}/>

        {/* 😇은지 작업중😇 */}
        <DataForm>
          <Row thTit={"대상회사"} isRequired={true}>
            <div className="form-group">
              <Select2 selectData={selectDummy} />
              <Select2 selectData={selectDummy}  />
            </div>
          </Row>
          <Row thTit={"제보대상"} isRequired={false} inputId={"input1"}>
            <div className="form-group">
              <Input2 placeholder={"이름을 입력 해주세요."} />
            </div>
          </Row>
          <Row thTit={"내용"} isRequired={true}>
            <TextArea2 placeholder={"내용을 입력 해주세요."} maxByte={4000} />
          </Row>
        </DataForm>
        <button className="btn2" type="button">제출하기</button>
        {/* 😇은지 작업중😇 */}
      </div>
    </PageTransition>
  );
}
