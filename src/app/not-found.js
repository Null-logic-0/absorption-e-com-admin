import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <h1 className="text-black text-6xl font-semibold">
        404 Error,page not found
      </h1>
      <p className="font-medium text-2xl text-[#4557ff]">
        Please go back home page
      </p>
      <Link
        href={"/dashboard"}
        className="border-black border px-4 py-2 flex items-center justify-center gap-2 rounded"
      >
        <span>Go Back</span>
        <FaArrowRightLong />
      </Link>
    </div>
  );
}

export default NotFound;
