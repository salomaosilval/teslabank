import { styled } from "styled-components";

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18rem;
  background-color: #f8f9ff;
`;

export const Hashtag = styled.p`
  background: linear-gradient(221deg, #eb3850 0%, #cb162e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const FAQTitle = styled.h1`
  font-size: 3.6rem;
  font-family: "Sora", sans-serif;
  color: #333;
  font-weight: 600;
  margin-bottom: 4.6rem;
`;

export const FAQDesc = styled.p`
  color: #646466;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 11rem;
`;

export const FAQItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6.8rem;
  transition: all 0.5s ease;
`;

export const FAQIcon = styled.img`
  border: 1rem solid #fff;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(229, 29, 55, 0.06);
  margin-right: 2.5rem;
`;

export const FAQInfo = styled.div`
  margin-right: 5.3rem;
`;

export const FAQItemTitle = styled.h1`
  color: #333;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.3rem;
`;

export const FAQItemDesc = styled.p`
  color: #646466;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const FAQAnswer = styled.p`
  color: #646466;
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  width: 40vw;
  margin: 5.3rem auto;
`;

export const FAQArrow = styled.img`
  cursor: pointer;
`;
