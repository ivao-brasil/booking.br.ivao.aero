import { LinkButton } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent, useContext } from "react";
import { FiAlertTriangle, FiSearch } from "react-icons/fi";
import splashLightImage from './splash-light.svg';
import splashDarkImage from './splash-dark.svg';
import { Alert } from "components/Alert";
import { useText } from "hooks/useText";

export const SplashPage: FunctionComponent = () => {
    const themeContext = useContext(ThemeContext);
    const { t } = useText();

    return (
        <InformationalLayout
            header={<Header textSize="text-2xl">{t('splash.title')}</Header>}
            description={
                <>
                    <div className="md:w-[31rem]">
                        <MutedText>{t('splash.subtitle')}</MutedText>
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
                    title={t('beta.title')}
                    content={t('beta.message')}
                    icon={<FiAlertTriangle size={20} />}
                    backgroundColors={{ icon: "bg-orange/80", title: "bg-orange", content: "bg-orange/20" }}
                    contentTextColor="text-orange"
                />
            }
        >
            <LinkButton icon={<FiSearch size={20} />} content={t('splash.explore')} href="/events" />
        </InformationalLayout>
    )
};
