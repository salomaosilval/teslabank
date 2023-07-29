import {
  DepositionsContainer,
  DepositionsTitle,
  DepositionsTitleHighlight,
  Highlight,
  Separator,
  DepositionTitleContainer,
  DepositionsMessagesContainer,
  DepositionTitle,
  DepositionMessage,
} from "./styles";

export const DepositionsSection = () => {
  return (
    <>
      <DepositionsContainer>
        <Highlight>#DEPOIMENTOS</Highlight>
        <DepositionsTitle>
          <DepositionsTitleHighlight>TeslaBank fora das telinhas:</DepositionsTitleHighlight> Veja o que falam sobre
          nosso serviço
        </DepositionsTitle>
        <DepositionsMessagesContainer>
          <div>
            <DepositionTitleContainer>
              <Separator></Separator>
              <DepositionTitle>NIKOLAS TESLA</DepositionTitle>
            </DepositionTitleContainer>
            <DepositionMessage>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra
              tincidunt. ”
            </DepositionMessage>
          </div>
          <div>
            <DepositionTitleContainer>
              <Separator></Separator>
              <DepositionTitle>STEVE JOBS</DepositionTitle>
            </DepositionTitleContainer>
            <DepositionMessage>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra
              tincidunt. ”
            </DepositionMessage>
          </div>
          <div>
            <DepositionTitleContainer>
              <Separator></Separator>
              <DepositionTitle>ALAN TURING</DepositionTitle>
            </DepositionTitleContainer>
            <DepositionMessage>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra
              tincidunt. ”
            </DepositionMessage>
          </div>
        </DepositionsMessagesContainer>
      </DepositionsContainer>
    </>
  );
};
