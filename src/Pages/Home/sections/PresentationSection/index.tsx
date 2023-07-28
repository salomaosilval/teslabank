import smartphone from "../../../../assets/mobile.svg";
import mobile from "../../../../assets/smartphone.svg";
import dollarSign from "../../../../assets/dollar-sign.svg";
import smile from "../../../../assets/smile.svg";
import check from "../../../../assets/check-circle.svg";
import mousePointer from "../../../../assets/mouse-pointer.svg";
import heart from "../../../../assets/heart.svg";

import {
  PresentationContainer,
  PresentationContent,
  SmartphoneMockup,
  PresentationTitle,
  PresentationTitleHighlight,
  PresentationDescription,
  BenefitsContainer,
  SmartphoneContainer,
  Benefit,
  BenefitIcon,
  BenefitTitle,
  BenefitDesc,
  SmartphoneIconCheck,
  SmartphoneIconMousePointer,
  SmartphoneIconHeart,
} from "./styles";

export const PresentationSection = () => {
  return (
    <>
      <PresentationContainer>
        <PresentationContent>
          <SmartphoneContainer>
            <SmartphoneMockup src={smartphone} alt="Smartphone Mockup" />
            <SmartphoneIconCheck src={check} alt="" />
            <SmartphoneIconMousePointer src={mousePointer} alt="" />
            <SmartphoneIconHeart src={heart} alt="" />
          </SmartphoneContainer>
          <BenefitsContainer>
            <PresentationTitle>
              Abra sua conta <PresentationTitleHighlight>gratuita</PresentationTitleHighlight>!
            </PresentationTitle>
            <PresentationDescription>
              Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento
              para todos os bancos sem pagar nada.
            </PresentationDescription>
            <Benefit>
              <BenefitIcon src={dollarSign} alt="" />
              <div>
                <BenefitTitle>Seu dinheiro rendendo mais</BenefitTitle>
                <BenefitDesc>Rendem mais que a poupança e você resgata quando quiser</BenefitDesc>
              </div>
            </Benefit>
            <Benefit>
              <BenefitIcon src={mobile} alt="" />
              <div>
                <BenefitTitle>Conta digital 100% grátis</BenefitTitle>
                <BenefitDesc>Transferências, boletos de depósito e outros serviços gratuitos</BenefitDesc>
              </div>
            </Benefit>
            <Benefit>
              <BenefitIcon src={smile} alt="" />
              <div>
                <BenefitTitle>Cartão sem anuidade</BenefitTitle>
                <BenefitDesc>Conta digital com cartão de crédito sem anuidade e sem complicação</BenefitDesc>
              </div>
            </Benefit>
          </BenefitsContainer>
        </PresentationContent>
      </PresentationContainer>
    </>
  );
};
