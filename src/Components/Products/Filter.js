"use client";
import { useSearchParams, useRouter } from "next/navigation";

function Filter({ filterField, options }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    const params = new URLSearchParams(searchParams);
    params.set(filterField, value);

    if (params.get("page")) params.set("page", 1);

    router.push(`${window.location.pathname}?${params.toString()}`);
  }

  return (
    <div className="border border-gray-200 bg-gray-50 shadow-sm rounded-md p-1 flex gap-1">
      {options.map((option) => (
        <button
          onClick={() => handleClick(option.value)}
          key={option.value}
          className={`px-2 py-1 text-sm font-medium rounded-md transition-all ${
            option.value === currentFilter
              ? "bg-[#4557ff] text-white"
              : "bg-gray-50 text-gray-800 hover:bg-[#4557ff] hover:text-white"
          }`}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
