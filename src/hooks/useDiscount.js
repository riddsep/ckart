export function discountPrice(price, discount) {
  if (price) return price - price * discount;
}
