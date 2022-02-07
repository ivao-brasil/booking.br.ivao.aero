import { FunctionComponent, isValidElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "components/Footer";
import { Logo } from "components/Logo";
import { Header, MutedText } from "components/typography/Typography";
import { ActionButton } from "components/button/Button";

interface SlotInformationLayoutProps {
    header?: ReactNode;
    description?: ReactNode;
    image?: ReactNode;
}

export const SlotInformationLayout: FunctionComponent<SlotInformationLayoutProps> = ({ header, description, image, children }) => {
    const navigate = useNavigate();

    return (
        <div className="container flex flex-col min-h-screen">
            <div className="mt-10 md:mt-14">
                <Logo />
            </div>
            <div className="flex flex-col items-center text-center mt-12">
                {isValidElement(image) && image}
                <div className="mt-6">
                    {(isValidElement(header) ? header : <Header textSize="text-2xl md:text-3xl">{header}</Header>)}
                </div>
                <div className="mt-8 lg:pr-1.5 max-w-[45rem]">
                    {(isValidElement(description) ? description : <MutedText textSize="text-[18px]">{description}</MutedText>)}
                </div>
                <div className="mt-[74px]">
                    <ActionButton content="Voltar" width="w-44" backgroundColor="bg-[#858585] dark:bg-[#525252]" onClick={() => navigate(-1)} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
