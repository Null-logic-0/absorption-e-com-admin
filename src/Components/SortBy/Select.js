function Select({ options, value, onChange, ...props }) {
  return (
    <select
      {...props}
      value={value}
      onChange={onChange}
      className="text-[1.4rem] p-[0.8rem_1.2rem] border border-gray-100
       rounded-sm bg-gray-50 font-medium shadow-sm "
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.lablel}
        </option>
      ))}
    </select>
  );
}

export default Select;
