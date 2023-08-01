import { useState } from "react";

import {
  FAQContainer,
  Hashtag,
  FAQTitle,
  FAQDesc,
  FAQItem,
  FAQIcon,
  FAQItemTitle,
  FAQItemDesc,
  FAQInfo,
  FAQAnswer,
  FAQArrow,
} from "./styles";

interface FAQItem {
  id: number;
  FAQIcon: string;
  question: string;
  description: string;
  answer: string;
}

interface FAQSectionProps {
  FAQItems: FAQItem[];
}

export const FAQSection = ({ FAQItems }: FAQSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>();

  const toggleDropdown = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <FAQContainer>
        <Hashtag>#AJUDA</Hashtag>
        <FAQTitle>Ficou alguma dúvida?</FAQTitle>
        <FAQDesc>Nullam ornare eu nisi fringilla consectetur. Suspendisse potenti. </FAQDesc>
        {FAQItems.map((faq) => (
          <div key={faq.id}>
            <FAQItem>
              <FAQIcon src={faq.FAQIcon} alt={faq.question} />
              <FAQInfo>
                <FAQItemTitle>{faq.question}</FAQItemTitle>
                <FAQItemDesc>{faq.description}</FAQItemDesc>
              </FAQInfo>
              <FAQArrow
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1690647270/dashicons_arrow-down-alt2_ffcyfc.svg"
                alt="Arrow down icon"
                onClick={() => toggleDropdown(faq.id)}
              />
            </FAQItem>
            {expandedIndex === faq.id && <FAQAnswer>{faq.answer}</FAQAnswer>}
          </div>
        ))}
      </FAQContainer>
    </>
  );
};
