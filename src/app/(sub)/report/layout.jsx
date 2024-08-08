import MenuSection from "../_component/MenuSection";

export default function Reportlayout({ children }) {
  return (
    <div>
      <MenuSection />
      <div className="section-inner">{children}</div>
    </div>
  );
}
