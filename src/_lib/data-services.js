import { createClient } from "@/utils/supabase/server";
import { supabase } from "@/utils/supabase/supabaseClient";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return products;
}

export async function createProduct({
  title,
  description,
  price,
  image,
  discount = 0,
}) {
  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
  const imagePath = `https://xkzfjcxdsqejrmvbgrvh.supabase.co/storage/v1/object/public/product-images/${imageName}`;

  const { data: uploadedData, error: uploadError } = await supabase.storage
    .from("product-images")
    .upload(imageName, image);

  if (uploadError) {
    throw new Error("Failed to upload image: " + uploadError.message);
  }

  const { data, error } = await supabase
    .from("products")
    .insert([
      { title, description, price, discount: discount || 0, image: imagePath },
    ])
    .select();

  if (error) {
    throw new Error("Failed to create product: " + error.message);
  }

  return data;
}

export async function createOrUpdateProductInDatabase({
  id,
  title,
  description,
  price,
  image,
  discount = 0,
}) {
  const imageName = image
    ? `${Math.random()}-${image.name}`.replaceAll("/", "")
    : null;
  const imagePath = imageName
    ? `https://xkzfjcxdsqejrmvbgrvh.supabase.co/storage/v1/object/public/product-images/${imageName}`
    : null;

  // If there is an image, upload it
  if (image) {
    const { data: uploadedData, error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(imageName, image);

    if (uploadError) {
      throw new Error("Failed to upload image: " + uploadError.message);
    }
  }

  // If the product has an id, update it, otherwise create a new product
  let data, error;

  if (id) {
    // Update the product if id is provided
    const { data: updatedData, error: updateError } = await supabase
      .from("products")
      .update({
        title,
        description,
        price,
        discount,
        image: imagePath || null,
      })
      .eq("id", id)
      .select();

    data = updatedData;
    error = updateError;
  } else {
    // Create a new product if no id is provided
    const { data: createdData, error: createError } = await supabase
      .from("products")
      .insert([
        {
          title,
          description,
          price,
          discount: discount || 0,
          image: imagePath,
        },
      ])
      .select();

    data = createdData;
    error = createError;
  }

  if (error) {
    throw new Error(
      id
        ? "Failed to update product: " + error.message
        : "Failed to create product: " + error.message
    );
  }

  return data;
}

export async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }
  return data;
}

export async function getContacts() {
  const { data: contacts, error } = await supabase.from("contacts").select("*");

  if (error) {
    throw new Error("Contacts could not be loaded");
  }

  return contacts;
}

export async function getSingleContact(id) {
  let { data: contact, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Contact could not be loaded");
  }

  return contact;
}
