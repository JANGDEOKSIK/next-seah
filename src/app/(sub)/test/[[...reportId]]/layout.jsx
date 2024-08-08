import MenuSection from "./_component/MenuSection";

export default function ReportLayout({ params, children }) {
  return (
    <div>
      <MenuSection params={params} />
      <div className="section-inner">{children}</div>
    </div>
  );
}
