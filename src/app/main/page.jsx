import { useSelector } from "react-redux";
import PageTransition from "../_components/PageTransition"
import Input from "../_components/Input";

export default function MainPage() {
  // const promise = await fetch(`${process.env.REACT_APP_BASE_URL}/dummy/menu.json`);
  // const response = await promise.json();

  // console.log(response);
  return (
    <PageTransition>
      <div>
        234i234782348237949
        <Input id="myTit" isEssential={true} isVertical={true} label="제목" placeholder="제목을 입력해 주세요." />
        <Input id="myNumber" isEssential={true} isVertical={false} label="번호" placeholder="번호를 입력해 주세요." />
      </div>
    </PageTransition>
  )
}
