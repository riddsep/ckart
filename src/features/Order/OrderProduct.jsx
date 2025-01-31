import styled from "styled-components";

function OrderProduct() {
  return (
    <Wrapper>
      <Content>
        <Thumbnail src="/images/image-2.jpg" alt="" />
        <Description>
          <Title>Pilke Wooden Storage</Title>
          <Quantity>Qty : 2</Quantity>
        </Description>
      </Content>
      <Price>$ 274.50</Price>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  margin-inline: 20px;
  border-bottom: 1px solid var(--clr-dark-15);
`;
const Content = styled(Wrapper)`
  gap: 20px;
  padding-block: 0;
  border: 0;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 16px;
`;
const Quantity = styled.p`
  color: var(--clr-primary-100);
`;
const Price = styled.p`
  font-weight: bold;
`;

export default OrderProduct;
