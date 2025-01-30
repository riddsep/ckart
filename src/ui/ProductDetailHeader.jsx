import StarRating from "../ui/StarRating";

function ProductDetailHeader() {
  return (
    <>
      <p>Furniture</p>
      <h1>Pilke Wooden Storage</h1>
      <div>
        <StarRating />
        <p>(145 Reviews)</p>
      </div>
      <div>
        <p>$ 245.52</p>
        <p>$ 22.52</p>
      </div>
    </>
  );
}

export default ProductDetailHeader;
