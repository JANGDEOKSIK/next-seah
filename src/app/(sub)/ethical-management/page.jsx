"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ethicalManagementPage() {
  const [isActive, setIsActive] = useState(false);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    gsap.to(".tip-off-wrap .left", {
      scrollTrigger: {
        trigger: ".tip-off-wrap .left",
        start: "top top",
        end: "bottom 41%",
        pin: true,
      },
    });
  });

  return (
    <>
      <div className="visual-area ethical">
        <h2 className={`f-exBold ${isActive ? "active" : ""}`}>
          윤리경영제안센터 소개
        </h2>
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
