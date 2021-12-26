import { FunctionComponent } from "react";
import { Player } from '@lottiefiles/react-lottie-player';

export const CookieLottie: FunctionComponent = () => {
    return (
        <div className="hidden xl:block absolute xl:w-1/2 top-0 right-0">
            <Player src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json"/>
        </div>

    );
};