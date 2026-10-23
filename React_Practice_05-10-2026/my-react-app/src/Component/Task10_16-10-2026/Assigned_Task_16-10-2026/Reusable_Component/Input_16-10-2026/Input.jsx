export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor="student-name"
        className="mb-1 block font-medium"
      >
        {label}
      </label>

      <input
        id="student-name"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border px-3 py-2"
      />
    </div>
  );
}