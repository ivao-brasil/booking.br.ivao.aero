import { useContext } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { ActionButton, ButtonText } from "components/button/Button";
import { InformationalLayout } from "layouts/InformationalLayout";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";

import emoji from './crying_face.svg'
import { LottieFile } from 'components/LottieFile';

export default function CookieConsentPage() {
  const { setCookieConsent } = useContext(CookieConsentContext);

  return (
    <InformationalLayout
      header='Utilizamos cookies para melhorar a sua experiência'
      description='Precisamos da sua autorização para continuar com a nossa maravilhosa receita de biscoitos de gengibre.'
      image={
        <LottieFile src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json" />
      }>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
        <ActionButton
          content='Autorizar o uso'
          icon={<FiCheckCircle size={20} />}
          onClick={() => setCookieConsent(ConsentAnwsers.ACCEPTED)} />
        <ActionButton
          backgroundFilled={false}
          content={
            <ButtonText textColor='text-gray dark:text-white"'>
              Continuar sem cookies <img className='inline-block w-4' alt='crying face' src={emoji} />
            </ButtonText>
          }
          onClick={() => setCookieConsent(ConsentAnwsers.DECLINED)} />
      </div>
    </InformationalLayout>
  );
}
