// https://docs.nhncloud.com/ko/Security/CAPTCHA/ko/api-guide/

import Image from "next/image";
import Captch1 from "/public/images/img-captch1.png";

const CaptchaBox = ({
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
    <div className="captch-wrap input-wrap">
      <div className="td">
        <div className="form-group">
          <div className="captch-img">
            <div className="img">
              <Image
                fill
                src={Captch1}
                alt=""
              />
            </div>
          </div>
          <button
            type="button"
            className="captch-btn"
          ></button>
          <div className="form-input">
            <input
              type={type}
              id={inputId}
              name={inputName}
              placeholder="대소문자를 구분하여 입력해주세요."
              // {...(register && register(inputName, rules))}
              {...register(inputName, rules && rules)}
            />
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
      </div>
    </div>
  );
};

export default CaptchaBox;
