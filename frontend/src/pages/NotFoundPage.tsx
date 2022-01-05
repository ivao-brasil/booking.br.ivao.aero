import { LinkButton } from "components/button/Button";
import { LottieFile } from "components/LottieFile";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent } from "react";
import { FiHome } from "react-icons/fi";

export const NotFoundPage: FunctionComponent = () => {
  return (
    <InformationalLayout
      header='Seu voo para Magrathea não foi encontrado...'
      description='Acho que você chegou ao limite do universo. A página que você requisitou não foi encontrada.'
      image={<LottieFile src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json" />}>
      <LinkButton icon={<FiHome size={20} />} content='Voltar ao início' href='/' />
    </InformationalLayout>
  )
};
