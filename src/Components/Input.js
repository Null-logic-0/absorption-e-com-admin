function Input({
  label,
  id,
  name,
  type,
  htmlFor,
  defaultValue,
  onChange,
  disabled,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={htmlFor} className="font-semibold text-sm">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        name={name}
        disabled={disabled}
        id={id}
        className={`border-[#4c5663] shadow-md border rounded-md px-4 py-3 w-full ${
          disabled
            ? "bg-slate-100  cursor-not-allowed text-slate-400 "
            : "bg-transparent"
        }`}
      />
    </div>
  );
}

export default Input;
