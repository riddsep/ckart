import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return data;
}

export async function getProductsById(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return data;
}

export async function getProductCategory(id) {
  if (!id) return;

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return data;
}

export async function getProductsByCategory(categoryId) {
  if (!categoryId) return;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("categoryId", categoryId);

  if (error) throw new Error("Product could not be loaded");

  return data;
}
