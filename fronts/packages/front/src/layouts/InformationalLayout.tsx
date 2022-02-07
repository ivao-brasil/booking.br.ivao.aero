import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { FunctionComponent, isValidElement, ReactNode } from "react";
import { Header, MutedText } from "components/typography/Typography";

interface InformationalLayoutProps {
    header?: ReactNode;
    description?: ReactNode;
    image?: ReactNode;
}

export const InformationalLayout: FunctionComponent<InformationalLayoutProps> = ({ header, description, image, children }) => {
    return (
        <div className="container flex flex-col min-h-screen">
            <div className="mt-10 md:mt-14">
                <Logo />
            </div>
            <div className={`${image ? "flex xl:items-center" : ""}`}>
                <div className="md:flex-[1_0_34rem] w-full 2xl-height:pt-[4.5rem] self-start">
                    <div className="flex flex-col items-center md:items-start">
                        {(isValidElement(header) ? header : <Header textSize="text-2xl md:text-3xl">{header}</Header>)}
                        <div className="mt-7 lg:pr-1.5">
                            {(isValidElement(description) ? description : <MutedText>{description}</MutedText>)}
                        </div>
                        <div className="mx-auto md:mx-0 mt-24 md:mt-12 w-full">
                            {children}
                        </div>
                    </div>
                </div>
                {image && (<div className="hidden xl:block w-full max-w-[28rem] 2xl-height:max-w-130 mx-auto">{image}</div>)}
            </div>
            <Footer />
        </div>
    )
};