import { FooterText } from "components/typography/Typography";
import { Language, LanguageDefinition, useLanguage } from "hooks/useLanguage";
import { FunctionComponent } from "react";

interface LocalLanguage {
  privacyPolicy: string;
  termsOfUse: string;
}

const LanguageData: LanguageDefinition<LocalLanguage> = {
  [Language.enUs]: {
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
  },
  [Language.ptBr]: {
    privacyPolicy: "Política de privacidade",
    termsOfUse: "Termos de uso",
  },
};

export const Footer: FunctionComponent = () => {
  const { languageData } = useLanguage(LanguageData);

  return (
    <footer className="text-center mb-4">
      <FooterText>
        © 2021 International Virtual Aviation Organisation - IVAO Brazil.
      </FooterText>
      <div>
        <FooterText>
          <a
            className="underline"
            href="https://wiki.ivao.aero/home/ivao/privacypolicy"
            target="_blank"
            rel="noreferrer"
          >
            {languageData.privacyPolicy}
          </a>
          &nbsp; |&nbsp;
          <a
            className="underline"
            href="https://wiki.ivao.aero/home/ivao/terms-of-use"
            target="_blank"
            rel="noreferrer"
          >
            {languageData.termsOfUse}
          </a>
        </FooterText>
      </div>
    </footer>
  );
};
