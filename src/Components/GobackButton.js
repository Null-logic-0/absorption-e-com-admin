"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";

function GobackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <button
      onClick={handleGoBack}
      className="flex items-center text-md gap-2 border border-gray-800 bg-slate-50 shadow-md rounded-md p-2"
    >
      Go Back <IoArrowBackSharp />
    </button>
  );
}

export default GobackButton;
