import styled from "styled-components";

function PaymentMethod() {
  return (
    <Wrapper>
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
            <input type="text" placeholder="Card Number" id="cardNumber" />
          </label>
        </div>
        <div>
          <label htmlFor="expire">
            Expire Date <input type="text" placeholder="MM/YY" id="expire" />
          </label>
          <label htmlFor="cvv">
            CVV <input type="text" placeholder="CVV" id="cvv" />
          </label>
        </div>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
      user-select: none;

      & input {
        padding: 13px 20px;
        border: 1px solid var(--clr-dark-15);
      }
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

export default PaymentMethod;
