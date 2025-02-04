import styled from "styled-components";

function BrandFilter() {
  return (
    <div>
      <h3>Brand</h3>

      <Form>
        <label>
          <input type="checkbox" />
          Furniture
        </label>
        <label>
          <input type="checkbox" />
          Furai
        </label>
        <label>
          <input type="checkbox" />
          Home Brand
        </label>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-block-end: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    appearance: none; /* Menghapus checkbox default */
    width: 20px;
    height: 20px;
    border: 2px solid var(--clr-dark-15);
    border-radius: 4px; /* Buat kotak jadi rounded */
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: transparent; /* Warna saat dicentang */
      border-color: var(--clr-primary-100);
      position: relative;
    }

    &:checked::after {
      content: url("icons/checked.svg"); /* Icon checklist */
      font-size: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);
    }
  }
`;

export default BrandFilter;
