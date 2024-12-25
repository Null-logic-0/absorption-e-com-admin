import { getUser } from "@/_lib/data-services";
import Account from "@/Components/Account/Account";

async function UserPage() {
  const user = await getUser();
  const fullName = user?.user?.user_metadata?.fullName;
  const email = user?.user?.email;
  const avatar = user?.user?.user_metadata?.avatar;
  return (
    <>
      <Account email={email} fullName={fullName} avatar={avatar} />
    </>
  );
}

export default UserPage;
