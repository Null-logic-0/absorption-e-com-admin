import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "../globals.css";

export const metadata = {
  title: "The Absorption Company / Login page",
};

export default async function AutRootLayout({ children }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
