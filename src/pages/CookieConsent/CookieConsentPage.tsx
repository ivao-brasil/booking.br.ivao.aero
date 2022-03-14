import { useContext } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { ActionButton } from "components/button/Button";
import { InformationalLayout } from "layouts/InformationalLayout";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { useText } from 'hooks/useText';

import emoji from './crying_face.svg';
import cookies from './cookies.svg';

export default function CookieConsentPage() {
  const { setCookieConsent } = useContext(CookieConsentContext);
  const { t } = useText();

  return (
    <InformationalLayout
      header={t('cookies.title')}
      description={t('cookies.subtitle')}
      image={
        <img className="w-[31.25rem]" alt="globe" src={cookies} width={500} height={500} />
      }>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
        <div className='flex-1'>
          <ActionButton
            content={t('cookies.authorizeUse')}
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
                <span>{t('cookies.continueWithout')} <img className='inline-block w-4' alt='crying face' src={emoji} /></span>
              </span>
            }
            onClick={() => setCookieConsent(ConsentAnwsers.DECLINED)} />
        </div>
      </div>
    </InformationalLayout>
  );
}
