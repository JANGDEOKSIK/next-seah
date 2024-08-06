import Image from "next/image";
import ContactInfo1 from "/public/images/img-contact-input-info1.png";
import ContactInfo2 from "/public/images/img-contact-input-info2.png";
import ContactInfo3 from "/public/images/img-contact-input-info3.png";

const ContactBox = ({
  thTit,
  thInfo = false,
  isRequired = false,
  type = "text",
  inputId,
  inputName,
  register,
  rules = false,
  errors = false,
}) => {
  const errorMessages =
    errors && errors[inputName] && errors[inputName].message;
  const hasError = errors && errorMessages;

  return (
    <div className="input-wrap">
      {thTit && (
        <div className="th">
          <div className="tits">
            <p className="tit">
              <label htmlFor={inputId}>{thTit}</label>
            </p>
            {isRequired && <span className="required">*</span>}
          </div>
          {thInfo && <p className="info f-desc2">{thInfo}</p>}
        </div>
      )}
      <div className="td">
        <div className="form-group">
          <div className="form-input">
            <input
              type={type}
              id={inputId}
              name={inputName}
              placeholder="연락처를 입력해 주세요."
              // {...(register && register(inputName, rules))}
              {...register(inputName, rules && rules)}
            />
          </div>
          <div className="form-check-btn">
            <input
              type="checkbox"
              id={`${inputId}Chk`}
              name={`${inputName}Chk`}
            />
            <label htmlFor={`${inputId}Chk`}>안심번호 사용</label>
          </div>
        </div>
        {hasError && (
          <small
            className="error"
            role="alert"
          >
            {errorMessages}
          </small>
        )}
        <div className="form-info">
          <div className="info-cont">
            <p className="mark f-bdy2-b">
              <span className="line f-bdy2-eb">안심번호</span>란? 본인의 실제
              번호를 알리고 싶지 않을때, 생성하는 가상의 임시번호로 이를 통해
              제보자의 개인정보 보호를 보다 안전하게 지키실 수 있습니다.
            </p>
            <ul className="list">
              <li className="item">
                <div className="img">
                  <Image
                    fill
                    src={ContactInfo1}
                    alt=""
                  />
                </div>
                <p className="txt f-desc2">
                  안심번호 사용 선택
                  <br />
                  연락처 입력 <span>010</span>-0000-0000
                </p>
              </li>
              <li className="item">
                <div className="img">
                  <Image
                    fill
                    src={ContactInfo2}
                    alt=""
                  />
                </div>
                <p className="txt f-desc2">안심번호 생성</p>
              </li>
              <li className="item">
                <div className="img">
                  <Image
                    fill
                    src={ContactInfo3}
                    alt=""
                  />
                </div>
                <p className="txt f-desc2">
                  <span>안심번호(050)</span>로 전달
                  <br />
                  연락이 필요한 경우 안심번호로 연결
                </p>
              </li>
            </ul>
          </div>
          <div className="info-cont">
            <p className="f-bdy2-b">
              안심번호 사용시 제보자의 번호는 노출되지 않고 050-XXXX-XXXX로
              자동변환되어 감사실로 전달됩니다.
            </p>
          </div>
        </div>
        <div className="dots">
          <p className="dot f-desc2">
            안심번호 특성상 감사팀에서 연락 후 제보자가 재발신 시 실제
            전화번호가 노출될 수 있으므로 주의 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
