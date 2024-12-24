"use client";

import { getList } from "@/app/_lib/fetch";
import { usePathname } from "next/navigation";

export default function customerInquiryPage() {
  const { data } = getList("/dummy/menu.json", ["dummy", "menu"]);
  const pathname = usePathname();

  return (
    <>
      <div className="contents-area customer-inquiry">
        <h2 className="f-exBold title">
          {
            data?.map(function (item) {
              if (item.url === pathname) {
                return item.menuNm;
              }
            })
          }
        </h2>
        <p className="f-exBold title-desc">
          고객불편 사항(품질 및 서비스 불만)이나 문의사항은 <br />
          해당 회사의 채널로 접수하시면 신속한 조치가 가능합니다.
        </p>
        <ul className="customer-inquiry-list">
          <li className="customer-inquiry-item">
            <p className="f-exBold">세아홀딩스</p>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo1.svg"
                alt="세아홀딩스"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <p className="f-exBold">세아베스틸지주</p>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo2.svg"
                alt="세아베스틸지주"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아베스틸
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo3.svg"
                alt="세아베스틸"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아창원특수강
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo4.svg"
                alt="세아창원특수강"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아특수강
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo5.svg"
                alt="세아특수강"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아메탈
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo6.svg"
                alt="세아메탈"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아항공방산소재
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo7.svg"
                alt="세아항공방산소재"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아M&S
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo8.svg"
                alt="세아M&S"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아L&S
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo9.svg"
                alt="세아L&S"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              세아네트웍스
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo10.svg"
                alt="세아네트웍스"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              씨티씨
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo11.svg"
                alt="씨티씨"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              VNTG
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo12.svg"
                alt="VNTG"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <p className="f-exBold">Irongrey</p>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo13.svg"
                alt="Irongrey"
              />
            </div>
          </li>
          <li className="customer-inquiry-item">
            <a
              href=""
              className="f-exBold"
            >
              HPP
            </a>
            <div className="img-box">
              <img
                src="/images/img-customer-inquiry-logo14.svg"
                alt="HPP"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
