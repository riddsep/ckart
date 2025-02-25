import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useCart } from "../../context/CartContext";
import { rupiah } from "../../hooks/useCurrency";
import { useState } from "react";

function CartSummary() {
  const { subTotal, applyCode, total, shippingRate, cartItems } = useCart();
  const [code, setCode] = useState("TDR3000");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) return;
    applyCode(code);
    setCode("");
  };

  const handleClick = () => {
    navigate("/shop/checkout", { state: { cartItems } });
  };

  return (
    <Summary>
      <h3>Summary</h3>
      <div>
        <Row>
          <span>Subtotal</span>
          <span>{rupiah(subTotal())}</span>
        </Row>
        <Row>
          <span>Shipping</span>
          <span>
            {shippingRate === 0 ? "Free" : rupiah(shippingRate * subTotal())}
          </span>
        </Row>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="discount">Discount Code</label>
        <div>
          <input
            type="text"
            placeholder="Discount Code"
            id="discount"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <Button $width="134px" $variant="outline" type="submit">
            Apply
          </Button>
        </div>
      </form>
      <Row data-type="total">
        <span>Total</span>
        <span>{rupiah(total())}</span>
      </Row>
      <Button $variant="primary" $fullWidth onClick={handleClick}>
        Proceed To Checkout <img src="/icons/arrow-right.svg" alt="" />
      </Button>
    </Summary>
  );
}

const Summary = styled.div`
  width: 100%;
  max-width: 407px;
  border: 1px solid var(--clr-dark-15);
  padding: 20px;

  & h3 {
    font-size: 20px;
  }

  & > div:first-of-type {
    padding-block: 20px;
    margin-block: 20px;
    border-block: 1px solid var(--clr-dark-15);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & form {
    padding-block-end: 20px;
    margin-block-end: 20px;
    border-bottom: 1px solid var(--clr-dark-15);

    & > div {
      display: flex;
      gap: 10px;
    }

    & label {
      margin-block-end: 10px;
      display: block;
    }

    & input {
      width: 100%;
      border: 1px solid var(--clr-dark-15);
      padding: 10px 20px;
      &::placeholder {
        font-weight: 400;
      }
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  & > span:last-of-type {
    font-weight: 600;
  }

  &[data-type="total"] {
    margin-block-end: 20px;
  }
`;

export default CartSummary;
