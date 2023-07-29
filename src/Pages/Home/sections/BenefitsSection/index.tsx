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
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647251/credit-card_ajeb3q.svg"
            benefitTitle="Cartão TeslaBank"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647251/credit-card_ajeb3q.svg"
            benefitTitle="Cartão TeslaBank"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647251/credit-card_ajeb3q.svg"
            benefitTitle="Cartão TeslaBank"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647251/credit-card_ajeb3q.svg"
            benefitTitle="Cartão TeslaBank"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
          <BenefitCard
            imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647251/credit-card_ajeb3q.svg"
            benefitTitle="Cartão TeslaBank"
            benefitDesc={BENEFIT_DESC}
            benefitLink="Veja as opções"
          />
        </BenefitsCardsContainer>
      </BenefitsSectionContainer>
    </>
  );
};
