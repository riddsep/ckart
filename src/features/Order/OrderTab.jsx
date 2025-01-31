import Tab from "../../ui/Tab";
import { orderTabs } from "../../constant/constant";
import styled, { css } from "styled-components";
import { useState } from "react";

function OrderTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <Tab>
        {orderTabs.map((tab, index) => (
          <TabItem
            key={index}
            onClick={() => setActiveIndex(index)}
            $active={activeIndex === index}
          >
            {tab}
          </TabItem>
        ))}
      </Tab>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 30px;
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

export default OrderTab;
