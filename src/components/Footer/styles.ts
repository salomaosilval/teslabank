import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  padding: 4rem;
  justify-content: space-around;
`;

export const FooterDesc = styled.p`
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  color: #333;
  font-weight: 300;
`;

export const FooterLink = styled.a`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  color: #333;
  text-decoration: none;
`;

export const PoweredContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PoweredText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  margin-right: 1.2rem;
  color: #e51d37;
`;
