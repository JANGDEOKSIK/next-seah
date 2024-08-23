export default function PrimaryButton({
  label,
  onClick,
  onSubmit,
  isSubmit = "false",
}) {
  return (
    <button
      className="btn-primary"
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      // onSubmit={onSubmit}
    >
      {label}
    </button>
  );
}
