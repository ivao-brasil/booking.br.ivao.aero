import { FunctionComponent, useContext } from "react";
import { Env } from "env";
import { ThemeContext, ThemeVariants } from "context/ThemeContext";


export const Logo: FunctionComponent = () => {
    const { themeVariant } = useContext(ThemeContext);

    const imgUrl = themeVariant === ThemeVariants.DARK ? Env.LOGO_DARK : Env.LOGO_LIGHT;
    return (
        <img src={imgUrl} className="w-54 -ml-5" alt="Logo IVAO Brasil" />
    );
}
