function Input({ label, id, name, type, htmlFor }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border-[#4c5663] border  rounded-sm px-4 py-3 shadow-sm bg-transparent"
      />
    </div>
  );
}

export default Input;
