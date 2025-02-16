import styled from "styled-components";

function BillingInformation({ register, errors }) {
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
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </label>
          <label htmlFor="email">
            Email{" "}
            <input
              type="text"
              placeholder="Enter Your email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone Number{" "}
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              id="phone"
              {...register("phone", { required: "Phone Number is required" })}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </label>
          <label htmlFor="otherPhoneNumber">
            Other Phone Number{" "}
            <input
              type="text"
              placeholder="Enter Your Other Phone Number"
              id="otherPhoneNumber"
              {...register("otherPhoneNumber", {
                required: "Other Phone Number is required",
              })}
            />
            {errors.otherPhoneNumber && (
              <ErrorMessage>{errors.otherPhoneNumber.message}</ErrorMessage>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="address">
            Adrress{" "}
            <input
              type="text"
              placeholder="Enter Your Adrress"
              id="address"
              {...register("address", { required: "Adrress is required" })}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="province">
            Province{" "}
            <input
              type="text"
              placeholder="Enter Your Province"
              id="province"
              {...register("province", { required: "Province is required" })}
            />
            {errors.province && (
              <ErrorMessage>{errors.province.message}</ErrorMessage>
            )}
          </label>
          <label htmlFor="city">
            City{" "}
            <input
              type="text"
              placeholder="Enter Your City"
              id="city"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </label>
        </div>
        <div>
          <label htmlFor="subDistrict">
            Subdistrict{" "}
            <input
              type="text"
              placeholder="Enter Your Subdistrict Code"
              id="subDistrict"
              {...register("subDistrict", {
                required: "Subdistrict is required",
              })}
            />
            {errors.subDistrict && (
              <ErrorMessage>{errors.subDistrict.message}</ErrorMessage>
            )}
          </label>
          <label htmlFor="postCode">
            Postcode{" "}
            <input
              type="text"
              placeholder="Enter Your Postcode"
              id="postCode"
              {...register("postCode", { required: "Postcode is required" })}
            />
            {errors.postCode && (
              <ErrorMessage>{errors.postCode.message}</ErrorMessage>
            )}
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
const ErrorMessage = styled.p`
  font-size: 14px;
  color: var(--clr-error-100);
`;

export default BillingInformation;
