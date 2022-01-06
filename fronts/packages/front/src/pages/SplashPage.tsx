import { LinkButton } from "components/button/Button";
import { LottieFile } from "components/LottieFile";
import { Header, MutedText } from "components/typography/Typography";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent } from "react";
import { FiSearch } from "react-icons/fi";
import {
  Language,
  LanguageDefinition,
  useLanguage,
} from "../hooks/useLanguage";

interface LocalLanguage {
  title: string;
  subTitle: string;
  button: string;
}

const LanguageData: LanguageDefinition<LocalLanguage> = {
  [Language.enUs]: {
    title: "Enjoy the best of simulation can offer you",
    subTitle: "Manage your flight books on easy, modern and intuitive way",
    button: "Explore flights",
  },
  [Language.ptBr]: {
    title: "Experimente o melhor que a simulação aérea tem a oferecer",
    subTitle:
      "Gerencie sua reserva de voos de uma maneira fácil, moderna e intuitiva.",
    button: "Explorar itinerarios",
  },
};

export const SplashPage: FunctionComponent = () => {
  const { languageData } = useLanguage(LanguageData);

  return (
    <InformationalLayout
      header={<Header textSize="text-xl">{languageData.title}</Header>}
      description={
        <div className="md:w-[31rem]">
          <MutedText>{languageData.subTitle}</MutedText>
        </div>
      }
      image={
        <LottieFile src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json" />
      }
    >
      <LinkButton
        icon={<FiSearch size={20} />}
        content={languageData.button}
        href="/events"
      />
    </InformationalLayout>
  );
};
