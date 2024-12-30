import PageTransition from "@/app/_components/layout/PageTransition";

export default async function Error() {
  return (
    <PageTransition>
      <div className="etc-wrap error">
        <div className="txt-box">
          <img
            src="/images/img-error-txt.png"
            alt=""
          />
          <div className="btn-wrap">
            <a
              href="/main"
              className="f-bold"
            >
              홈으로
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
