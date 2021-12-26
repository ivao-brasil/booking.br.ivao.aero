import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { FunctionComponent, isValidElement, ReactNode } from "react";
import { Header, MutedText } from "components/typography/Typography";

interface InformationalLayoutProps {
    header: ReactNode;
    description: ReactNode;
    image?: ReactNode;
    isImageRelativeToText?: boolean;
}

export const InformationalLayout: FunctionComponent<InformationalLayoutProps> = ({ header, description, image, children, isImageRelativeToText = false }) => {
    return (
        <div className="container relative flex flex-col min-h-screen">
            <div className="md:pt-14">
                <Logo />
            </div>
            <div className={`${isImageRelativeToText ? "relative" : "static"} w-full`}>
                <div className="mx-auto md:mx-0 md:max-w-[36rem] mt-8 2xl-height:mt-24">
                    {(isValidElement(header) ? header : <Header>{header}</Header>)}
                    <div className="mt-8 pr-1.5">
                        {(isValidElement(description) ? description : <MutedText>{description}</MutedText>)}
                    </div>
                </div>
                {isImageRelativeToText && image}
            </div>

            <div className="mx-auto md:mx-0 mt-12">
                {children}
            </div>
            {!isImageRelativeToText && image}
            <div className="mt-8 xl-height:mt-auto z-10">
                <Footer />
            </div>
        </div>
    )
};