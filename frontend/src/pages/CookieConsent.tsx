import { BsCheck2Circle } from 'react-icons/bs';
import { ActionButton, ButtonIcon, ButtonText } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { InformationalLayout } from "../layouts/InformationalLayout";

export const CookieConsent = () => {
  return (
    <InformationalLayout>
      <div className="w-34">
        <div className="mb-8">
          <Header>Utilizamos cookies para melhorar a sua experiência</Header>
        </div>
        <div className="pr-1.5">
          <MutedText>
            Precisamos da sua autorização para continuar com a nossa maravilhosa receita de biscoitos de gengibre.
          </MutedText>
        </div>
        <div className="mt-12">
          <ActionButton>
            <ButtonIcon><BsCheck2Circle size={20} /></ButtonIcon>
            <ButtonText>Autorizar o uso</ButtonText>
          </ActionButton>
          <ActionButton backgroundFilled={false}>
            <ButtonText muted={true}>Continuar sem cookies 😢</ButtonText>
          </ActionButton>
        </div>
      </div>
    </InformationalLayout>
  );
};
