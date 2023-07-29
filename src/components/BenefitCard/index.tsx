import { BenefitCardContainer, Card, BenefitTitle, BenefitDesc, BenefitLink } from "./styles";

interface BenefitCardProps {
  imageURL: string;
  benefitTitle: string;
  benefitDesc: string;
  benefitLink: string;
}

export const BenefitCard = ({ imageURL, benefitTitle, benefitDesc, benefitLink }: BenefitCardProps) => {
  return (
    <>
      <BenefitCardContainer>
        <Card src={imageURL} alt={benefitTitle} />
        <BenefitTitle>{benefitTitle}</BenefitTitle>
        <BenefitDesc>{benefitDesc}</BenefitDesc>
        <BenefitLink href="#">{benefitLink}</BenefitLink>
      </BenefitCardContainer>
    </>
  );
};
