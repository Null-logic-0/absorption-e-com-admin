import { logout } from "@/_lib/actions";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function LogoutButton() {
  return (
    <form action={logout}>
      <button className="flex text-[#4557ff] justify-center gap-2 text-lg  items-center bg-none border-none p-2 transition-all duration-200 hover:bg-gray-200">
        <HiArrowRightOnRectangle />
        Logout
      </button>
    </form>
  );
}

export default LogoutButton;
