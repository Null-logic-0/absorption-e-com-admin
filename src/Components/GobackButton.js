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
      className="flex items-center border-gray-800 p-2 
      border-2 cursor-pointer rounded-md font-semibold
       text-gray-800 bg-transparent hover:bg-slate-100"
    >
      Go Back <IoArrowBackSharp />
    </button>
  );
}

export default GobackButton;
