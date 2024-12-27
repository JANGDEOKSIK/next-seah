"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import PageTransition from "../_components/layout/PageTransition";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function MainPage() {
  return (
    <PageTransition>
      <div className="wrap main">
        <div className="visual-area">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            speed={2500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            slidesPerView={1}
            fadeEffect={{
              crossFade: true
            }}
          >
            <SwiperSlide>
              <img src="/images/img-main-kv1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img-main-kv2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/img-main-kv3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="kv-conts">
            <img src="/images/ico-logo.svg" alt="" />
            <p>
              윤리경영은 시대적 소명이며 지속성장을 위한 <br />
              필수적인 요소입니다
            </p>
            <div className="btn-wrap">
              <a href="/report/online" className="f-exBold"><span>제보하기</span></a>
              <a href="/report/result" className="f-exBold"><span>제보결과 확인</span></a>
            </div>
          </div>
          <img src="/images/ico-scroll.svg" alt="" />
        </div>
        <div className="conts-area">
          <p className="f-exBold tit">윤리경영 제안센터</p>
          <p className="desc">
            세아홀딩스 윤리경영 제안센터에서만 열람이 가능하므로 <br />
            제안자의 비밀이 절대적으로 보호됩니다
          </p>
          <div className="link-conts">
            <a href="/report/guide" className="link-item">
              <div className="link-detail">
                <p className="f-exBold link-tit">제보 가이드</p>
                <p className="link-desc">
                  제보 유형 · 제보처리절차 · 제보자보호에 <br />
                  필요한 사항을 규정하며, 이에 대해 <br />
                  안내해드립니다.
                </p>
              </div>
            </a>
            <a href="/report/letter-phone-fax" className="link-item">
              <div className="link-detail">
                <p className="f-exBold link-tit">서신·전화·Fax 이용안내</p>
                <p className="link-desc">
                  서신, 전화, Fax를 통한 제보가 <br />
                  가능합니다.
                </p>
              </div>
            </a>
            <a href="/customer-inquiry" className="link-item">
              <div className="link-detail">
                <p className="f-exBold link-tit">고객문의</p>
                <p className="link-desc">
                  고객 불편 사항(품질 및 서비스 불만)이나 <br />
                  문의사항은 해당 회사의 채널로 접수하시면 신속한 조치가 가능합니다.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
