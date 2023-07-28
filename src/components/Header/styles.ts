import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3.5rem;
  background-color: transparent;
  width: calc(100% - 27px);
  position: absolute;
  top: 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 7rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LinkText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  color: #333333;
  line-height: 2.7rem;
  padding-right: 1.2rem;
`;

export const LinkArrow = styled.img`
  width: 1.8rem;
`;

export const LogoHeader = styled.img`
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const UserContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const UserText = styled.p`
  font-size: 1.8rem;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  line-height: 2.7rem;
`;

export const UserIcon = styled.img`
  width: 2.4rem;
`;
