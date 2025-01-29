import styled, { css } from "styled-components";
import { tabProductDetails } from "../constant/constant";
import Tab from "./Tab";

function ProductDetailTab({ activeIndex, setActiveIndex }) {
  return (
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
  );
}

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

export default ProductDetailTab;
