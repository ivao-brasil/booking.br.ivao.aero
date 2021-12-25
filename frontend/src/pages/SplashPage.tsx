import { LinkButton } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { InformationalLayout } from "layouts/InformationalLayout";
import { FunctionComponent } from "react";
import { FiSearch } from "react-icons/fi";

export const SplashPage: FunctionComponent = () => {
    return (
        <InformationalLayout
            header={<Header textSize="text-lg">Experimente o melhor que a simulação aérea tem a oferecer</Header>}
            description={
                <div className="w-[31rem]">
                    <MutedText>Gerencie sua reserva de voos de uma maneira fácil, moderna e intuitiva.</MutedText>
                </div>
            }>
            <LinkButton icon={<FiSearch size={20} />} content='Explorar itinerarios' href="/events" />
        </InformationalLayout>
    )
};