import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)");
  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return data;
}

export async function getProductsById(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)")
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
    .select("*, categories(name)")
    .eq("categoryId", categoryId);

  if (error) throw new Error("Product could not be loaded");

  return data;
}

export async function updateProductStock(productId, newStock) {
  const { error } = await supabase
    .from("products")
    .update({ stock: newStock })
    .eq("id", productId);

  if (error) throw new Error("Stock could not be updated");
}
