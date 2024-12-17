import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/dist/server/api-utils";

async function MainPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }
  return <div>Dashboard</div>;
}

export default MainPage;
