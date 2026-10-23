export default function Button({
  children,
  onClick,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded bg-blue-600 px-4 py-2 text-white"
    >
      {children}
    </button>
  );
}