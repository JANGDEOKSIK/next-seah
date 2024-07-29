export default function Header({ title }) {
  return (
    <>
      <div id="skipNavi">
        <a href="#wrap">본문 바로가기</a>
      </div>
      <header>{title}</header>
    </>
  );
}
