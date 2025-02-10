import styled from "styled-components";
import ProductDetailCount from "../../ui/ProductDetailCount";
import { MaxWidthWrapper } from "../../ui/MaxWidthWrapper";
import { rupiah } from "../../hooks/useCurrency";
import { discountPrice } from "../../hooks/useDiscount";
import { useCart } from "../../context/CartContext";
import CartSummary from "./CartSummary";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const handleIncrease = (item) => {
    increaseQuantity(item.id);
  };

  const handleDecrease = (item) => {
    decreaseQuantity(item.id);
  };

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
                  <ProductDetailCount
                    quantity={item.quantity}
                    onIncreaseQuantity={() => handleIncrease(item)}
                    onDecreaseQuantity={() => handleDecrease(item)}
                  />
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
        <CartSummary />
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

export default Cart;
