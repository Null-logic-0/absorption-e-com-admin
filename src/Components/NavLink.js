"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 text-gray-600 text-lg font-medium py-3 px-6 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 rounded-sm ${
        pathname === href ? "bg-gray-200 text-gray-900 " : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
