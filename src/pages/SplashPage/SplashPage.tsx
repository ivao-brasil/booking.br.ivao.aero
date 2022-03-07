import { LinkButton } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent, useContext } from "react";
import { FiAlertTriangle, FiSearch } from "react-icons/fi";
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
                    title="SISTEMA EM BETA"
                    content={
                        <>
                            O <strong>KRONOS</strong> é um sistema recém implantado na divisão e em constante desenvolvimento. Contamos com a sua colaboração com eventuais bugs 🐛.
                        </>
                    }
                    icon={<FiAlertTriangle size={20} />}
                    backgroundColors={{ icon: "bg-orange/80", title: "bg-orange", content: "bg-orange/20" }}
                    contentTextColor="text-orange"
                />
            }
        >
            <LinkButton icon={<FiSearch size={20} />} content='Explorar itinerários' href="/events" />
        </InformationalLayout>
    )
};
