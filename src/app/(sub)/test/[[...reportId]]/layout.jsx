import MenuSection from "./_component/MenuSection";

export default function ReportLayout({ params, children }) {
  return (
    <div id="wrap">
      <MenuSection params={params} />
      <div className="section-inner">{children}</div>
    </div>
  );
}
