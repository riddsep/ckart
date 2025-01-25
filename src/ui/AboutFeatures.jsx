import styled from "styled-components";
import { features } from "../constant/constant";

function AboutFeatures() {
  return (
    <Features>
      {features.map((feat) => (
        <FeatItem key={feat.title}>
          <img src={feat.src} alt={feat.title} />
          <div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        </FeatItem>
      ))}
    </Features>
  );
}

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  & > div {
    display: flex;
    gap: 10px;
  }
`;

const FeatItem = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export default AboutFeatures;
