import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { FunctionComponent } from "react";

export const InformationalLayout: FunctionComponent = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="ml-40 mt-14">
                <Logo />
                <div className="pt-24">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
};