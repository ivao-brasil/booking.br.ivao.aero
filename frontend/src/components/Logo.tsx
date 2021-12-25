import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { FunctionComponent, useContext } from "react";

export const Logo: FunctionComponent = () => {
    const { themeVariant } = useContext(ThemeContext);

    const imgName = themeVariant === ThemeVariants.DARK ? "tag_white.svg" : "tag_blue.svg";
    return (
        <img src={`https://assets.br.ivao.aero/logos/${imgName}`} className="w-54 -ml-5" alt="Logo IVAO Brasil" />
    );
}
