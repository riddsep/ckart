import styled, { css } from "styled-components";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";
import { MaxWidthWrapper } from "../ui/MaxWidthWrapper";
import Tab from "../ui/Tab";
import { products, reviews, tabProductDetails } from "../constant/constant";
import { useState } from "react";
import Product from "../ui/Product";
import Review from "../ui/Review";

function ProductDetail() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <DetailWrapper>
        <ImageWrapper>
          <SlideWrapper>
            <SlideImg src="/images/product-detail-2.jpg" alt="" />
            <SlideImg src="/images/product-detail-3.jpg" alt="" />
            <SlideImg src="/images/product-detail-4.jpg" alt="" />
            <SlideImg src="/images/product-detail-5.jpg" alt="" />
            <SlideImg src="/images/product-detail-6.jpg" alt="" />
          </SlideWrapper>
          <div>
            <MainImg src="/images/product-detail-1.png" alt="" />
          </div>
        </ImageWrapper>
        <DescriptionDetail>
          <p>Furniture</p>
          <h1>Pilke Wooden Storage</h1>
          <div>
            <StarRating />
            <p>(145 Reviews)</p>
          </div>
          <div>
            <p>$ 245.52</p>
            <p>$ 22.52</p>
          </div>
          <ProductParagraph>
            <span>
              Explore our vast selection at ‘The Creative Store’- your one-stop
              destination for all construction and building needs. From the
              foundational bricks to the final touches of lighting, discover
              quality and variety like never before.
            </span>
            <span>
              Explore our vast selection at ‘The Creative Store’- your one-stop
              destination for all construction and building needs. From the
              foundational bricks to the final touches of lighting, discover
              quality and variety like never before.
            </span>
          </ProductParagraph>

          <CallToAction>
            <div>
              <div>
                <span>Qty</span>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div>
                <Button $variant="primary">
                  Add to Cart{" "}
                  <img src="/icons/shopping-cart-light.svg" alt="" />
                </Button>
                <Button $variant="outline">
                  Buy Now <img src="/icons/arrow-right-dark.svg" alt="" />
                </Button>
              </div>
            </div>
            <p>
              Estimate delivery time: <span>12-26 days</span>
            </p>
          </CallToAction>
        </DescriptionDetail>
      </DetailWrapper>
      <div>
        <Tab>
          {tabProductDetails.map((tab, index) => (
            <TabItem
              key={index}
              onClick={() => setActiveIndex(index)}
              $active={activeIndex === index}
            >
              {tab}
            </TabItem>
          ))}
        </Tab>
        <TabContent>
          {activeIndex === 0 && (
            <MainDescription>
              <p>
                Home is where the heart is, and your decor should reflect your
                personality and create a welcoming atmosphere. Whether you’re
                moving into a new place or just looking to refresh your existing
                space, there are countless ways to infuse style and comfort into
                your home. Here are some tips to elevate your decor and make
                your home feel uniquely yours.
              </p>
              <h3>1. Choose a Color Palette</h3>
              <p>
                The first step in creating a cohesive look is selecting a color
                palette. Start with a base color and then choose complementary
                hues. Soft neutrals can create a calming environment, while bold
                colors can add vibrancy. Consider the mood you want to create in
                each room; for instance, soft blues and greens are perfect for
                bedrooms, while warm reds and yellows can energize a living
                room.
              </p>
              <h3>2. Mix Textures</h3>
              <p>
                Incorporating a variety of textures adds depth and interest to
                your decor. Combine smooth, sleek surfaces with rougher
                materials. Think of a plush velvet sofa paired with a rustic
                wooden coffee table, or a soft knit throw draped over a leather
                chair. Textures can also be introduced through decorative
                pillows, rugs, and curtains, creating a layered look that feels
                inviting.
              </p>
              <h3>3. Incorporate Personal Touches</h3>
              <p>
                Your home should tell your story. Incorporate personal items
                that reflect your interests and experiences, such as framed
                photographs, travel souvenirs, or handcrafted art pieces.
                Displaying these items not only adds character to your space but
                also creates conversation starters for guests.
              </p>
            </MainDescription>
          )}
          {activeIndex === 1 && (
            <AdditionalInfo>
              <FeatureInfo>
                <h3>Feature</h3>
                <div>
                  <img src="/icons/warranty.svg" alt="" />
                  <span>Free 1-Year Warranty</span>
                </div>
                <div>
                  <img src="/icons/free-shipping.svg" alt="" />
                  <span>Free Shipping & Fasted Delivery</span>
                </div>
                <div>
                  <img src="/icons/money-back.svg" alt="" />
                  <span>100% Money-back guarantee</span>
                </div>
                <div>
                  <img src="/icons/customer-support.svg" alt="" />
                  <span>24/7 Customer support</span>
                </div>
                <div>
                  <img src="/icons/secure-payment.svg" alt="" />
                  <span>Secure payment method</span>
                </div>
              </FeatureInfo>
              <ShippingInfo>
                <h3>Shipping Information</h3>
                <p>
                  Courier: <span>2 - 4 days, free shipping</span>
                </p>
                <p>
                  Local Shipping: <span>up to one week, ₹19.00</span>
                </p>
                <p>
                  UPS Ground Shipping: <span>4 - 6 days, ₹29.00</span>
                </p>
                <p>
                  Unishop Global Export: <span> 3 - 4 days, ₹39.00</span>
                </p>
              </ShippingInfo>
              <OrderInfo>
                <h3>Other Information</h3>
                <p>
                  <span>
                    For all orders exceeding a value of 100USD shipping is
                    offered for free.
                  </span>
                  <span>
                    Returns will be accepted for up to 10 days of Customer’s
                    receipt or tracking number on unworn items.
                  </span>
                  <span>
                    You, as a Customer, are obliged to inform us via email
                    before you return the item.
                  </span>
                </p>
              </OrderInfo>
            </AdditionalInfo>
          )}
          {activeIndex === 2 && (
            <Reviews>
              <ReviewList>
                {reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))}
              </ReviewList>
              <AddReviews>
                <h3>Add Review</h3>
                <form>
                  <div>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </label>
                    <label htmlFor="email">
                      Email
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                    </label>
                  </div>
                  <StarRating />
                  <label htmlFor="message">
                    Message
                    <textarea
                      id="message"
                      placeholder="Write Your Message Here"
                    />
                  </label>
                  <Button $fullWidth $variant="primary">
                    Submit <img src="/icons/arrow-right.svg" alt="" />
                  </Button>
                </form>
              </AddReviews>
            </Reviews>
          )}
        </TabContent>
        <RelatedProductList>
          <p>&mdash; Product &mdash;</p>
          <h1>Related Product</h1>
          <ProductList>
            {products.slice(0, 4).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductList>
        </RelatedProductList>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)``;
const DetailWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-block-start: 50px;
  margin-block-end: 80px;
`;
const DescriptionDetail = styled.div`
  flex: 1;

  & > p:first-of-type {
    color: var(--clr-primary-100);
    text-transform: uppercase;
  }

  & > h1 {
    font-size: 24px;
    margin-block: 10px;
  }

  & > div:first-of-type {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-block-end: 30px;
  }

  & > div:nth-of-type(2) {
    display: flex;
    gap: 10px;
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);

    p {
      font-size: 30px;
      font-weight: bold;

      &:last-child {
        text-decoration: line-through;
        color: var(--clr-dark-15);
      }
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%; /* Pastikan tingginya sama dengan MainImg */
`;

const SlideImg = styled.img`
  flex: 1; /* Membagi tinggi secara proporsional */
  max-width: 126px;
  max-height: 110px;
  object-fit: cover;
`;

const MainImg = styled.img`
  flex: 1;
  width: 100%;
  max-width: 592px;
  height: 100%;
  object-fit: cover;
`;

const ProductParagraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--clr-dark-15);
`;
const CallToAction = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    padding-block-end: 30px;
    margin-block-end: 30px;
    border-bottom: 1px solid var(--clr-dark-15);

    & > div {
      display: flex;
      align-items: center;

      span:not(:first-of-type) {
        padding: 8px 18px;
        border: 1px solid var(--clr-dark-15);
      }

      span:first-of-type {
        margin-right: 10px;
      }
    }

    & > div:last-of-type {
      display: flex;
      gap: 10px;
    }
  }

  & > :last-child span {
    font-weight: bold;
  }
`;

const TabItem = styled.li`
  cursor: pointer;
  color: var(--clr-dark-50);

  ${(props) =>
    props.$active &&
    css`
      color: var(--clr-primary-100);
      border-bottom: 2px solid var(--clr-primary-100);
      margin-bottom: -2px;
    `}
`;

const TabContent = styled.div`
  margin-block-start: 50px;
  margin-block-end: 80px;
`;

const RelatedProductList = styled.div`
  margin-block-end: 120px;

  & > p {
    color: var(--clr-primary-100);
    font-weight: 600;
    text-align: center;
  }
  & > h1 {
    font-size: 48px;
    text-align: center;
    margin-block-end: 70px;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const MainDescription = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const AdditionalInfo = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`;

const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline-end: 50px;

  & > h3 {
    font-size: 20px;
  }

  & > div {
    display: flex;
    gap: 10px;
  }
`;
const ShippingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline: 50px;
  border-inline: 1px solid var(--clr-dark-15);

  & > h3 {
    font-size: 20px;
  }
  & > p span {
    font-weight: bold;
  }
`;
const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline-start: 50px;

  & > h3 {
    font-size: 20px;
  }

  & > p {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const Reviews = styled.div`
  display: flex;
  gap: 30px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddReviews = styled.div`
  padding: 20px;

  h3 {
    font-size: 24px;
    margin-block-end: 30px;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  & form label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }
  & form input {
    padding: 10px 20px;
    border: 1px solid var(--clr-dark-15);

    &::placeholder {
      font-weight: 400;
    }
  }

  & form textarea {
    padding: 10px 20px;
    border: 1px solid var(--clr-dark-15);
    resize: none;
    height: 100px;

    &::placeholder {
      font-weight: 400;
    }
  }
  & form div:first-of-type {
    display: flex;
    gap: 20px;
  }
`;

export default ProductDetail;
