import Input from "@/app/_components/input/Input";

export default function OnlineSubmitForm() {
  return (
    <form>
      <Input
        id="reportSubject"
        placeholder="제보대상을 입력해주세요"
        title="제보대상"
        isEssential
      />
    </form>
  );
}
