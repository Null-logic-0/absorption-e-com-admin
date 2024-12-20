import { supabase } from "@/utils/supabase/supabaseClient";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    return new Error("no data");
  }

  return products;
}
