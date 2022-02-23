import { LinkButton } from "components/button/Button";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent } from "react";
import { FiHome } from "react-icons/fi";
import notFound from './not-found.svg';

export const NotFoundPage: FunctionComponent = () => {
  return (
    <InformationalLayout
      header='Seu voo para Magrathea não foi encontrado...'
      description='Acho que você chegou ao limite do universo. A página que você requisitou não foi encontrada.'
      image={<img className="w-[27.3rem]" alt="globe" src={notFound} width={437} height={480} />}
    >
      <LinkButton icon={<FiHome size={20} />} content='Voltar ao início' href='/' />
    </InformationalLayout>
  )
};
