import { LinkButton } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import splashLightImage from './splash-light.svg';
import splashDarkImage from './splash-dark.svg';
import { Alert } from "components/Alert";

export const SplashPage: FunctionComponent = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <InformationalLayout
            header={<Header textSize="text-2xl">Experimente o melhor que a simulação aérea tem a oferecer</Header>}
            description={
                <>
                    <div className="md:w-[31rem]">
                        <MutedText>Gerencie sua reserva de voos de uma maneira fácil, moderna e intuitiva.</MutedText>
                    </div>
                </>
            }
            image={
                <img
                    className="w-[29rem]"
                    alt="globe"
                    src={themeContext.themeVariant === ThemeVariants.LIGHT ? splashLightImage : splashDarkImage}
                    width={473}
                    height={420}
                />
            }
            alert={
                <Alert
                    content='Este sistema está em fase "Beta" e algumas funcionalidades podem apresentar falhas.'
                    hasCloseButton={true}
                />
            }
        >
            <LinkButton icon={<FiSearch size={20} />} content='Explorar itinerarios' href="/events" />
        </InformationalLayout>
    )
};
