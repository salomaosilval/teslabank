import { styled } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12rem;
  gap: 20.5rem;
  background-color: #f2f4fd;
`;

export const AppTitle = styled.h1`
  color: #282421;
  font-family: "Sora", sans-serif;
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 6.2rem;
  margin-bottom: 4rem;
`;

export const AppTitleHighlight = styled.span`
  color: #e51d37;
`;

export const AppDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.8rem;
  margin-bottom: 7rem;
`;

export const MobileAppsContainer = styled.div`
  display: flex;
  gap: 3.2rem;

  img {
    cursor: pointer;
  }
`;
