"use client";

import PageTransition from "../_components/layout/PageTransition";
import {useForm} from "react-hook-form"
import InputBox from "../_components/input/InputBox";
import SelectBox from "../_components/input/SelectBox";
import Textarea from "../_components/input/Textarea";

export default function MainPage() {

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

  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <PageTransition>
      <div>
        <div>
          <InputBox
            thTit={"제보대상"}
            // isRequired={false}
            inputId={"inputId1"}
            placeholder={"이름을 입력 해주세요."}
          />
          {/* <SelectBox selectData={selectDummy}/> */}
          <Textarea
            thTit={"제보대상"}
            isRequired={true}
            inputId={"inputId3"}
            placeholder={"내용을 입력 해주세요."}
            maxByte={4000}
          />
        </div>
        {/* <DataForm>
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
        </DataForm> */}
        <form onSubmit={onSubmit}>
          <input type="text" id="eee" {...register("eee", {required: "값을 넣어라 닝겐!"})} />
          <button type="submit">submit</button>
        </form>
        <button className="btn2" type="button">제출하기</button>
      </div>
    </PageTransition>
  );
}
