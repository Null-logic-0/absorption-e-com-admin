import Link from "next/link";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <header className="bg-[#000000] w-ful px-6 py-3 flex justify-between items-center">
      <Link className="font-extrabold text-white text-2xl " href={"/dashboard"}>
        The Absorption Company.
      </Link>
      <UserAvatar />
    </header>
  );
}

export default Header;
