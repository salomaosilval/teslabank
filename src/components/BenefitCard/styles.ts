import { styled } from "styled-components";

export const BenefitCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.2rem;
  height: 28.4rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 2rem;
  gap: 2rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BenefitTitle = styled.h1`
  color: #333;
  font-family: "Sora", sans-serif;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: -0.252px;
  align-self: stretch;
  font-weight: 400;
`;

export const BenefitDesc = styled.p`
  font-size: 1.4rem;
  color: #333;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 24px;
`;

export const BenefitLink = styled.a`
  color: #e51d37;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Card = styled.img`
  width: 35px;
`;
