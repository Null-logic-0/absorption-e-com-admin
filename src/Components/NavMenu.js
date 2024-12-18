import { RxDashboard } from "react-icons/rx";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import NavLink from "./NavLink";

function NavMenu() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink href="/dashboard">
            <RxDashboard className="nav-icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink href="/orders">
            <PiShoppingCartSimple className="nav-icon" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink href="/products">
            <BsBoxSeam className="nav-icon" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink href="/products">
            <GrUserAdmin className="nav-icon" />
            Create Admin
          </NavLink>
        </li>
        <li>
          <NavLink href="/contacts">
            <TiContacts className="nav-icon" />
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
