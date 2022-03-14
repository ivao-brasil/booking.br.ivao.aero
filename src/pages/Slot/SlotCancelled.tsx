import { LinkButton } from "components/button/Button";
import { MutedText } from "components/typography/Typography";
import { useText } from "hooks/useText";
import { SlotInformationLayout } from "layouts/SlotInformationLayout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import trashRed from './trash-red.svg';

export default function SlotCancelled() {
    const [eventId, setEventId] = useState<number>();
    const navigate = useNavigate();
    const { t } = useText();
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
            header= { t('notification.cancelled.title') }
            description={(
                <MutedText textSize="text-[18px]">
                    { t('notification.cancelled.subtitle') }
                </MutedText>
            )}
            image={<img width={183} height={183} src={trashRed} alt="Símbolo cancelamento agendamento" />}
            actions={
                <LinkButton
                    content={ t('generics.back') }
                    width="w-44"
                    backgroundColor="bg-[#858585] dark:bg-[#525252]"
                    href={`/event/${eventId}/my-slots`} />
            }
        >

        </SlotInformationLayout>
    )
}