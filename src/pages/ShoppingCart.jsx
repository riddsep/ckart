import styled from "styled-components";
import Button from "../ui/Button";
import ProductDetailCount from "../ui/ProductDetailCount";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import { NavLink } from "react-router-dom";
import { rupiah } from "../hooks/useCurrency";
import { discountPrice } from "../hooks/useDiscount";
import { useCart } from "../context/CartContext";

function ShoppingCart() {
  const { cartItems } = useCart();
  return (
    <Wrapper>
      <h1>Shopping Cart</h1>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <p>{rupiah(discountPrice(item.price, item.discount))}</p>
                  </div>
                </td>
                <td>
                  <ProductDetailCount productId={item} />
                </td>
                <td>
                  {rupiah(
                    discountPrice(item.price, item.discount) * item.quantity
                  )}
                </td>
                <td>
                  <span>
                    <img src="/icons/trash.svg" alt="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Summary>
          <h3>Summary</h3>
          <div>
            <Row>
              <span>Subtotal</span>
              <span>$ 254.22</span>
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
          <Button
            $variant="primary"
            $fullWidth
            as={NavLink}
            to={"/shop/checkout"}
          >
            Proceed To Checkout <img src="/icons/arrow-right.svg" alt="" />
          </Button>
        </Summary>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  margin-block-end: 50px;

  & h1 {
    margin-block: 50px;
  }

  & > div {
    display: flex;
    align-items: start;
    gap: 30px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--clr-dark-15);

  & thead {
    border-bottom: 1px solid var(--clr-dark-15);

    & th {
      padding: 20px;
      color: var(--clr-dark-50);
      font-weight: 400;
    }
    & th:first-of-type {
      text-align: left;
    }
  }

  & tbody {
    & tr {
      border-bottom: 1px solid var(--clr-dark-15);

      & td {
        padding: 20px;

        img {
          width: 100%;
          max-width: 60px;
          height: 100%;
          max-height: 60px;
          object-fit: cover;
        }

        &:first-of-type {
          display: flex;
          gap: 20px;

          & div p:first-of-type {
            font-weight: 600;
          }

          & div p:last-of-type {
            font-weight: 600;
            color: var(--clr-primary-100);
          }
        }
      }

      & td:not(:first-of-type) {
        text-align: center;
      }

      & td:nth-of-type(3) {
        font-weight: 600;
      }

      & td:last-of-type {
        img {
          width: 100%;
          max-width: 40px;
          display: block;
          margin-inline: auto;
          border: 1px solid var(--clr-dark-15);
          padding: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

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

export default ShoppingCart;
