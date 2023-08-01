import { Header } from "../../components/Header";
import { HeroSection } from "./sections/HeroSection";
import { PresentationSection } from "./sections/PresentationSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { DepositionsSection } from "./sections/DepositionsSection";
import { AppSection } from "./sections/AppSection";
import { FAQSection } from "./sections/FAQSection";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const _FAQItems = [
    {
      id: 1,
      FAQIcon: "https://res.cloudinary.com/dv61ldehl/image/upload/v1690647273/smartphone_mdfziq.svg",
      question: "Lorem ipsum dolor sit amet?",
      description: "Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      FAQIcon: "https://res.cloudinary.com/dv61ldehl/image/upload/v1690647273/smartphone_mdfziq.svg",
      question: "Lorem ipsum dolor sit amet",
      description: "Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      FAQIcon: "https://res.cloudinary.com/dv61ldehl/image/upload/v1690647273/smartphone_mdfziq.svg",
      question: "Lorem ipsum dolor sit amet",
      description: "Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <PresentationSection />
      <BenefitsSection />
      <DepositionsSection />
      <AppSection />
      <FAQSection FAQItems={_FAQItems} />
      <Footer />
    </>
  );
};
