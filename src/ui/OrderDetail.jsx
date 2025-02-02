import OrderItem from "../features/Order/OrderItem";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

function OrderDetail() {
  return (
    <div>
      <MaxWidthWrapper>
        <OrderItem />
      </MaxWidthWrapper>
    </div>
  );
}

export default OrderDetail;
