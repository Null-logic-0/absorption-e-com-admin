function Stat({ icon, title, color, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      <div
        className={`row-span-2 aspect-square rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <h5 className="self-end text-sm uppercase tracking-wide font-semibold text-gray-500">
        {title}
      </h5>

      <p className="text-2xl font-medium">{value}</p>
    </div>
  );
}

export default Stat;
