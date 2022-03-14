import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { FunctionComponent, isValidElement, ReactNode } from "react";
import { Header, MutedText } from "components/typography/Typography";

interface InformationalLayoutProps {
    header?: ReactNode;
    alert?: ReactNode;
    description?: ReactNode;
    image?: ReactNode;
}

export const InformationalLayout: FunctionComponent<InformationalLayoutProps> = ({ header, description, image, alert, children }) => {

    return (
        <div className="container flex flex-col min-h-screen">
            <div className="flex flex-col md:flex-row mt-10 md:mt-14">
                <Logo />
                <div className="my-3 md:my-0 md:ml-20 lg:ml-auto">
                    {alert}
                </div>
            </div>
            <div className={`${image ? "flex xl:items-center" : ""} mt-auto 2xl-height:mt-[4.5rem]`}>
                <div className="md:flex-[1_0_34rem] w-full self-start">
                    <div className="flex flex-col items-center md:items-start">
                        {(isValidElement(header) ? header : <Header textSize="text-2xl md:text-3xl">{header}</Header>)}
                        <div className="mt-7 lg:pr-1.5">
                            {(isValidElement(description) ? description : <MutedText>{description}</MutedText>)}
                        </div>
                        <div className="mx-auto md:mx-0 my-6 md:my-0 md:mt-12 w-full">
                            {children}
                        </div>
                    </div>
                </div>
                {image && (
                    <div className="hidden xl:block max-w-[28rem] 2xl-height:max-w-130 ml-auto">
                        {image}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
};