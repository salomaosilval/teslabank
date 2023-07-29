import { styled } from "styled-components";

export const BenefitsSectionContainer = styled.div`
  padding: 10rem;
  background-color: #f2f4fd;
`;

export const Hashtag = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  background: linear-gradient(221deg, #eb3850 0%, #cb162e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.9rem;
`;

export const BenefitsTitle = styled.h1`
  font-family: "Sora", sans-serif;
  font-size: 3.6rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 8rem;
`;

export const BenefitsHighlight = styled.span`
  color: #e51d37;
`;

export const BenefitsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
`;
