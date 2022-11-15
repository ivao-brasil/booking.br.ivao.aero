import { Translations } from "types/Translations";

const ptTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Voltar ao início',
      back: 'Voltar',
      soon: 'Em breve...',
      see: 'Visualizar'
    },
    footer: {
      copyrightMessage: '© 2021 International Virtual Aviation Organisation - IVAO Brazil. All Rights Reserved.',
      privacyPolicyName: 'Política de Privacidade',
      termsOfUseName: 'Termos de uso',
    },
    beta: {
      title: 'Sistema em beta',
      message: 'O 𝗞𝗥𝗢𝗡𝗢𝗦 é um sistema recém-implementado na divisão e em constante desenvolvimento. Contamos com a sua colaboração para comunicar eventuais bugs 🐛.'
    },
    cookies: {
      title: 'Utilizamos cookies para melhorar a sua experiência',
      subtitle: 'Precisamos da sua autorização para continuar com a nossa maravilhosa receita de biscoitos de gengibre.',
      authorizeUse: 'Autorizar o uso',
      continueWithout: 'Continuar sem cookies',
    },
    errors: {
      general: {
        title: 'Houston, temos um problema! 💥',
        subtitle: 'Nossos sistemas indicam uma falha no computador de bordo. Recarregue a página ou tente novamente mais tarde.',
      },
      notFound: {
        title: 'Vish... Essa página foi abduzida por aliens! 👽',
        subtitle: 'Acho que você chegou ao limite do universo. A página que você requisitou não foi encontrada.'
      },
      admin: {
        noAdmin: 'Você não tem privilégios de administrador.',
        eventFinished: 'Esse evento foi finalizado e não pode ser alterado.',
        wrongDivision: 'Esse evento não pertence a sua divisão.',
        isActive: 'Esse evento está ativo e não pode ser alterado.',
        updateAdmin: 'Você não pode alterar outro administrador.',
        updateYourself: 'Você não pode alterar a si mesmo.'
      },
      book: {
        suspended: 'Você está suspenso no sistema e não pode reservar voos.',
        notOwner: 'Você não é o dono desse slot.',
        notActive: 'Esse evento não está ativo.',
        tooEarly: 'Esse slot só pode ser confirmado 7 dias antes do início do evento.',
        alreadyBusy: 'Você já tem um slot reservado nesse mesmo horário.',
        hasStarted: 'Esse evento já começou.',
        hasEnded: 'Esse evento já foi encerrado.',
        notFound: 'Slot não encontrado.',
        duplicateNumber: 'Já existe um voo com esse número.',
        notPreBooked: 'Você não pode confirmar um slot que não está reservado.'
      },
      auth: {
        error: 'Erro ao autenticar o usuário.'
      },
      event: {
        notFound: 'Evento não encontrado.'
      },
      scenery: {
        notFound: 'Cenário não encontrado.'
      },
      aircraft: {
        notFound: 'Aeronave não encontrada.'
      },
      user: {
        notFound: 'Usuário não encontrado.'
      },
      airport: {
        notFound: 'Não encontramos o aeroporto que você está tentando reservar. Confira o código ICAO e tente novamente.'
      },
    },
    splash: {
      title: 'Experimente o melhor que a simulação aérea tem a oferecer',
      subtitle: 'Gerencie sua reserva de voos de uma maneira fácil, moderna e intuitiva.',
      explore: 'Explorar Voos!'
    },
    events: {
      found_zero: 'Nenhum evento encontrado. Volte aqui mais tarde.',
      found_one: '{{ count }} evento encontrado',
      found_other: '{{ count }} eventos encontrados',
      soon: 'Em breve...'
    },
    info: {
      pilotBriefing: {
        title: 'Briefing do Piloto',
        description: 'Este documento objetiva orientar os pilotos e tripulação sobre os procedimentos específicos esperados para este evento. A leitura é fundamental.',
      },
      atcBriefing: {
        title: 'Briefing do Controlador de Voo',
        description: 'Este documento objetiva orientar os controladores sobre os procedimentos específicos esperados para este evento. A leitura é fundamental.',
      },
      sceneries: {
        title: 'Cenários',
        description: 'Encontre aqui os cenários recomendados para este evento.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator 2004: A Century of Flight é um videogame de simulação de vôo lançado em 2003 e faz parte da série de videogames Microsoft Flight Simulator.'
          },
          fsx: {
            description: 'Microsoft Flight Simulator X (abreviado como FSX) é um simulador de voo de 2006, originalmente desenvolvido pela Aces Game Studio e publicado pela Microsoft Game Studios para Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D é uma plataforma de simulação visual que permite aos usuários criar cenários de treinamento em domínios de aviação, marítimo e terrestre.'
          },
          msfs: {
            description: 'MSFS 2020 é um jogo eletrônico de simulação de vôo desenvolvido pela Asobo Studio e publicado pela Xbox Game Studios para Microsoft Windows, Xbox One, Xbox Series X e S.'
          },
          xp11: {
            description: 'X-Plane 11 é o simulador detalhado, realista e moderno. Interface de usuário intuitiva, cockpits 3D, novos efeitos, som 3D, aeroportos vivos e cenário mundial.'
          }
        },
      },
    },
    flights: {
      search: 'Buscar voo',
      arrivals: 'Chegadas',
      departures: 'Partidas',
      privateSlots: 'Slots Privados',
      flightNumber: 'Número do Voo',
      eobt: 'EOBT',
      gate: 'Posição',
      bookFlight: 'Reservar voo',
      loadMore: 'Carregar mais voos',
      filter: {
        call: 'Filtrar Tabela',
        title: 'Filtrar',
        aircraft: 'Aeronave',
        airline: 'Companhia',
        origin: 'Origem',
        destination: 'Destino',
        showAvailableOnly: 'Mostrar apenas voos disponíveis',
        reset: 'Resetar os filtros',
        apply: 'Aplicar os filtros'
      },
      error: {
        noFlightsFound: {
          title: 'Parece que já não há mais nada para você aqui...',
          subtitle: 'Esses dados podem não existir no nosso sistema, verifique os filtros aplicados ou tente novamente mais tarde.'
        },
        unableToBook: {
          title: 'Não foi possível agendar esse voo...',
          subtitle: 'Esses dados podem não existir no nosso sistema ou já foram reservados por outro piloto.'
        },
      }
    },
    notification: {
      scheduleConfirmation: {
        title: 'Tem certeza que quer agendar o voo?',
        subtitle: 'Antes de confirmar o agendamento, verifique com atenção todos os detalhes do voo e se ele é o voo desejado.',
        alert: 'Agendar não significa que a reserva foi confirmada, mas que o status do seu voo constará como scheduled. Você deverá confirmar a reserva entre sete e três dias antes da data do evento – seu agendamento será cancelado se você não confirmar o voo até 72 horas antes do horário do voo.',
        button: 'Agendar'
      },
      scheduled: {
        title: 'Voo agendado!',
        subtitle: 'Você deverá confirmar a reserva entre sete e três dias antes da data do evento – seu agendamento será cancelado se você não confirmar o voo até 72 horas antes do horário do voo.'
      },
      booked: {
        title: 'Agendamento confirmado!',
        subtitle: 'Seu voo foi confirmado com sucesso. Prepare seu plano de voo e sua aeronave, assegure-se de cumprir com o slot designado e, mais importante: divirta-se!',
      },
      cancelled: {
        title: 'Agendamento cancelado!',
        subtitle: 'Seu voo foi cancelado. Estamos tristes em vê-lo partir. Quem sabe em uma próxima oportunidade?'
      }
    },
    myFlights: {
      title: 'Meus voos',
      subtitle: 'Visualize seus agendamentos',
      search: 'Buscar agendamento',
      pilotBriefing: {
        title: 'Briefing do Piloto',
        description: 'Este documento objetiva orientar os pilotos e tripulação sobre os procedimentos específicos esperados para este evento. A leitura é fundamental.',
      },
      boardingPass: {
        cancelFlight: 'Cancelar voo',
        cancelFlightConfirmation: 'Tem certeza que quer cancelar esse voo?',
        confirmFlight: 'Confirmar voo',
        disclaimer: 'Para participar do evento você deve estar ciente e disposto a cumprir todas as orientações disponíveis no briefing do piloto',
        waitToConfirm: 'Aguarde para confirmar o voo.'
      }
    },
    sidebarPanel: {
      information: 'Informações gerais',
      flights: 'Procurar voos',
      myFlights: 'Meus voos',
      changeTheme: 'Mudar tema do painel',
      logout: 'Sair',
      eventsHome: 'Ver lista de eventos'
    },
  },
};

export default ptTranslations;