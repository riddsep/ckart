import styled from "styled-components";

function BillingInformation({ register }) {
  return (
    <Wrapper>
      <h3>Billing Information</h3>

      <Form>
        <div>
          <label htmlFor="name">
            Name{" "}
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              {...register("name")}
            />
          </label>
          <label htmlFor="email">
            Email{" "}
            <input
              type="text"
              placeholder="Enter Your email"
              id="email"
              {...register("email")}
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
              {...register("phone")}
            />
          </label>
          <label htmlFor="address-optional">
            Optional Adrress{" "}
            <input
              type="text"
              placeholder="Enter Your Optional Adrress"
              id="address-optional"
              {...register("address-optional")}
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
              {...register("address")}
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
              {...register("province")}
            />
          </label>
          <label htmlFor="city">
            City <input type="text" placeholder="Enter Your City" id="city" />
          </label>
        </div>
        <div>
          <label htmlFor="subdistrict">
            Subdistrict{" "}
            <input
              type="text"
              placeholder="Enter Your Subdistrict Code"
              id="subdistrict"
              {...register("subdistrict")}
            />
          </label>
          <label htmlFor="postcode">
            Postcode{" "}
            <input
              type="text"
              placeholder="Enter Your Postcode"
              id="postcode"
              {...register("postcode")}
            />
          </label>
        </div>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid var(--clr-dark-15);
  margin-block-end: 30px;

  h3 {
    padding: 20px;
    border-bottom: 1px solid var(--clr-dark-15);
  }
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

export default BillingInformation;
