"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function GuidePage() {
	const { data, isLoading, refetch } = getList(`/menus`, [
    "header",
    "menu",
  ]);

	const pathname = usePathname();
	
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

					<ul>
						<li>
							<div className="left">
								<span>01</span>
								<p className="f-title2-eb">제보대상을<br /> 입력해주세요</p>
							</div>
							<div className="right">
								<div className="form-input">
									<label htmlFor="company" className="f-body1-eb essen">대상회사</label>
									<div className="for-flex">
										<select name="company" id="company">
											<option value="1">세아홀딩스 계열</option>
											<option value="2">세아홀딩스 계열2</option>
											<option value="3">세아홀딩스 계열3</option>
										</select>
										<select name="company2" id="company2">
											<option value="1">세아제강지주 계열</option>
											<option value="2">세아제강지주 계열2</option>
											<option value="3">세아제강지주 계열3</option>
										</select>
									</div>
								</div>
								<div className="form-input">
									<label htmlFor="subject" className="f-body1-eb">제보대상</label>
									<input type="text" name="subject" id="subject" placeholder="제보대상을 입력해주세요."/>
								</div>
							</div>
						</li>
						<li>
							<div className="left">
								<span>02</span>
								<p className="f-title2-eb">제보 내용을<br /> 입력해주세요</p>
								<a href="">작성가이드 안내</a>
							</div>
							<div className="right">
								<div className="form-input">
									<label htmlFor="sort" className="f-body1-eb essen">제보구분</label>
									<select name="sort" id="sort">
										<option value="1">제보구분을 선택해 주세요.</option>
										<option value="2">구분1</option>
										<option value="3">구분2</option>
									</select>
								</div>
								<div className="form-input">
									<label htmlFor="tit" className="f-body1-eb essen">제목</label>
									<input type="text" name="tit" id="tit" placeholder="제목을 입력해주세요."/>
								</div>
								<div className="form-input">
									<label htmlFor="content" className="f-body1-eb essen">내용</label>
									<textarea name="content" id="content"></textarea>
									<p className="msg for-position f-desc-b">작성가이드 안내 참고하여 작성해주세요.</p>
								</div>

								<div className="form-wrap">
									<p className="f-body1-eb">문제를 알게된 경로</p>
									<div className="for-flex">
										<div className="form-radio">
											<input type="radio" id="happenedMe" name="prob-path" checked/>
											<label htmlFor="happenedMe">내게 일어난 일이라서</label> 
										</div>
										<div className="form-radio">
											<input type="radio" id="heard-someone" name="prob-path" />
											<label htmlFor="heard-someone">외부인에게 들었음</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="heard-myself" name="prob-path" />
											<label htmlFor="heard-myself">내가 직접 보거나 들은 일이라서</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="heard-rumor" name="prob-path" />
											<label htmlFor="heard-rumor">소문으로 들었음</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="heard-cowork" name="prob-path" />
											<label htmlFor="heard-cowork">직장 동료에게 들었음</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="accident-docu" name="prob-path" />
											<label htmlFor="accident-docu">우연히 문서/파일을 보다가 알게 되었음</label>
										</div>
									</div>
								</div>

								<div className="form-wrap">
									<p className="f-body1-eb">문제의 지속 기간</p>
									<div className="for-flex">
										<div className="form-radio">
											<input type="radio" id="once" name="prob-duration" checked />
											<label htmlFor="once">한번</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="week" name="prob-duration" />
											<label htmlFor="week">일주일</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="month1" name="prob-duration" />
											<label htmlFor="month1">1개월 이상 3개월 미만</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="month3" name="prob-duration" />
											<label htmlFor="month3">3개월 이상 1년 미만</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="year1" name="prob-duration" />
											<label htmlFor="year1">1년 이상 3년 미만</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="year3" name="prob-duration" />
											<label htmlFor="year3">3년 이상</label>
										</div>
									</div>
								</div>

								<div className="form-wrap">
									<p className="f-body1-eb">대상회사와 관계</p>
									<div className="for-flex">
										<div className="form-radio">
											<input type="radio" id="com-emp" name="prob-relation" checked />
											<label htmlFor="com-emp">회사 임직원</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="group-emp" name="prob-relation" />
											<label htmlFor="group-emp">그룹 임직원</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="cooperate-com" name="prob-relation" />
											<label htmlFor="cooperate-com">협력사</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="client" name="prob-relation" />
											<label htmlFor="client">고객</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="outside" name="prob-relation" />
											<label htmlFor="outside">외부 관계자</label>
										</div>
										<div className="form-radio">
											<input type="radio" id="secret" name="prob-relation" />
											<label htmlFor="secret">밝히고 싶지 않음</label>
										</div>
									</div>
								</div>
								
								<div className="form-input">
									<label htmlFor="prob-person" className="f-body1-eb">제보와 관련된 문제를 잘 아는 사람과 알 것으로<br /> 예상되는 사람을 적어주세요.</label>
									<p className="msg f-desc-b">예시. xx팀 xxx 과장에게 확인 문의, 00년 0월 0일 xx팀 법인카드 내역 확인 등</p>
									<input type="text" name="prob-person" id="prob-person" placeholder="내용을 입력해 주세요."/>
								</div>

								<div className="form-input">
									<label htmlFor="prob-how" className="f-body1-eb">문제를 확인/조사하기 위해 가장 좋은 방법으로<br /> 생각되는 것을 적어주세요.</label>
									<input type="text" name="prob-how" id="prob-how" placeholder="내용을 입력해 주세요."/>
								</div>
								
								<div className="form-file">
									<p className="f-body1-eb">첨부파일</p>
									<div className="for-flex">
										<input type="text" disabled />
										<label htmlFor="file" className="f-body1-eb">파일첨부</label>
										<input type="file" />
									</div>
									<div className="file-list">
										<p>
											<span>첨부파일.txt</span>
											<button className="del"></button>
										</p>
										<p>
											<span>첨부파일.txt</span>
											<button className="del"></button>
										</p>
										<p>
											<span>첨부파일.txt</span>
											<button className="del"></button>
										</p>
									</div>
									<div className="msg">
										<p>최대 5개까지 등록 가능합니다.</p>
										<p>파일의 크기가 00MB를 초과 시 업로드 되지않습니다.</p>
									</div>
								</div>

							</div>
						</li>


					</ul>


				</div>
			</div>

		</div>
	)
}