import { styled } from "styled-components";

export const DepositionsContainer = styled.div`
  padding: 12rem;
  background-color: #f8f9ff;
`;

export const DepositionsTitle = styled.h1`
  color: #333;
  font-family: "Sora", sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 5.6rem;
  margin-bottom: 9.3rem;
`;

export const DepositionsTitleHighlight = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

export const Highlight = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  background: linear-gradient(221deg, #eb3850 0%, #cb162e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.9rem;
`;

export const DepositionsMessagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9.2rem;
`;

export const DepositionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.6rem;
`;

export const Separator = styled.div`
  width: 3px;
  height: 30px;
  flex-shrink: 0;
  background-color: #e51d37;
  margin-right: 1.2rem;
`;

export const DepositionTitle = styled.h1`
  color: #333;
  font-family: "Sora", sans-serif;
  font-size: 2rem;
  font-weight: 400;
`;

export const DepositionMessage = styled.p`
  color: #646466;
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  line-height: 2.6rem;
`;
