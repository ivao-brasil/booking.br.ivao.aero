import { LottieFile } from "components/LottieFile";
import { ActionButton } from "components/button/Button";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import { Footer } from "components/Footer";
import { Header, MutedText } from "components/typography/Typography";
import { Logo } from "components/Logo";
import { useNavigate } from "react-router-dom";

export default function ConfirmSlot() {
    const navigate = useNavigate();

    return (
        <div className="container flex flex-col min-h-screen">
            <div className="mt-10 md:mt-14">
                <Logo />
            </div>
            <div className="flex xl:items-center">
                <div className="flex-[1_0_36rem] w-full 2xl-height:pt-[4.5rem] self-start">
                    <div className="flex flex-col items-center md:items-start">
                        <Header textSize="text-2xl md:text-3xl">Tem certeza que quer agendar o voo?</Header>
                        <div className="mt-7 lg:pr-1.5">
                            <MutedText textSize="text-[1.37rem]">
                                Antes de confirmar o agendamento, verifique com atenção todos os detalhes do voo e se ele é o voo desejado.
                            </MutedText>
                        </div>
                        <div className="mx-auto md:mx-0 mt-24 md:mt-12 w-full">
                            <div className="flex">
                                <div className="bg-orange px-5 py-7 rounded-l-lg">
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
                                        width='w-full' />
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
                    <LottieFile src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
