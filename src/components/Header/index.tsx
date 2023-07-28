import logoSVG from "../../assets/logo.svg";
import dash from "../../assets/dashicons_arrow-down-alt2.svg";
import user from "../../assets/user.svg";

import {
  HeaderContainer,
  LinksContainer,
  LinkContainer,
  LinkText,
  LinkArrow,
  LogoHeader,
  UserContainer,
  UserText,
  UserIcon,
} from "./styles";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LinksContainer>
          <LogoHeader src={logoSVG} alt="Tesla Bank Logo" />
          <LinkContainer>
            <LinkText>TeslaBank</LinkText>
            <LinkArrow src={dash} alt="Arrow down" />
          </LinkContainer>
          <LinkContainer>
            <LinkText>Conta Digital</LinkText>
            <LinkArrow src={dash} alt="Arrow down" />
          </LinkContainer>
          <LinkContainer>
            <LinkText>Para você</LinkText>
            <LinkArrow src={dash} alt="Arrow down" />
          </LinkContainer>
        </LinksContainer>
        <UserContainer>
          <UserText>Login</UserText>
          <UserIcon src={user} alt="User icon" />
        </UserContainer>
      </HeaderContainer>
    </>
  );
};
