import { FunctionComponent } from "react";
import { FooterText } from "components/typography/Typography";
import { useText } from "hooks/useText";

export const Footer: FunctionComponent = () => {
    const { t } = useText();

    return (
        <footer className="mt-28 mb-4 xl-height:mt-auto text-center z-10 ">
            <FooterText>{t('footer.copyrightMessage')}</FooterText>
            <div>
                <FooterText>
                    <a 
                        className="underline" 
                        href="https://wiki.ivao.aero/home/ivao/privacypolicy" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {t('footer.privacyPolicyName')}
                    </a>
                    &nbsp;|&nbsp;
                    <a 
                        className="underline" 
                        href="https://wiki.ivao.aero/home/ivao/terms-of-use" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {t('footer.termsOfUseName')}
                    </a>
                </FooterText>
            </div>

        </footer>
    )

};