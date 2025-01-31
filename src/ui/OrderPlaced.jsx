import Button from "./Button";

function OrderPlaced() {
  return (
    <div>
      <img src="/images/tick-circle.svg" alt="" />
      <h1>Order Placed</h1>
      <p>
        We are pleased to inform you that your order has been successfully
        placed. Thank you for choosing us!
      </p>
      <div>
        <Button>View Orders</Button>
        <Button>Back to Home</Button>
      </div>
    </div>
  );
}

export default OrderPlaced;
