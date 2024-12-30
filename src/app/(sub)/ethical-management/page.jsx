export default function ethicalManagementPage() {
  return (
    <>
      <div className="visual-area ethical">
        <h2 className="f-exBold">윤리경영제안센터 소개</h2>
        <p className="desc">
          세아는 기본과 원칙을 지키는 윤리경영을 통해 <br />
          기업의 사회적 책임을 다하고, 풍부한 가치를 창조함으로써 고객, 임직원,{" "}
          <br />
          <br />
          협력회사, 주주가 함께 성장, 발전하는데 최선을 다하고 있습니다.
        </p>
      </div>
      <div className="contents-area no-padding-bt">
        <div className="protection-wrap"></div>
        <div className="tip-off-wrap">
          <div className="left">
            <img
              src="/images/img-ethical-manage1.png"
              alt=""
            />
          </div>
          <div className="right">
            <img
              src="/images/img-ethical-manage2.png"
              alt=""
            />
          </div>
        </div>
        <div className="inquiry-contact-list">
          <img
            src="/images/img-ethical-manage3.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
