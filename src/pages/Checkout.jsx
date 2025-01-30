import styled from "styled-components";

import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import Button from "../ui/Button";

function Checkout() {
  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Main>
        <div>
          <BillingInformation>
            <h3>Billing Information</h3>

            <Form>
              <div>
                <label htmlFor="name">
                  Name{" "}
                  <input type="text" placeholder="Enter Your Name" id="name" />
                </label>
                <label htmlFor="email">
                  Email{" "}
                  <input
                    type="text"
                    placeholder="Enter Your email"
                    id="email"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="phone">
                  Phone Number{" "}
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    id="phone"
                  />
                </label>
                <label htmlFor="address-optional">
                  Optional Adrress{" "}
                  <input
                    type="text"
                    placeholder="Enter Your Optional Adrress"
                    id="address-optional"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="address">
                  Adrress{" "}
                  <input
                    type="text"
                    placeholder="Enter Your Adrress"
                    id="address"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="province">
                  Province{" "}
                  <input
                    type="text"
                    placeholder="Enter Your Province"
                    id="province"
                  />
                </label>
                <label htmlFor="city">
                  City{" "}
                  <input type="text" placeholder="Enter Your City" id="city" />
                </label>
              </div>
              <div>
                <label htmlFor="subdistrict">
                  Subdistrict{" "}
                  <input
                    type="text"
                    placeholder="Enter Your Subdistrict Code"
                    id="subdistrict"
                  />
                </label>
                <label htmlFor="postcode">
                  Postcode{" "}
                  <input
                    type="text"
                    placeholder="Enter Your Postcode"
                    id="postcode"
                  />
                </label>
              </div>
            </Form>
          </BillingInformation>
          <PaymentMethod>
            <h3>Payment Method</h3>

            <Form>
              <RadioGroup>
                <label htmlFor="cod">
                  <img src="/icons/dollar-circle.svg" alt="" />
                  <span>Cash on Delivery</span>
                  <input type="radio" name="payment" id="cod" />
                </label>

                <label htmlFor="paypal">
                  <img src="/icons/paypal.svg" alt="" />
                  <span>Paypal</span>
                  <input type="radio" name="payment" id="paypal" />
                </label>

                <label htmlFor="btc">
                  <img src="/icons/bitcoin.svg" alt="" />
                  <span>Bitcoin</span>
                  <input type="radio" name="payment" id="btc" />
                </label>

                <label htmlFor="card">
                  <img src="/icons/card-pos.svg" alt="" />
                  <span>Debid/Credit Card</span>
                  <input type="radio" name="payment" id="card" />
                </label>
              </RadioGroup>
              <div>
                <label htmlFor="nameOnCard">
                  Name on Card
                  <input type="text" placeholder="Name" id="nameOnCard" />
                </label>
                <label htmlFor="cardNumber">
                  Card Number{" "}
                  <input
                    type="text"
                    placeholder="Card Number"
                    id="cardNumber"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="expire">
                  Expire Date{" "}
                  <input type="text" placeholder="MM/YY" id="expire" />
                </label>
                <label htmlFor="cvv">
                  CVV <input type="text" placeholder="CVV" id="cvv" />
                </label>
              </div>
            </Form>
          </PaymentMethod>
        </div>
        <OrderSummary>
          <h3>Order Summary</h3>
          <div>
            <OrderProduct>
              <img src="/images/product-detail-1.png" alt="" />
              <div>
                <p>Pilke Wooden Storage</p>
                <div>
                  <span>1x</span>
                  <span>$ 254.50</span>
                </div>
              </div>
            </OrderProduct>
            <OrderProduct>
              <img src="/images/product-detail-1.png" alt="" />
              <div>
                <p>Pilke Wooden Storage</p>
                <div>
                  <span>1x</span>
                  <span>$ 254.50</span>
                </div>
              </div>
            </OrderProduct>
          </div>

          <div>
            <p>
              <span>Subtotal</span>
              <span>$ 254.50</span>
            </p>
            <p>
              <span>Shipping</span>
              <span>Free</span>
            </p>
            <p>
              <span>Discount</span>
              <span>10%</span>
            </p>
            <p>
              <span>Tax</span>
              <span>$ 0.21</span>
            </p>
            <p>
              <span>Total</span>
              <span>$ 19.00</span>
            </p>
            <Button $variant="primary" $fullWidth>
              Place Order <img src="/icons/arrow-right.svg" alt="" />
            </Button>
          </div>
        </OrderSummary>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  & h1 {
    margin-block: 50px;
    font-size: 30px;
  }
  h3 {
    padding: 20px;
    border-bottom: 1px solid var(--clr-dark-15);
  }
`;

const BillingInformation = styled.div`
  border: 1px solid var(--clr-dark-15);
  margin-block-end: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  & div {
    display: flex;
    gap: 30px;

    & label {
      display: flex;
      flex-direction: column;
      flex: 1;

      & input {
        padding: 13px 20px;
        border: 1px solid var(--clr-dark-15);
      }
    }
  }
`;

const PaymentMethod = styled.div`
  border: 1px solid var(--clr-dark-15);
  margin-block-end: 30px;
`;

const Main = styled.div`
  display: flex;
  gap: 30px;

  & div {
    flex: 1;
  }

  & > div:last-of-type {
    border: 1px solid var(--clr-dark-15);
    margin-block-end: 30px;
    max-width: 407px;
    align-self: flex-start;
  }
`;

const OrderSummary = styled.div`
  & h3 {
    padding-inline: 0;
    margin-inline: 20px;
  }
  & > div:first-of-type {
    padding: 20px;
    padding-block-end: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & > div:last-of-type {
    margin: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--clr-dark-15);
    display: flex;
    flex-direction: column;
    gap: 15px;

    & p {
      display: flex;
      justify-content: space-between;

      & span:last-child {
        font-weight: bold;
      }
    }

    & p:last-of-type {
      padding-block-start: 20px;
      border-top: 1px solid var(--clr-dark-15);
    }
  }
`;

const OrderProduct = styled.div`
  display: flex;
  gap: 20px;

  & img {
    width: 100%;
    max-width: 60px;
    max-height: 60px;
    object-fit: cover;
  }

  & p {
    font-weight: 600;
  }

  & div div {
    display: flex;
    gap: 10px;
    font-weight: 600;

    & span:last-child {
      color: var(--clr-primary-100);
    }
  }
`;

const RadioGroup = styled.div`
  & label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px 0;
    border: 1px solid var(--clr-dark-15);
    border-radius: 5px;
    accent-color: var(--clr-primary-100);
  }

  & img {
    width: 32px;
  }
`;

export default Checkout;
