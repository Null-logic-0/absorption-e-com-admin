import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "../globals.css";
import NavMenu from "@/Components/NavMenu";
import Header from "@/Components/Header";

export const metadata = {
  title: "The Absorption Company",
};

export default async function AutRootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <NavMenu />
        <main className="flex-1 p-16 pb-24">
          <div className="flex flex-col gap-8 mx-auto max-w-[120rem]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
