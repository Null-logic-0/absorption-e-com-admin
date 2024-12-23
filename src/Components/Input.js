function Input({ label, id, name, type, htmlFor, defaultValue, onChange }) {
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
        id={id}
        className="border-[#4c5663] border rounded-sm px-4 py-3 shadow-sm bg-transparent w-full"
      />
    </div>
  );
}

export default Input;
