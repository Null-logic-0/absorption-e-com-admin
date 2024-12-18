import LogoutButton from "@/Components/LogoutButton";
import NavMenu from "@/Components/NavMenu";

async function MainPage() {
  return (
    <div>
      Dashboard
      <LogoutButton />
      <NavMenu />
    </div>
  );
}

export default MainPage;
