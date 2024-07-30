import NewInput from "./_components/NewInput";

export default function AboutPage() {
	return (
		<div>
			<h1>지슬</h1>
			<NewInput isLabel={true} label={"짜잔"} isEss={true} placeholder={"작성"}/>
			<NewInput isLabel={true} label={"짜자잔"} isEss={false} placeholder={"쓰세요"}/>
		</div>
	)
}