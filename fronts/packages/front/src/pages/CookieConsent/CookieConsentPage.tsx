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
        <LottieFile src="https://assets.br.ivao.aero/lotties/cookies.json" />
      }>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
        <div className='flex-1'>
          <ActionButton
            content='Autorizar o uso'
            icon={<FiCheckCircle size={20} />}
            width='w-full'
            onClick={() => setCookieConsent(ConsentAnwsers.ACCEPTED)} />
        </div>
        <div className='flex-1'>
          <ActionButton
            backgroundFilled={false}
            width='w-full'
            content={
              <span className={`block px-5 py-2.5 leading-[37px] text-center font-action font-semibold text-gray dark:text-white truncate w-full`}>
                <span>Continuar sem cookies <img className='inline-block w-4' alt='crying face' src={emoji} /></span>
              </span>
            }
            onClick={() => setCookieConsent(ConsentAnwsers.DECLINED)} />
        </div>
      </div>
    </InformationalLayout>
  );
}
