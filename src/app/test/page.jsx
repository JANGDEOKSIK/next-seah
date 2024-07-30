import InputComp from "./_components/InputComp";

export default function Test() {
  return (
    <>
      <InputComp
        id={"name"}
        label={"이름"}
        placeholder={"이름을 입력해 주세요."}
      />
    </>
  );
}
