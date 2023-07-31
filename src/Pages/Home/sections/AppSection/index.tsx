import googlePlay from "../../../../assets/button-googleplay.svg";
import appStore from "../../../../assets/button-apple.svg";
import teslaBank from "../../../../assets/teslabank.svg";

import { AppContainer, AppTitle, AppDesc, AppTitleHighlight, MobileAppsContainer } from "./styles";

export const AppSection = () => {
  return (
    <>
      <AppContainer>
        <div>
          <AppTitle>
            Uma nova experiência em <AppTitleHighlight>serviços financeiros</AppTitleHighlight>. Somos digital, somos
            TeslaBank
          </AppTitle>
          <AppDesc>
            Donec venenatis at turpis at ornare. Pellentesque a quam vel dui lacinia dapibus in sit amet dolor.
          </AppDesc>
          <MobileAppsContainer>
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </MobileAppsContainer>
        </div>
        <img src={teslaBank} alt="Tesla Bank Logo" />
      </AppContainer>
    </>
  );
};
