import arrow from "../../../../assets/arrow-right.svg";
import apple from "../../../../assets/logo-apple.svg";
import googleplay from "../../../../assets/logo-googleplay.svg";
import cards from "../../../../assets/cards.svg";

import {
  HeroContainer,
  WhiteContainer,
  RedContainer,
  HeroTitle,
  HeroDescription,
  ButtonContainer,
  Button,
  AppStoreIcon,
  PlayStoreIcon,
  ArrowButton,
  Cards,
} from "./styles";

export const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <WhiteContainer>
          <div>
            <HeroTitle>TeslaBank</HeroTitle>
            <HeroTitle>Banco 100% digital</HeroTitle>
            <HeroDescription>Abrir uma conta digital nunca foi tão simples!</HeroDescription>
            <ButtonContainer>
              <Button>
                Abrir uma conta <ArrowButton src={arrow} alt="Arrow Right" />
              </Button>
              <AppStoreIcon src={apple} alt="" />
              <PlayStoreIcon src={googleplay} alt="" />
            </ButtonContainer>
          </div>
        </WhiteContainer>
        <RedContainer>
          <Cards src={cards} alt="Tesla Bank Cards" />
        </RedContainer>
      </HeroContainer>
    </>
  );
};
