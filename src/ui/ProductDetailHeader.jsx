import { useProduct } from "../context/ProductContext";
import { useCategory } from "../hooks/useCategory";
import { rupiah } from "../hooks/useCurrency";
import { discountPrice } from "../hooks/useDiscount";
import StarRating from "../ui/StarRating";

function ProductDetailHeader() {
  const {
    product: { name, reviews, price, discount, categoryId },
  } = useProduct();
  const category = useCategory(categoryId);

  return (
    <>
      <p>{category?.name}</p>
      <h1>{name}</h1>
      <div>
        <StarRating />
        <p>({reviews?.length} Reviews)</p>
      </div>
      <div>
        <p>{rupiah(discountPrice(price, discount))}</p>
        <p>{rupiah(price)}</p>
        <p>{discount * 100}% OFF</p>
      </div>
    </>
  );
}

export default ProductDetailHeader;
