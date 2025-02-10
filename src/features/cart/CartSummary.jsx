import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { useCart } from "../../context/CartContext";
import { rupiah } from "../../hooks/useCurrency";
import { useState } from "react";

function CartSummary() {
  const { subTotal } = useCart();
  const [code, setCode] = useState();

  console.log(subTotal);
  const discountCode = "TDR3000";
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
          <span>Free</span>
        </Row>
      </div>

      <form>
        <label htmlFor="discount">Discount Code</label>
        <div>
          <input type="text" placeholder="Discount Code" id="discount" />

          <Button $width="134px" $variant="outline">
            Apply
          </Button>
        </div>
      </form>
      <Row data-type="total">
        <span>Total</span>
        <span>$ 254.22</span>
      </Row>
      <Button $variant="primary" $fullWidth as={NavLink} to={"/shop/checkout"}>
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
