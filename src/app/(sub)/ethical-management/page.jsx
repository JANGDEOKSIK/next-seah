"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ethicalManagementPage() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    const $kvTitle = document.querySelector(".top-wrap h2");
    const $kvDesc = document.querySelector(".top-wrap .desc");

    setTimeout(() => {
      gsap.fromTo(
        $kvTitle,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      );
    }, 500);

    gsap.to(".top-wrap", {
      scrollTrigger: {
        trigger: ".top-wrap",
        start: "top top",
        end: "bottom top",
        endTrigger: "footer",
        pin: true,
        onUpdate: (self) => {
          let percentage = (self.progress * 100).toFixed(2);

          if (percentage > 0 && percentage <= 30) {
            gsap.to($kvTitle, { y: 0, opacity: 1, duration: 0.7 });
            gsap.to($kvDesc, { y: 0, opacity: 0, duration: 0.7 });
          } else if (percentage > 30 && percentage <= 60) {
            gsap.to($kvTitle, { y: -150, opacity: 0, duration: 0.7 });
            gsap.to($kvDesc, { y: "-50%", opacity: 1, duration: 0.7 });
          }
        },
      },
    });

    gsap.to(".contents-area.ethical .tip-off-wrap .left", {
      scrollTrigger: {
        trigger: ".contents-area.ethical .tip-off-wrap .left",
        start: "-130px top",
        end: "bottom 290px",
        endTrigger: ".contents-area.ethical .tip-off-wrap .right",
        pin: true,
        pinSpacing: false,
      },
    });
  });

  return (
    <>
      <div className="contents-area ethical">
        <div className="fixed-wrap">
          <div className="top-wrap">
            <h2 className="f-exBold">윤리경영제안센터 소개</h2>
            <p className="f-exBold desc">
              세아는 기본과 원칙을 지키는 윤리경영을 통해 <br />
              기업의 사회적 책임을 다하고, 풍부한 가치를 창조함으로써 고객,
              임직원,
              <br />
              협력회사, 주주가 함께 성장, 발전하는데 최선을 다하고 있습니다.
            </p>
          </div>

          <div className="protection-wrap">
            <div className="txt-box">
              <p className="f-exBold">제보자 보호</p>
              <div className="txt-list">
                <div className="txt-item">
                  <p className="tit f-exBold">Anonymous</p>
                  <p className="desc f-bold">제안은 익명으로도 가능합니다</p>
                </div>
                <div className="txt-item">
                  <p className="tit f-exBold">Secret</p>
                  <p className="desc f-bold">
                    제안자의 비밀은 절대적으로 보호됩니다.
                  </p>
                </div>
                <div className="txt-item">
                  <p className="tit f-exBold">Security</p>
                  <p className="desc f-bold">
                    제안 내용은 세아홀딩스 감사실만이 열람가능합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-box active">
              <img
                src="/images/img-annoymous-bg.jpg"
                alt=""
              />
              <img
                src="/images/img-secret-bg.jpg"
                alt=""
              />
              <img
                src="/images/img-security-bg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="tip-off-wrap">
          <div className="left">
            <img
              src="/images/img-ethical-manage5.png"
              alt=""
            />
          </div>
          <div className="right">
            <img
              src="/images/img-ethical-manage6.png"
              alt=""
            />
          </div>
        </div>

        <div className="inquiry-contact-list">
          <img
            src="/images/img-ethical-manage4.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
