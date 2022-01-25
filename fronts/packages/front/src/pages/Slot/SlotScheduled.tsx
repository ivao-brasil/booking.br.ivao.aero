import { useLocation, useNavigate } from "react-router-dom";
import { MutedText } from "components/typography/Typography";
import { SlotInformationLayout } from "layouts/SlotInformationLayout";
import { useEffect } from "react";

export default function SlotScheduled() {
    const navigate = useNavigate();
    let { state: locationState } = useLocation();
    const locationData = locationState as { slotId: number } | undefined;

    useEffect(() => {
        if (!locationData) {
            navigate("/404", { replace: true });
        }
    }, [navigate, locationData]);

    return (
        <SlotInformationLayout
            header="Voo agendado!"
            description={(
                <MutedText textSize="text-[18px]">
                    Você deverá confirmar a reserva entre <b>sete</b> e <b>três</b> dias antes da data do evento – seu agendamento será <b>cancelado</b> se você não confirmar o voo até 72 horas antes do horário do voo.
                </MutedText>
            )}
            image={<img width={183} height={183} src="https://via.placeholder.com/183" alt="Símbolo confirmação agendamento" />}
        >

        </SlotInformationLayout>
    )
}