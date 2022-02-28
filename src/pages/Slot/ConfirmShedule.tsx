import { ActionButton } from "components/button/Button";
import { Footer } from "components/Footer";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { Logo } from "components/Logo";
import { Header, MutedText } from "components/typography/Typography";
import { useSlotBookMutation } from "hooks/slots/useSlotBookMutation";
import { useEffect } from "react";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { PrivateSlotScheduleData, SlotBookActions } from "types/Slot";
import globe from './globe.svg';

const PRIVATE_SLOT_URL_PARAMS = ["flightNumber", "aircraft", "origin", "destination"];

export default function ConfirmSchedule() {
    const { eventId, slotId } = useParams();
    const bookMutation = useSlotBookMutation(SlotBookActions.BOOK);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const isPrivateSlot = () => {
        return PRIVATE_SLOT_URL_PARAMS.find(urlParamKey => searchParams.get(urlParamKey) !== null) !== undefined;
    }

    const extractSlotParamsFromUrl = () => {
        const result: PrivateSlotScheduleData = {
            flightNumber: "",
            aircraft: "",
            origin: "",
            destination: ""
        };

        PRIVATE_SLOT_URL_PARAMS.forEach(urlParamKey => {
            if (!(urlParamKey in result)) {
                return;
            }

            const urlParamValue = searchParams.get(urlParamKey)?.toUpperCase();
            result[urlParamKey as keyof PrivateSlotScheduleData] = urlParamValue || "";
        });

        return result;
    }

    const bookSlot = () => {
        const mutationParams = {
            slotId: Number(slotId),
            eventId: Number(eventId),
        }

        if (isPrivateSlot()) {
            const privateSlotData = extractSlotParamsFromUrl();
            bookMutation.mutate({ ...mutationParams, privateSlotData });
        } else {
            bookMutation.mutate(mutationParams);
        }
    }

    useEffect(() => {
        if (bookMutation.isSuccess) {
            navigate("/slot/scheduled", {
                state: {
                    eventId: bookMutation.variables?.eventId
                }
            });
        }
    }, [bookMutation.isSuccess, bookMutation.variables, navigate]);

    useEffect(() => {
        if (bookMutation.isError) {
            navigate(`/event/${eventId}/slots`, { state: { hasError: true } });
        }
    }, [bookMutation.isError, eventId, navigate]);

    if (bookMutation.isLoading) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <div className="container flex flex-col min-h-screen">
            <div className="mt-10 md:mt-14">
                <Logo />
            </div>
            <div className="flex xl:items-center gap-28">
                <div className="md:flex-[1_0_36rem] w-full 2xl-height:pt-[4.5rem] self-start">
                    <div className="flex flex-col items-center md:items-start">
                        <Header textSize="text-2xl md:text-3xl">Tem certeza que quer agendar o voo?</Header>
                        <div className="mt-7 lg:pr-1.5">
                            <MutedText textSize="text-[1.37rem]">
                                Antes de confirmar o agendamento, verifique com atenção todos os detalhes do voo e se ele é o voo desejado.
                            </MutedText>
                        </div>
                        <div className="mx-auto md:mx-0 mt-24 md:mt-12 w-full">
                            <div className="flex">
                                <div className="bg-orange px-5 py-7 rounded-l-lg text-white">
                                    <FiAlertTriangle size={43} />
                                </div>
                                <p className="bg-brown/10 text-orange dark:text-white py-2 pl-4 pr-3 rounded-r-lg text-sm">
                                    Agendar não significa que a reserva foi confirmada, mas que o status do seu voo constará como <b><i>scheduled</i></b>.
                                    Você deverá confirmar a reserva entre <b>sete</b> e <b>três dias</b> antes da data do evento – seu agendamento será <b>cancelado</b> se você
                                    não confirmar o voo até 72 horas antes do horário do voo.
                                </p>
                            </div>

                            <div className='flex flex-col mt-12 md:flex-row space-y-4 md:space-y-0'>
                                <div className='flex-1'>
                                    <ActionButton
                                        content='Confirmar reserva'
                                        icon={<FiCheck size={20} />}
                                        width='w-full'
                                        onClick={() => bookSlot()} />
                                </div>
                                <div className='flex-1'>
                                    <ActionButton
                                        backgroundFilled={false}
                                        width='w-full'
                                        content="Voltar"
                                        onClick={() => navigate(-1)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block w-full max-w-[28rem] 2xl-height:max-w-130 mx-auto">
                    <img className="w-[30rem]" alt="globe" src={globe} width={430} height={466} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
