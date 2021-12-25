import { FunctionComponent, useContext } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { ActionButton, ButtonIcon, ButtonText } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { InformationalLayout } from "layouts/InformationalLayout";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";

import emoji from './crying_face.svg'

export const CookieConsent: FunctionComponent = () => {
  const { setCookieConsent } = useContext(CookieConsentContext);

  return (
    <InformationalLayout>
      <Header>Utilizamos cookies para melhorar a sua experiência</Header>
      <div className="mt-8 pr-1.5">
        <MutedText>
          Precisamos da sua autorização para continuar com a nossa maravilhosa receita de biscoitos de gengibre.
        </MutedText>
      </div>
      <div className="mt-12">
        <ActionButton onClick={() => setCookieConsent(ConsentAnwsers.ACCEPTED)}>
          <ButtonIcon>
            <FiCheckCircle size={20} />
          </ButtonIcon>
          <ButtonText>Autorizar o uso</ButtonText>
        </ActionButton>
        <ActionButton backgroundFilled={false} onClick={() => setCookieConsent(ConsentAnwsers.DECLINED)}>
          <ButtonText muted={true}>Continuar sem cookies <img className='inline-block w-4' alt='crying face' src={emoji} /></ButtonText>
        </ActionButton>
      </div>
    </InformationalLayout>
  );
};
