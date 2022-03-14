import { LinkButton } from "components/button/Button";
import { useText } from "hooks/useText";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent } from "react";
import { FiHome } from "react-icons/fi";
import notFound from './not-found.svg';

export const NotFoundPage: FunctionComponent = () => {
  const { t } = useText();
 
  return (
    <InformationalLayout
      header={t('errors.notFound.title')}
      description={t('errors.notFound.subtitle')}
      image={<img className="w-[27.3rem]" alt="globe" src={notFound} width={437} height={480} />}
    >
      <LinkButton icon={<FiHome size={20} />} content={t('generics.backToBeginning')} href='/' />
    </InformationalLayout>
  )
};
