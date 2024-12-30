"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ethicalManagementPage() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    const $kvTitle = document.querySelector(".visual-area.ethical h2");
    const $kvDesc = document.querySelector(".visual-area.ethical .desc");

    gsap.to(".visual-area.ethical", {
      scrollTrigger: {
        trigger: ".visual-area.ethical",
        start: "top top",
        end: "+=200%",
        pin: true,
        onUpdate: (self) => {
          let percentage = (self.progress * 100).toFixed(2);
          if (percentage >= 50) {
            $kvTitle.classList.add("hidden");
            $kvDesc.classList.add("active");
          } else {
            $kvTitle.classList.remove("hidden");
            $kvDesc.classList.remove("active");
          }
        },
      },
    });

    // gsap.to(".tip-off-wrap .left", {
    //   scrollTrigger: {
    //     trigger: ".tip-off-wrap .left",
    //     start: "top top",
    //     end: "bottom 41%",
    //     endTrigger: ".tip-off-wrap",
    //     pin: true,
    //   },
    // });
  });

  return (
    <>
      <div className="visual-area ethical">
        <h2 className="f-exBold">윤리경영제안센터 소개</h2>
        <p className="f-exBold desc">
          세아는 기본과 원칙을 지키는 윤리경영을 통해 <br />
          기업의 사회적 책임을 다하고, 풍부한 가치를 창조함으로써 고객, 임직원,
          <br />
          협력회사, 주주가 함께 성장, 발전하는데 최선을 다하고 있습니다.
        </p>
      </div>
      <div className="contents-area ethical">
        <div className="protection-wrap"></div>
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
