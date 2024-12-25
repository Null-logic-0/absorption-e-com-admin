"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { supabase } from "@/utils/supabase/supabaseClient";
import { createOrUpdateProductInDatabase, getUser } from "./data-services";

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
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.message.includes("invalid credentials")) {
      errors.general = "Incorrect email or password.";
    }
  }
  revalidatePath("/dashboard", "layout");
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

export async function createOrUpdateProduct(prevState, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");
  const image = formData.get("image");
  const discount = formData.get("discount");
  const id = formData.get("id");

  const data = {
    id,
    title,
    description,
    price,
    image,
    discount,
  };

  let errors = {};

  if (!image || (typeof image === "string" && !image.trim())) {
    errors.image = "Image is required!";
  }
  if (!title?.trim()) errors.title = "Title is required!";
  if (!description?.trim()) errors.description = "Description is requried!";
  if (!price?.trim()) errors.price = "Price is required!";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await createOrUpdateProductInDatabase(data);
  revalidatePath("/products");
  redirect("/products");
}

export async function deleteProduct(id) {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    throw new Error("product could not be deleted");
  }

  revalidatePath("/products");
  redirect("/products");
}

export async function updateUser(prevState, formData) {
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");
  const fullname = formData.get("fullname");
  const avatar = formData.get("avatar");

  let errors = {};

  // Validation
  if (password && password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (password && password !== repeatPassword) {
    errors.repeatPassword = "Passwords don't match.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const supabase = await createClient();

  try {
    // Step 1: Update user details (password and fullname)
    const updateData = {};

    if (password) {
      updateData.password = password;
    }

    if (fullname) {
      updateData.data = { fullName: fullname };
    }

    const { data: updatedUser, error: updateError } =
      await supabase.auth.updateUser(updateData);

    if (updateError) {
      throw new Error(updateError.message);
    }

    // Step 2: Handle avatar upload if provided
    let avatarUrl = null;

    if (avatar instanceof File) {
      const fileName = `avatar-${updatedUser.user.id}-${Date.now()}`; // Unique filename

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(fileName, avatar, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      avatarUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${fileName}`;

      // Update the user's profile with the avatar URL
      const { error: avatarUpdateError } = await supabase.auth.updateUser({
        data: { avatar: avatarUrl },
      });

      if (avatarUpdateError) {
        throw new Error(avatarUpdateError.message);
      }
    }

    // Revalidate cache and redirect to user page
    revalidatePath("/user");
    redirect("/user");

    return { success: true, user: updatedUser.user, avatarUrl };
  } catch (error) {
    return { error: error.message };
  }
}

export async function deleteContact(id) {
  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) {
    throw new Error("contacts could not be deleted");
  }

  revalidatePath("/contacts");
  redirect("/contacts");
}
