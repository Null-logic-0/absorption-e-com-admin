"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes("invalid credentials")) {
        errors.general = "Incorrect email or password.";
      }
    }
  } catch (error) {
    return {
      errors: { general: "An unexpected error occurred. Please try again." },
    };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/");
}

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");
  const fullname = formData.get("fullname");

  let errors = {};

  if (!fullname.trim()) {
    errors.fullname = "Full name is required.";
  }

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  if (password !== repeatPassword) {
    errors.repeatPassword = "Passwords doesn't match";
  }

  const supabase = await createClient();

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      if (error.message.includes("User already registered")) {
        return { errors: { email: "Email already exists." } };
      }

      return { errors: { general: error.message } };
    }

    const { error: profileError } = await supabase
      .from("profiles")
      .insert([{ id: data.user.id, fullname, email }]);

    if (profileError) {
      return { errors: { general: "Failed to save user profile." } };
    }
  } catch (error) {
    return { errors: { general: "Something went wrong. Please try again." } };
  }
}
