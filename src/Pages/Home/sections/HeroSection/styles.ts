import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: #f2f4fd;
`;

export const HeroTitle = styled.h1`
  font-size: 6.4rem;
  font-family: "Sora", sans-serif;
  font-weight: 600;
  color: #e51d37;
  margin-bottom: 2.4rem;
`;

export const HeroDescription = styled.p`
  font-size: 2.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 1.8rem 4rem;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  border: 0;
  border-radius: 0.4rem;
  background: linear-gradient(221deg, #eb3850 0%, #cb162e 100%);
  border: 1px solid #cb162e;
  transition: all 1.5s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #cb162e;
    background: transparent;
    color: #cb162e;
  }
`;

export const ArrowButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1.5rem;
`;

export const AppStoreIcon = styled.img`
  width: 3.2rem;
  height: 3.7rem;
  cursor: pointer;
`;

export const PlayStoreIcon = styled.img`
  width: 2.8rem;
  height: 3.1rem;
  cursor: pointer;
`;

export const RedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  background: linear-gradient(221deg, #eb3850 0%, #cb162e 100%);
`;

export const Cards = styled.img`
  width: 80%;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
