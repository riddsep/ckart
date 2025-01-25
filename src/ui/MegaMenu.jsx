import styled from "styled-components";
import MenuItem from "./MenuItem";
import Button from "./Button";

const menuList = [
  {
    title: "Categories",
    menuList: [
      "Furniture",
      "Decor",
      "Bedding & Textiles",
      "Kitchen & Dining",
      "Outdoor Decor",
    ],
  },
  {
    title: "Shop by Style",
    menuList: ["Modern", "Rustic", "Bohemian", "Industrial", "Minimalist"],
  },
  {
    title: "Seasonal Collections",
    menuList: [
      "Spring/Summer",
      "Fall/Winter",
      "Holiday Decor",
      "Outdoor Essentials",
    ],
  },
  {
    title: "New Arrivals",
    menuList: ["Furniture", "Decor", "Textiles", "Lighting"],
  },
];

function MegaMenu() {
  return (
    <Wrapper>
      {menuList.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          menuList={item.menuList}
        />
      ))}
      <BannerWrapper>
        <SaleBanner src="images/sale-banner.png" />
        <Caption>
          <h1>Sale</h1>
          <p>
            Save Up to <Em>70%</Em>
          </p>
          <Button $variant="primary" $size="lg">
            Shop Now <img src="icons/arrow-right.svg" alt="" />
          </Button>
        </Caption>
      </BannerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  position: absolute;
  top: 90px;
  left: 0;
  background-color: var(--clr-white-100);
  box-shadow: var(--shadow-xl);
`;
const SaleBanner = styled.img`
  width: 100%;
  max-width: 375px;
`;
const BannerWrapper = styled.div`
  position: relative;
`;
const Caption = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  color: var(--clr-white-100);
`;
const Em = styled.em`
  font-size: 32px;
  display: block;
  font-weight: bold;
`;

export default MegaMenu;
