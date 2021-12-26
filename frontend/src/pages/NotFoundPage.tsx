import { LinkButton } from "components/button/Button";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent, useContext } from "react";
import { FiHome } from "react-icons/fi";

export const NotFoundPage: FunctionComponent = () => {
  return (
    <InformationalLayout
      header='Seu voo para Magrathea não foi encontrado...'
      description='Acho que você chegou ao limite do universo. A página que você requisitou não foi encontrada.'>
      <div className="mx-auto md:mx-0 mt-12">
        <LinkButton icon={<FiHome size={20} />} content='Voltar ao início' href='/' />
      </div>
    </InformationalLayout>
  )
};
