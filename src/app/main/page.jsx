"use client";

import { useSelector } from "react-redux";
import PageTransition from "../_components/layout/PageTransition";
import { Children, useState } from "react";
import { useForm } from "react-hook-form";

export default function MainPage() {
  return (
    <PageTransition>
      <div>
        234i234782348237949
        <Input
          id="myTit"
          isNoTitle={false}
          isEssential={true}
          label="제목"
          placeholder="제목을 입력해 주세요."
          value={setInputTitValue}
        />
        <Input
          id="myNumber"
          isNoTitle={false}
          isEssential={true}
          isVertical={true}
          label="번호"
          placeholder="번호를 입력해 주세요."
          value={setInputNumValue}
        />
        <Textarea
          id="content"
          isNoTitle={false}
          isEssential={true}
          label="내용"
          placeholder="내용을 입력해 주세요."
          value={setTextareaValue}
          textareaValue={textareaValue}
        />
        <div className="form-flexbox">
          <SelectBox
            id="company"
            isEssential={true}
            label="대상회사"
            option={OPTIONS0}
          />
          <SelectBox
            id="company1"
            isNoTitle={true}
            isEssential={true}
            option={OPTIONS1}
          />
        </div>
        <button onClick={onClick}>제출하기</button>
      </div>
    </PageTransition>
  );
}
