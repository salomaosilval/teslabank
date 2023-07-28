import { styled } from "styled-components";

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9ff;
`;

export const PresentationContent = styled.div`
  display: flex;
`;

export const SmartphoneMockup = styled.img`
  width: 20rem;
`;

export const PresentationTitle = styled.h1`
  font-size: 3.6rem;
  font-family: "Sora", sans-serif;
  color: #333;
  font-weight: 600;
  margin-bottom: 1.9rem;
`;

export const PresentationTitleHighlight = styled.span`
  color: #e51d37;
`;

export const PresentationDescription = styled.p`
  color: #646466;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  margin-bottom: 6.1rem;
`;

export const BenefitsContainer = styled.div`
  width: 50%;
`;

export const SmartphoneContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const SmartphoneIconCheck = styled.img`
  position: absolute;
  border: 1.5rem solid #fff;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(229, 29, 55, 0.06);
  top: 5rem;
  left: 20rem;
`;

export const SmartphoneIconMousePointer = styled.img`
  position: absolute;
  border: 1.5rem solid #fff;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(229, 29, 55, 0.06);
  top: 24rem;
  left: 41rem;
`;

export const SmartphoneIconHeart = styled.img`
  position: absolute;
  border: 1.5rem solid #fff;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(229, 29, 55, 0.06);
  bottom: 12rem;
  left: 20rem;
`;

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8.3rem;
`;

export const BenefitIcon = styled.img`
  border: 1rem solid #fff;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(229, 29, 55, 0.06);
  margin-right: 2.5rem;
`;

export const BenefitTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.2rem;
  color: #333;
`;

export const BenefitDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  color: #646466;
`;
