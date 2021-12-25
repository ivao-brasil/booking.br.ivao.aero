import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { FunctionComponent, isValidElement, ReactNode } from "react";
import { Header, MutedText } from "components/typography/Typography";

interface InformationalLayoutProps {
    header: ReactNode;
    description: ReactNode;
}

export const InformationalLayout: FunctionComponent<InformationalLayoutProps> = ({ header, description, children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container md:pl-40 md:pt-14">
                <Logo />
                <div className="md:w-[36rem] mt-8 2xl-height:mt-24">
                    {(isValidElement(header) ? header : <Header>{header}</Header>)}
                    <div className="mt-8 pr-1.5">
                    {(isValidElement(description) ? description : <MutedText>{description}</MutedText>)}
                    </div>
                    <div className="mt-12">
                        {children}
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
};