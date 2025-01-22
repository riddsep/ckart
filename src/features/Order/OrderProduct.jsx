import styled from "styled-components";

function OrderProduct() {
  return (
    <Wrapper>
      <Content>
        <Thumbnail src="images/image-2.jpg" alt="" />
        <Description>
          <Title>Pilke Wooden Storage</Title>
          <p>Qty : 2</p>
        </Description>
      </Content>
      <p>$ 254.50</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled(Wrapper)`
  gap: 20px;
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
`;

const Title = styled.h1`
  font-size: 16px;
`;

export default OrderProduct;
