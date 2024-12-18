import Image from "next/image";
import DefaultUser from "../../public/default-user.jpg";
import Link from "next/link";

function UserAvatar() {
  return (
    <Link className="flex items-center gap-2" href={"/user"}>
      <Image
        alt="user"
        src={DefaultUser}
        className="object-cover rounded-full"
        width={40}
        height={40}
      />
      <span className="text-md font-semibold text-white">FullName</span>
    </Link>
  );
}

export default UserAvatar;
