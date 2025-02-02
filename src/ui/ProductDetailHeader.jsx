import rupiah from "../hooks/useCurrency";
import StarRating from "../ui/StarRating";

function ProductDetailHeader({ product }) {
  return (
    <>
      <p>Furniture</p>
      <h1>{product.name}</h1>
      <div>
        <StarRating />
        <p>({product.reviews?.length} Reviews)</p>
      </div>
      <div>
        <p>{rupiah(product.price - product.price * product.discount)}</p>
        <p>{rupiah(product.price)}</p>
      </div>
    </>
  );
}

export default ProductDetailHeader;
