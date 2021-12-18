import { FunctionComponent } from "react";
import { FooterText } from "components/typography/Typography";

export const Footer: FunctionComponent = () => (
    <footer className="text-center mb-4">
        <FooterText>
            © 2021 International Virtual Aviation Organisation - IVAO Brazil.
        </FooterText>
        <div>
            <FooterText>
                <a className="underline" href="#">Privacy Policy</a> | <a className="underline" href="#">Terms of Use</a>
            </FooterText>
        </div>

    </footer>

);