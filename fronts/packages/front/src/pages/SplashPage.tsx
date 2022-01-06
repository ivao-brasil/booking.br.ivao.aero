import { LinkButton } from "components/button/Button";
import { LottieFile } from "components/LottieFile";
import { Header, MutedText } from "components/typography/Typography";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent } from "react";
import { FiSearch } from "react-icons/fi";

export const SplashPage: FunctionComponent = () => {
    return (
        <InformationalLayout
            header={<Header textSize="text-2xl">Experimente o melhor que a simulação aérea tem a oferecer</Header>}
            description={
                <div className="md:w-[31rem]">
                    <MutedText>Gerencie sua reserva de voos de uma maneira fácil, moderna e intuitiva.</MutedText>
                </div>
            }
            image={<LottieFile src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json" />}>
            <LinkButton icon={<FiSearch size={20} />} content='Explorar itinerarios' href="/events" />
        </InformationalLayout>
    )
};