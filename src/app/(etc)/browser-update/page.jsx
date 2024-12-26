"use client";

import PageTransition from "@/app/_components/layout/PageTransition";

export default function BrowserUpdate() {
  const popClose = function (e) {
    e.preventDefault();

    const parentElement = e.currentTarget.closest(".pop-conts");
    parentElement.classList.add("hidden");
  };

  return (
    <PageTransition>
      <div className="etc-wrap pop-up">
        <div className="pop-conts">
          <div className="top-area">
            <p className="f-exBold">브라우저 업데이트 안내</p>
            <a href="#" className="btn-close" onClick={popClose}>닫기</a>
          </div>
          <div className="conts-area">
            <img src="/images/img-browser-update-txt.png" alt="" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
