import { LinkButton } from "components/button/Button";
import { MutedText } from "components/typography/Typography";
import { SlotInformationLayout } from "layouts/SlotInformationLayout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import checkGreen from './check-green.svg';

export default function SlotScheduled() {
    const [eventId, setEventId] = useState<number>();
    const navigate = useNavigate();
    let { state: locationState } = useLocation();
    const locationData = locationState as { eventId: number } | undefined;

    useEffect(() => {
        if (!locationData?.eventId) {
            navigate("/404", { replace: true });
        }

        setEventId(locationData?.eventId);
        window.history.replaceState({ eventId: null }, '');
    }, [navigate, locationData]);

    return (
        <SlotInformationLayout
            header="Voo agendado!"
            description={(
                <MutedText textSize="text-[18px]">
                    Você deverá confirmar a reserva entre <b>sete</b> e <b>três</b> dias antes da data do evento – seu agendamento será <b>cancelado</b> se você não confirmar o voo até 72 horas antes do horário do voo.
                </MutedText>
            )}
            image={<img width={183} height={183} src={checkGreen} alt="Símbolo confirmação agendamento" />}
            actions={
                <LinkButton
                    content="Voltar"
                    width="w-44"
                    backgroundColor="bg-[#858585] dark:bg-[#525252]"
                    href={`/event/${eventId}/my-slots`} />
            }
        >

        </SlotInformationLayout>
    )
}