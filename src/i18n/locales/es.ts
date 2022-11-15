import { Translations } from "types/Translations";

const esTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Volver al inicio',
      back: 'Volver',
      soon: 'Pronto...',
      see: 'Ver'
    },
    footer: {
      copyrightMessage: '© 2021 International Virtual Aviation Organisation - IVAO Brazil. All Rights Reserved.',
      privacyPolicyName: 'Politica de Privacidad',
      termsOfUseName: 'Terminos de uso',
    },
    beta: {
      title: 'SISTEMA EN BETA',
      message: '𝗞𝗥𝗢𝗡𝗢𝗦 Esto es un nuevo sistema lanzado recientemente y está en constante desarrollo. Contamos contigo para reportar cualquier error que encuentres 🐛.'
    },
    cookies: {
      title: 'Usamos cookies para mejorar tu experiencia',
      subtitle: '¡Necesitamos su permiso para seguir haciendo uso nuestros cookies!',
      authorizeUse: 'Autorizanos a usar nuestras cookies',
      continueWithout: 'Continuar sin cookies',
    },
    errors: {
      general: {
        title: 'Houston, tenemos un problema! 💥',
        subtitle: 'Lo sentimos, pero nuestros sistemas indican algunas fallas en la computadora de navegación. Vuelve a cargar la página o intenta lo más tarde.',
      },
      notFound: {
        title: "Oh noo... ¡Esta página ha sido secuestrada por extraterrestres! 👽",
        subtitle: 'Creo que llegaste al límite de nuestro universo. No se ha encontrado la página que buscas'
      },
      admin: {
        noAdmin: 'No eres un administrador.',
        eventFinished: 'Este evento ha finalizado y no se puede editar.',
        wrongDivision: 'Este evento no es de su división.',
        isActive: 'Este evento está activo y no se puede editar.',
        updateAdmin: 'No puedes Editarlo, es de otro Administrador.',
        updateYourself: 'No puedes Editarlo.'
      },
      book: {
        suspended: 'Estás suspendido del sistema y no puedes reservar.',
        notOwner: 'No tienes permiso para estar aqui.',
        notActive: 'Este evento no está activo.',
        tooEarly: 'Debes confirmar 7 dias antes del evento',
        alreadyBusy: 'Ya has reservado',
        hasStarted: 'Este evento ya empezó.',
        hasEnded: 'Este evento ya se terminó.',
        notFound: 'No encontrado',
        duplicateNumber: 'Ya existe un vuelo con el mismo número.',
        notPreBooked: 'Primero debes Reservar'
      },
      auth: {
        error: 'Error al autenticar el usuario.'
      },
      event: {
        notFound: 'Evento no encontrado.'
      },
      scenery: {
        notFound: 'Escenario no encontrado.'
      },
      aircraft: {
        notFound: 'Aeronave no encontrada.'
      },
      user: {
        notFound: 'Usuario no encontrado.'
      },
      airport: {
        notFound: 'No pudimos encontrar el aeropuerto desde o hacia el que intenta volar. Verifique los códigos ICAO y vuelva a intentarlo.'
      },
    },
    splash: {
      title: '¡Experimenta lo mejor que la simulación de vuelo tiene para ofrecer!',
      subtitle: 'Gestiona tus reservas de una forma moderna, rápida e intuitiva.',
      explore: '¡Explora!'
    },
    events: {
      found_zero: 'No hay eventos aquí, vuelva a consultar más tarde.',
      found_one: '{{ count }} evento encontrado',
      found_other: '{{ count }} eventos encontrados',
      soon: 'Pronto...'
    },
    info: {
      pilotBriefing: {
        title: 'Briefing de Piloto',
        description: 'Este documento proporciona orientación para pilotos y tripulantes de cabina sobre procedimientos específicos para este evento. Leerlo es obligatorio.',
      },
      atcBriefing: {
        title: 'Briefing de ATC',
        description: 'Este documento proporciona orientación para los controladores de tránsito aéreo sobre los procedimientos específicos para este evento. Leerlo es obligatorio.',
      },
      sceneries: {
        title: 'Escenarios',
        description: 'Aquí puedes encontrar escenarios recomendados para este evento.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator 2004: A Century of Flight es un simulador de vuelo lanzado en 2003 y forma parte de la serie de simuladores Microsoft Flight Simulator..'
          },
          fsx: {
            description: 'Microsoft Flight Simulator Xes un simulador de vuelo de 2006 desarrollado originalmente por Aces Game Studio y publicado por Microsoft Game Studios para Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D  es una plataforma de simulación visual que permite a los usuarios crear escenarios de entrenamiento en los dominios de aviación, marítimo y terrestre.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator (coloquialmente conocido como MS2020) es un simulador de vuelo amateur desarrollado por Asobo Studio y publicado por Xbox Game Studios. Es una entrada en la serie Microsoft Flight Simulator que comenzó en 1982 y fue precedida por Microsoft Flight Simulator X en 2006.'
          },
          xp11: {
            description: 'X-Plane 11 es el simulador detallado, realista y moderno que estabas esperando.'
          }
        },
      },
    },
    flights: {
      search: 'Buscar vuelos',
      arrivals: 'Llegadas',
      departures: 'Salidas',
      privateSlots: 'Zona VIP',
      flightNumber: 'Numero de Vuelo',
      eobt: 'EOBT',
      gate: 'Puerta',
      bookFlight: 'Libro de Vuelo',
      loadMore: 'Mas Vuelos',
      filter: {
        call: 'Tabla de filtros',
        title: 'Filtro',
        aircraft: 'Aeronave',
        airline: 'Aerolinea',
        origin: 'Origen',
        destination: 'Destino',
        showAvailableOnly: 'Mostrar solo vuelos disponibles',
        reset: 'Limpiar filtros',
        apply: 'Aplicar filtros'
      },
      error: {
        noFlightsFound: {
          title: 'Demasiado tarde 😓... Parece que aquí no hay más nada para ti...',
          subtitle: 'Es posible que los datos no existan en nuestro sistema. Compruebe los filtros aplicados o intentente nuevamente más tarde.'
        },
        unableToBook: {
          title: 'No podemos reservar este vuelo...',
          subtitle: 'Es posible que los datos no existan en nuestro sistema, o que este vuelo ya haya sido reservado por otro piloto.'
        },
      }
    },
    notification: {
      scheduleConfirmation: {
        title: '¿Estás seguro de que quieres reservar este vuelo?',
        subtitle: 'Antes de confirmar, mira los detalles, y asegúrate de que ese es el vuelo que deseas.',
        alert: 'La programación no significa que su vuelo esté reservado. Debe confirmar su horario entre tres y siete días antes del evento. Su horario será cancelado si no confirma, en al menos, 72 horas antes del vuelo.',
        button: 'Schedule'
      },
      scheduled: {
        title: 'Vuelo Reservado!',
        subtitle: 'Recuerda: debes confirmar el horario entre tres a siete días antes del evento. Su horario será cancelado si no confirma, en al menos, 72 horas antes del vuelo.'
      },
      booked: {
        title: 'Vuelo Reservado!',
        subtitle: 'Su vuelo ha sido confirmado con éxito. Prepara tu plan de vuelo y aeronave, asegúrate de cumplir con tu tiempo y número de puerta y, lo más importante de todo: ¡diviértete!',
      },
      cancelled: {
        title: 'Reserva Cancelada!',
        subtitle: 'Su horario ha sido cancelado. Sentimos que te hayas ido... ¿Quizás en otro momento?'
      }
    },
    myFlights: {
      title: 'Mis vuelos',
      subtitle: 'Tus reservas',
      search: 'Encontrar reserva',
      pilotBriefing: {
        title: 'Briefing de Piloto',
        description: 'Este documento proporciona orientación para pilotos y tripulantes de cabina sobre procedimientos específicos para este evento. Leerlo es obligatorio.',
      },
      boardingPass: {
        cancelFlight: 'Cancelar Vuelo',
        cancelFlightConfirmation: '¿Estás seguro que deseas cancelar este vuelo?',
        confirmFlight: 'Confirmar el vuelo',
        disclaimer: 'Para volar en el evento, debes cumplir con todas las instrucciones disponibles en el briefing de piloto.',
        waitToConfirm: 'Espere para confirmar el vuelo'
      }
    },
    sidebarPanel: {
      information: 'Información general',
      flights: 'Buscar vuelos',
      myFlights: 'Mis vuelos',
      changeTheme: 'Cambiar el tema actual',
      logout: 'Cerrar sesión',
      eventsHome: 'Ir a la lista de Eventos'
    }
  },
};

export default esTranslations;