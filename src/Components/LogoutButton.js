import { logout } from "@/_lib/actions";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function LogoutButton() {
  return (
    <form action={logout}>
      <button className="flex items-center gap-3 text-gray-600 text-lg  w-full font-medium py-3 px-6 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 rounded-sm">
        <HiArrowRightOnRectangle className="nav-icon" />
        Logout
      </button>
    </form>
  );
}

export default LogoutButton;
