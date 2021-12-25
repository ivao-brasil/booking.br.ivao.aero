import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { FunctionComponent } from "react";

export const InformationalLayout: FunctionComponent = ({ children }) => {
    return (
        <div className="dark:bg-black">
            <div className="flex flex-col min-h-screen">
                <div className="container md:pl-40 md:pt-14">
                    <Logo />
                    <div className="md:w-34 mt-8 2xl-height:mt-24">
                        {children}
                    </div>
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </div>
    )
};