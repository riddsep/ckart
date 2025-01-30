function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>

      <div>
        <h3>Billing Information</h3>

        <form>
          <div>
            <label htmlFor="name">
              Name <input type="text" placeholder="Enter Your Name" id="name" />
            </label>
            <label htmlFor="email">
              Email{" "}
              <input type="text" placeholder="Enter Your email" id="email" />
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
            <label htmlFor="email">
              Email{" "}
              <input type="text" placeholder="Enter Your email" id="email" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
