import { BenefitCard } from "../../../../components/BenefitCard";

import { BENEFIT_DESC } from "../../../../constants";

import { BenefitsSectionContainer, Hashtag, BenefitsTitle, BenefitsHighlight, BenefitsCardsContainer } from "./styles";

export const BenefitsSection = () => {
  return (
    <>
      <BenefitsSectionContainer>
        <Hashtag>#INOVAÇÃO</Hashtag>
        <BenefitsTitle>
          Quais são as vantagens de usar <BenefitsHighlight>TeslaBank</BenefitsHighlight>?
        </BenefitsTitle>
        <BenefitsCardsContainer>
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647251/credit-card_ajeb3q.svg"
            benefitTitle="Cartão TeslaBank"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647273/shopping-cart_zua7qq.svg"
            benefitTitle="Investimentos"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Conheça os investimentos"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647268/clock_muumzh.svg"
            benefitTitle="Atendimento 24h"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647273/shield_xcsosp.svg"
            benefitTitle="Segurança"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Conheça as seguranças"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647272/percent_p0abv4.svg"
            benefitTitle="Sem taxas"
            benefitDesc={BENEFIT_DESC}
            benefitLink="como funciona"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647270/gift_k2ybnu.svg"
            benefitTitle="Receba prêmios"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja como"
          />
        </BenefitsCardsContainer>
      </BenefitsSectionContainer>
    </>
  );
};
