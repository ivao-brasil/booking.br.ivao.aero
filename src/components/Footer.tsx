import { FunctionComponent } from "react";
import { FooterText } from "components/typography/Typography";

export const Footer: FunctionComponent = () => (
    <footer className="mt-28 mb-4 xl-height:mt-auto text-center z-10 ">
        <FooterText>
            © 2021 International Virtual Aviation Organisation - IVAO Brazil.
        </FooterText>
        <div>
            <FooterText>
                <a className="underline" href="https://wiki.ivao.aero/home/ivao/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a>&nbsp;
                |&nbsp;<a className="underline" href="https://wiki.ivao.aero/home/ivao/terms-of-use" target="_blank" rel="noreferrer">Terms of Use</a>
            </FooterText>
        </div>

    </footer>

);