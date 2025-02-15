import supabase from "./supabase";

export async function createNewOrder(orderData) {
  const { user, orders, orderItems } = orderData;
  console.log(user, orders, orderItems);

  // const userData = { ...user };
  // delete userData.id;

  // // update user
  // const { error: userError } = await supabase
  //   .from("users")
  //   .update(userData)
  //   .eq("id", user.id)
  //   .select();

  // if (userError) {
  //   throw userError;
  // }

  // insert order
  const { data: newOrder, error: ordersError } = await supabase
    .from("orders")
    .insert([orders])
    .select()
    .single();

  if (ordersError) {
    throw ordersError;
  }

  const orderId = newOrder.id;

  const { error: orderItemsError } = await supabase
    .from("orderItems")
    .insert(orderItems.map((item) => ({ ...item, orderId })))
    .select();

  if (orderItemsError) {
    throw orderItemsError;
  }

  return {
    orderId,
    ...newOrder,
  };
}
