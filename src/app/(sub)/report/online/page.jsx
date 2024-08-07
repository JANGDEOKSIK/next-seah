"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/app/_components/Input";
import SelectBox from "@/app/_components/SelectBox";
import TextArea from "@/app/_components/TextArea";
import Radio from "@/app/_components/Radio";
import File from "@/app/_components/File";
import Tab from "@/app/_components/Tab";

export default function GuidePage() {
	const { data, isLoading, refetch } = getList(`/menus`, [
    "header",
    "menu",
  ]);

	const pathname = usePathname();

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


	// 대상회사 옵션 정보
	const optionV = [
    { value: "세아홀딩스 계열", name: "세아홀딩스 계열" },
    { value: "세아홀딩스 계열1", name: "세아홀딩스 계열1" },
    { value: "세아홀딩스 계열2", name: "세아홀딩스 계열2" },
  ];
	const optionV2 = [
    { value: "세아제강지주 계열", name: "세아제강지주 계열" },
    { value: "세아제강지주 계열1", name: "세아제강지주 계열1" },
    { value: "세아제강지주 계열2", name: "세아제강지주 계열2" },
  ];

	// 제보구분 옵션 정보
	const optionV3 = [
    { value: "1", name: "제보구분을 선택해 주세요." },
    { value: "구분2", name: "구분2" },
    { value: "구분3", name: "구분3" },
  ];
	
	// 라디오 버튼
	const [selectedRadio, setSelectedRadio] = useState(""); 

  const handleRadioChange = (event) => {
		console.log("event.target.value: ", event.target.id);
    setSelectedRadio(event.target.id);
  };


	return (
		<div id="wrap">
			<div className="sub-vis" style={{background: "url(/images/sub-vis1.jpg) no-repeat", backgroundSize: "cover"}}>
				<p className="sub-tit f-s-title1">온라인 제보</p>
				<div className="lnb">
					{ data
						?.filter(item => item.menuId === "ReportPage")
						.flatMap(item => item.subMenu)
						.map((subItem) => (
							<a href={`/report${subItem.url}`} key={subItem.menuSeq} className={pathname.includes(subItem.url) ? "on" : ""}>
								{subItem.menuNm}
							</a>
						))
					}
				</div>
			</div>

			<div className="sub-wrap inner">
				<div className="online">	
					<p className="top-copy f-title1-eb">제보하고 싶은 내용을 올려주시면<br />빠른 시일내에 답변해 드리겠습니다.</p>

					<div className="gray-box">
						<p>비공개로 접수/처리되며, 제보자의 신원 및 제보내용은 본인의 의사에 반하여 공개되지 않도록 철저하게 비밀을 유지합니다.<br />제보는 최대한 빠른 시일내에 처리되며, 결과는 원하는 방법으로 회신하여 드립니다.</p>
					</div>

					<form onSubmit={handleSubmit(onSubmit)}>
						<ul>
							<li>
								<div className="left">
									<span>01</span>
									<p className="f-title2-eb">제보대상을<br /> 입력해주세요</p>
								</div>
								<div className="right">
									<div className="for-flex">
										<SelectBox
											label={true}
											labelTxt= "대상회사"
											name="company"
											id="company"
											essen={true}
											options={optionV}
										/>
										<SelectBox
											label={false}
											name="company2"
											id="company2"
											options={optionV2}
										/>
									</div>
									<Input
										type="text"
										label="제보대상"
										name="subject"
										id="subject"
										placeholder="제보대상을 입력하세요."
										hasMsg={false}
										essen={false}
									/>
								</div>
							</li>
							<li>
								<div className="left">
									<span>02</span>
									<p className="f-title2-eb">제보 내용을<br /> 입력해주세요</p>
									<a href="">작성가이드 안내</a>
								</div>
								<div className="right">
									<SelectBox
										label={true}
										labelTxt= "제보구분"
										name="sort"
										id="sort"
										essen={true}
										options={optionV3}
									/>
									<Input
										type="text"
										label="제목"
										name="tit"
										id="tit"
										placeholder="제목을 입력하세요."
										hasMsg={false}
										essen={true}
									/>
									<TextArea 
										label="내용"
										name="con"
										id="con"
										hasMsg={true}
        						msg="작성가이드 안내 참고하여 작성해주세요."
										essen={true}
									/>

									<div className="form-wrap">
										<p className="f-body1-eb">문제를 알게된 경로</p>
										<div className="for-flex">
											<Radio
												id="happenedMe"
												name="prob-path"
												value="happenedMe"
												label="내게 일어난 일이라서"
												defaultChecked={true}
											/>
											<Radio
												id="heard-someone"
												name="prob-path"
												value="heard-someone"
												label="외부인에게 들었s음"
											/>
											<Radio
												id="heard-myself"
												name="prob-path"
												value="heard-myself"
												label="내가 직접 보거나 들은 일이라서"
											/>
											<Radio
												id="heard-rumor"
												name="prob-path"
												value="heard-rumor"
												label="소문으로 들었음"
											/>
											<Radio
												id="heard-cowork"
												name="prob-path"
												value="heard-cowork"
												label="직장 동료에게 들었음"
											/>
											<Radio
												id="accident-docu"
												name="prob-path"
												value="accident-docu"
												label="우연히 문서/파일을 보다가 알게 되었음"
											/>
										</div>
									</div>

									<div className="form-wrap">
										<p className="f-body1-eb">문제의 지속 기간</p>
										<div className="for-flex">
											<Radio
												id="once"
												name="prob-duration"
												value="once"
												label="한번"
												defaultChecked={true}
											/>
											<Radio
												id="week"
												name="prob-duration"
												value="week"
												label="일주일"
											/>
											<Radio
												id="month1"
												name="prob-duration"
												value="month1"
												label="1개월 이상 3개월 미만"
											/>
											<Radio
												id="month3"
												name="prob-duration"
												value="month3"
												label="3개월 이상 1년 미만"
											/>
											<Radio
												id="year1"
												name="prob-duration"
												value="year1"
												label="1년 이상 3년 미만"
											/>
											<Radio
												id="year3"
												name="prob-duration"
												value="year3"
												label="3년 이상"
											/>
										</div>
									</div>

									<div className="form-wrap">
										<p className="f-body1-eb">대상회사와 관계</p>
										<div className="for-flex">
											<Radio
												id="com-emp"
												name="prob-relation"
												value="com-emp"
												label="회사 임직원"
												defaultChecked={true}
											/>
											<Radio
												id="group-emp"
												name="prob-relation"
												value="group-emp"
												label="그룹 임직원"
											/>
											<Radio
												id="cooperate-com"
												name="prob-relation"
												value="cooperate-com"
												label="협력사"
											/>
											<Radio
												id="client"
												name="prob-relation"
												value="client"
												label="고객"
											/>
											<Radio
												id="outside"
												name="prob-relation"
												value="outside"
												label="외부 관계자"
											/>
											<Radio
												id="secret"
												name="prob-relation"
												value="secret"
												label="밝히고 싶지 않음"
											/>
										</div>
									</div>
									
									<Input
										type="text"
										label="제보와 관련된 문제를 잘 아는 사람과 알 것으로 예상되는 사람을 적어주세요."
										name="prob-person"
										id="prob-person"
										placeholder="내용을 입력하세요."
										hasMsg={true}
										msg="예시. xx팀 xxx 과장에게 확인 문의, 00년 0월 0일 xx팀 법인카드 내역 확인 등"
										essen={false}
									/>
									<Input
										type="text"
										label="문제를 확인/조사하기 위해 가장 좋은 방법으로 생각되는 것을 적어주세요."
										name="prob-how"
										id="prob-how"
										placeholder="내용을 입력하세요."
										hasMsg={false}
										essen={false}
									/>
									
									<File />
								</div>
							</li>

							<li>
								<div className="left">
									<span>03</span>
									<p className="f-title2-eb">제보자 정보를<br /> 입력해주세요</p>
								</div>
								<div className="right">
									<Tab 
										tabNames={['실명', '익명']} 
									/>
									<Input
										type="text"
										label="이름"
										name="name"
										id="name"
										placeholder="이름을 입력해 주세요."
										hasMsg={false}
										essen={true}
									/>
									<Input
										type="text"
										label="이메일"
										name="email"
										id="email"
										placeholder="이메일을 입력해 주세요."
										hasMsg={false}
										essen={false}
									/>
									<Input
										type="text"
										label="연락처"
										name="num"
										id="num"
										placeholder="연락처을 입력해 주세요."
										hasMsg={false}
										essen={true}
									/>
									<div className="safe-num">
										<img src="/images/safe-num-img.png" alt="" />
									</div>
								</div>
							</li>

							<li>
								<div className="left">
									<span>04</span>
									<p className="f-title2-eb">등록한 비밀번호는<br /> 제보 진행 및 결과확인을<br /> 하기위한 용도입니다.</p>
								</div>
								<div className="right">
									<Input
										type="password"
										label="비밀번호"
										name="password"
										id="password"
										placeholder="비밀번호를 입력해 주세요."
										hasMsg={false}
										essen={true}
									/>
									<Input
										type="password"
										label="비밀번호 확인"
										name="password-conf"
										id="password-conf"
										placeholder="비밀번호를 다시 입력해 주세요."
										hasMsg={false}
										essen={true}
									/>
									<div className="input-msgs f-desc-b">
										<p>제보결과확인을 위한 비밀번호이며 영문, 숫자를 포함한 6~10자리 조합으로 사용해 주시기 바랍니다.</p>
										<p>비밀번호 찾기 기능이 제공되지 않으므로 진행 및 결과확인을 위해 꼭 기억하시기 바랍니다.</p>
									</div>	
								</div>
							</li>

							<li>
								<div className="left">
									<span>05</span>
									<p className="f-title2-eb">개인정보취급방침을<br /> 확인해 주세요.</p>
								</div>
								<div className="right">
									<div className="policy">
										<p className="f-body1-eb essen">개인정보 수집 및 이용 동의</p>
										<div className="policy-area">
											<div className="scrl">
												수집하는 개인정보 항목<br/ >
												- 수집항목: 성명, 전화번호, 이메일 주소<br/ >
												- 수집방법: 개인정보 항목 수집에 대한 고객 동의 후 고객 직접 작성을 통한 수집<br/ ><br/ >
												수집 및 이용 목적<br/ >
												- 본인 확인 절차에 활용, 상담·문의 및 민원사항 확인, 사실조사를 위한 연락·통지, 고객에 대한 답변, 처리결과 통보<br/ ><br/ >
												개인정보 처리 및 보유 기간<br/ >
												- 보유기간: 3년<br/ >
												- 회사는 개인정보의 수집·이용 목적이 달성되거나 고객으로부터 동의받은 개인정보 보유·이용기간이 만료된 경우<br/ >
													고객이 회사의 개인정보 수집에 대한 동의를 철회하는 경우, 고객의 개인정보를 파기합니다.<br/ >
												- 법령에 따른 개인정보 보유 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 <br/ >
													개인정보를 처리· 보유합니다.<br/ >
												- 단, 제1항 및 제2항에도 불구하고, 회사는 관련법령의 규정에 의하여 고객의 개인정보를 일정기간 보존할 필요성이 있는 경우에는<br/ >
													법령에 근거한 기간 동안 수집한 개인정보의 전부 또는 일부를 보유할 수 있습니다.
											</div>
										</div>
										<p className="pol-msg">개인정보처리 방침에 따라 개인정보 수집ㆍ활용에 동의합니다.</p>
										<Radio
											id="no-persnal-ag"
											name="persnal-agree"
											value="no-persnal-ag"
											label="동의하지 않음"
											defaultChecked={true}
										/>
										<Radio
											id="yes-persnal-ag"
											name="persnal-agree"
											value="yes-persnal-ag"
											label="동의"
										/>
									</div>
									<div className="policy">
										<p className="f-body1-eb essen">개인정보 제3자 제공동의</p>
										<div className="policy-area">
											<div className="scrl">
												수집하는 개인정보 항목<br/ >
												- 수집항목: 성명, 전화번호, 이메일 주소<br/ >
												- 수집방법: 개인정보 항목 수집에 대한 고객 동의 후 고객 직접 작성을 통한 수집<br/ ><br/ >
												수집 및 이용 목적<br/ >
												- 본인 확인 절차에 활용, 상담·문의 및 민원사항 확인, 사실조사를 위한 연락·통지, 고객에 대한 답변, 처리결과 통보<br/ ><br/ >
												개인정보 처리 및 보유 기간<br/ >
												- 보유기간: 3년<br/ >
												- 회사는 개인정보의 수집·이용 목적이 달성되거나 고객으로부터 동의받은 개인정보 보유·이용기간이 만료된 경우<br/ >
													고객이 회사의 개인정보 수집에 대한 동의를 철회하는 경우, 고객의 개인정보를 파기합니다.<br/ >
												- 법령에 따른 개인정보 보유 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 <br/ >
													개인정보를 처리· 보유합니다.<br/ >
												- 단, 제1항 및 제2항에도 불구하고, 회사는 관련법령의 규정에 의하여 고객의 개인정보를 일정기간 보존할 필요성이 있는 경우에는<br/ >
													법령에 근거한 기간 동안 수집한 개인정보의 전부 또는 일부를 보유할 수 있습니다.
											</div>
										</div>
										<p className="pol-msg">개인정보 제3자 제공에 동의합니다.</p>
										<Radio
											id="no-third-ag"
											name="third-agree"
											value="no-third-ag"
											label="동의하지 않음"
											defaultChecked={true}
										/>
										<Radio
											id="yes-third-ag"
											name="third-agree"
											value="yes-third-ag"
											label="동의"
										/>
									</div>
									<div className="cap">
										<img src="/images/img-cap.png" alt="" />
									</div>
								</div>
							</li>

						</ul>

						<div className="btn-wrap f-body1-eb">
							<button type="submit">제출하기</button>
						</div>

					</form>
				</div>
			</div>

		</div>
	)
}