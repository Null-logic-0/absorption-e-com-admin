import LogoutButton from "@/Components/LogoutButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function MainPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }
  return (
    <div>
      Dashboard
      <LogoutButton />
    </div>
  );
}

export default MainPage;
