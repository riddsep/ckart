import styled from "styled-components";
import Button from "../ui/Button";
import Banner from "../ui/Banner";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";

function Contact() {
  return (
    <>
      <Banner title={"Contact Us"} src={"/images/banner-2.jpg"} />
      <MaxWidthWrapper>
        <Wrapper>
          <FormWrapper>
            <h1>Contact Us</h1>
            <p>
              We love to hear from you, so if there’s anything you’d like to ask
              us, we’re right here and ready to help in every way we can.
            </p>
            <form>
              <Row>
                <label htmlFor="name">
                  Name{" "}
                  <Input type="text" id="name" placeholder="Enter Your Name" />
                </label>
                <label htmlFor="email">
                  Email{" "}
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </label>
              </Row>
              <Row>
                <label htmlFor="phone">
                  Phone Number{" "}
                  <Input
                    type="number"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                  />
                </label>
                <label htmlFor="subject">
                  Subject{" "}
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Enter Your Subject"
                  />
                </label>
              </Row>
              <label htmlFor="message">
                Message
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message Here"
                />
              </label>
              <Button $fullWidth $variant="primary" $size="lg">
                Submit
                <img src="icons/arrow-right.svg" alt="" />
              </Button>
            </form>
          </FormWrapper>
          <WorkingHours>
            <h1>WORKING HOURS</h1>
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
            <h1>JOIN US</h1>
            <p>
              We are happily open new collaboration. You can ask any questions
              and offer problems by phone, email, Instagram or Facebook.
            </p>
            <SocialWrapper>
              <img src="icons/facebook-dark.svg" alt="" />
              <img src="icons/pinterest-dark.svg" alt="" />
              <img src="icons/instagram-dark.svg" alt="" />
              <img src="icons/twitter-dark.svg" alt="" />
            </SocialWrapper>
          </WorkingHours>
        </Wrapper>
        <Map src="images/map.png" alt="" />
      </MaxWidthWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  padding-block: 120px;
`;

const FormWrapper = styled.div`
  h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-block-end: 20px;
  }
  & > p {
    width: 100%;
    max-width: 500px;
    margin-block-end: 50px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  align-items: center;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-block-start: 6px;

  &::placeholder {
    font-weight: 400;
  }
`;
const Row = styled.div`
  display: flex;
  gap: 30px;
  margin-block-end: 30px;

  & + label {
    display: block;
    font-weight: 600;
  }

  label {
    flex: 1;
    font-weight: 600;
  }
`;

const Textarea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  min-height: 100px;
  margin-block-end: 30px;
  margin-block-start: 6px;
  padding: 8px 10px;

  &::placeholder {
    font-weight: 400;
  }
`;

const WorkingHours = styled.div`
  h1 {
    font-size: 20px;
    margin-block-end: 10px;
  }

  & > div:not(:last-child) {
    padding-block: 30px;
    margin-block: 30px;
    border-block: 1px solid var(--clr-dark-15);

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      &:not(:last-child) {
        margin-block-end: 20px;
      }
    }
  }
`;

const Map = styled.img`
  height: 100%;
  max-height: 600px;
  margin-block-end: 120px;
`;

export default Contact;
