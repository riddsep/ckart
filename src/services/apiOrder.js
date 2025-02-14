import supabase from "./supabase";

export async function createNewOrder(newOrder, user) {
  try {
    // update user
    await supabase
      .from("users")
      .update({
        name: newOrder.name,
        address: newOrder.address,
        province: newOrder.province,
        city: newOrder.city,
        postCode: newOrder.postCode,
      })
      .eq("id", newOrder.id)
      .select();

    // insert order
    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          userId: user.id,
          status: "pending",
          totalPrice: newOrder.totalPrice,
        },
      ])
      .select()
      .single();

    if (orderError) {
      throw orderError;
    }
  } catch (error) {
    console.log(error);
  }
}
