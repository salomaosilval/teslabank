import logoIuri from "../../assets/logo-iuricode.svg";

import { FooterContainer, PoweredContainer, FooterDesc, FooterLink, PoweredText } from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterDesc>
          Copyright © 2022{" "}
          <FooterLink href="https://www.iuricode.com" target="_blank">
            iuricode.com
          </FooterLink>
          . Todos os direitos reservados.
        </FooterDesc>
        <PoweredContainer>
          <PoweredText>Powered by</PoweredText>
          <img src={logoIuri} alt="Logo IuriCode" />
        </PoweredContainer>
      </FooterContainer>
    </>
  );
};
