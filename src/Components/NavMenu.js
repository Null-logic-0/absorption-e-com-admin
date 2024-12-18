import { RxDashboard } from "react-icons/rx";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import NavLink from "./NavLink";
import LogoutButton from "./LogoutButton";

const navLinks = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <RxDashboard className="nav-icon" />,
  },
  {
    title: "Orders",
    link: "/orders",
    icon: <PiShoppingCartSimple className="nav-icon" />,
  },
  {
    title: "Products",
    link: "/products",
    icon: <BsBoxSeam className="nav-icon" />,
  },
  {
    title: "Create Admin",
    link: "/createNewAdmin",
    icon: <GrUserAdmin className="nav-icon" />,
  },
  {
    title: "Contacts",
    link: "/contacts",
    icon: <TiContacts className="nav-icon" />,
  },
];

function NavMenu() {
  return (
    <nav className="border-r  bg-[#fcfcfc] border-black ">
      <ul className="flex flex-col gap-2 h-full py-5 ">
        {navLinks.map((link) => (
          <li key={link.title}>
            <NavLink href={link.link}>
              {link.icon}
              <span>{link.title}</span>
            </NavLink>
          </li>
        ))}

        <li className="mt-auto ">
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
