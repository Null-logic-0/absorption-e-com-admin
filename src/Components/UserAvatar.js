import Image from "next/image";
import DefaultUser from "../../public/default-user.jpg";
import Link from "next/link";
import { getUser } from "@/_lib/data-services";

async function UserAvatar() {
  const user = await getUser();
  const fullName = user?.user?.user_metadata?.fullName;
  const avatar = user?.user?.user_metadata?.avatar;
  return (
    <Link className="flex items-center gap-2" href={"/user"}>
      <Image
        alt="user"
        src={avatar || DefaultUser}
        className="object-cover w-[40px] h-[40px] rounded-full"
        width={40}
        height={40}
      />
      <span className="text-md font-semibold text-white">
        {user ? fullName : "Guest"}
      </span>
    </Link>
  );
}

export default UserAvatar;
