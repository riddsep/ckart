import styled from "styled-components";
import { socialMediaData } from "../constant/constant";

function SocialMedia() {
  return (
    <SocialMediaList>
      {socialMediaData.map((data) => (
        <li key={data.name}>
          <a href={data.href}>
            <img src={"/icons/facebook.svg"} alt={`${data.name} icon`} />
          </a>
        </li>
      ))}
    </SocialMediaList>
  );
}

const SocialMediaList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  list-style-type: none;
`;

export default SocialMedia;
