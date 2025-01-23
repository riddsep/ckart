import styled from "styled-components";
import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";

function OrderResume() {
  return (
    <Wrapper>
      <Rating>
        <StarRating />
        <Title>Review Product</Title>
      </Rating>
      <Cta>
        <Button $size="large" $varint="outline">
          Order Again
        </Button>
        <Button $size="large" $varint="primary">
          View Order Details
        </Button>
      </Cta>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  margin-inline: 20px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Cta = styled.div`
  display: flex;
  gap: 20px;
`;
const Title = styled.span`
  font-weight: 600;
`;

export default OrderResume;
