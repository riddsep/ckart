import styled from "styled-components";
import Button from "../ui/Button";
import Banner from "../ui/Banner";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";

function Contact() {
  return (
    <>
      <Banner />
      <MaxWidthWrapper>
        <Wrapper>
          <FormWrapper>
            <h1>Contact Us</h1>
            <p>
              We love to hear from you, so if there’s anything you’d like to ask
              us, we’re right here and ready to help in every way we can.
            </p>
            <form>
              <div>
                <label htmlFor="name">
                  Name <input type="text" id="name" />
                </label>
                <label htmlFor="email">
                  Email <input type="email" id="email" />
                </label>
              </div>
              <div>
                <label htmlFor="phone">
                  Phone Number <input type="number" id="phone" />
                </label>
                <label htmlFor="subject">
                  Subject <input type="text" id="subject" />
                </label>
              </div>
              <textarea name="message" id="message" />
              <Button>Submit</Button>
            </form>
          </FormWrapper>
          <div>
            <h1>Working Hours</h1>
            <p>Monday – Friday, 9:00am – 5:00pm PST.</p>
            <div>
              <div>
                <img src="icons/sms-dark.svg" alt="" />
                uiuxocean@gmail.com
              </div>
              <div>
                <img src="icons/call-calling-dark.svg" alt="" />
                +91 95744 68870
              </div>
              <div>
                <img src="icons/map-dark.svg" alt="" />
                Ahmedabad, India
              </div>
            </div>
          </div>
          <h1>JOIN US</h1>
          <p>
            We are happily open new collaboration. You can ask any questions and
            offer problems by phone, email, Instagram or Facebook.
          </p>
          <SocialWrapper>
            <img src="icons/facebook-dark.svg" alt="" />
            <img src="icons/pinterest-dark.svg" alt="" />
            <img src="icons/instagram-dark.svg" alt="" />
            <img src="icons/twitter-dark.svg" alt="" />
          </SocialWrapper>
        </Wrapper>
        <img src="images/image-2.jpg" alt="" />
      </MaxWidthWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding-block: 120px;
`;

const FormWrapper = styled.div``;

const SocialWrapper = styled.div`
  color: var(--clr-dark-100);
`;

export default Contact;
