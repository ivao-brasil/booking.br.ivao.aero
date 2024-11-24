import { LinkButton } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import splashLightImage from './splash-light.svg';
import splashDarkImage from './splash-dark.svg';
import { useText } from "hooks/useText";
import { LanguagesSelector } from "components/LanguagesSelector";

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
            options={[
                <LanguagesSelector />
            ]}
        >
            <LinkButton icon={<FiSearch size={20} />} content={t('splash.explore')} href="/events" />
        </InformationalLayout>
    )
};
