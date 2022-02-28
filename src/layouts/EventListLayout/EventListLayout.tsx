import { FunctionComponent } from "react";
import { Logo } from "components/Logo";
import { Footer } from "components/Footer";
import { LinkButton } from "components/button/Button";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./EventListLayout.module.css";

export const EventListLayout: FunctionComponent = ({ children }) => {
    return (
        <div className={styles.background}>
            <div className="container flex flex-col min-h-screen">
                <div className="mt-8">
                    <div className="flex items-center">
                        <Logo />
                        <div className="hidden md:block ml-auto">
                            <LinkButton icon={<FiArrowLeft size={20} color="#2EC662" />} backgroundFilled={false} content='Voltar para o início' href="/" />
                        </div>
                    </div>
                </div>
                <div className="mt-14 lg:my-14">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}