import { Translations } from "types/Translations";

const esEsTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Volver al inicio',
      back: 'Volver',
      soon: 'Pronto...',
      see: 'See'
    },
    footer: {
      copyrightMessage: '© 2021 International Virtual Aviation Organisation - IVAO Brazil. All Rights Reserved.',
      privacyPolicyName: 'Privacy Policy',
      termsOfUseName: 'Terms of Use',
    },
    beta: {
      title: 'SISTEMA EN BETA',
      message: '𝗞𝗥𝗢𝗡𝗢𝗦 is a recently launched system and is under constant development. We count on you to report any bugs you find 🐛.'
    },
    cookies: {
      title: 'Usamos cookies para mejorar tu experiencia',
      subtitle: 'We need your permission to keep on making our wonderful gingersnaps!',
      authorizeUse: 'Allow us to use cookies',
      continueWithout: 'Continue without cookies',
    },
    errors: {
      general: {
        title: 'Houston, tenemos un problema! 💥',
        subtitle: 'We are sorry, but our systems indicate some failures on the navigation computer. Reload the page or try again later.',
      },
      notFound: {
        title: "Oh noo...This page has been abducted by aliens! 👽",
        subtitle: 'I think you reached the limit of our universe. The page you called for has not been found.'
      },
      admin: {
        noAdmin: 'No eres un administrador.',
        eventFinished: 'This event has ended and it cannot be edited.',
        wrongDivision: 'This event is not from your division.',
        isActive: 'This event is active and cannot be edited.',
        updateAdmin: 'You cannot edit another administrator.',
        updateYourself: 'You cannot edit yourself.'
      },
      book: {
        suspended: 'You are suspended from the system and cannot book.',
        notOwner: 'You are not the owner of this slot.',
        notActive: 'Este evento no está activo.',
        tooEarly: 'This slot can only be confirmed 7 days before the event.',
        alreadyBusy: 'You already have a slot booked on the same time.',
        hasStarted: 'Este evento ya empezó.',
        hasEnded: 'Este evento ya se terminó.',
        notFound: 'Slot not found.',
        duplicateNumber: 'There is already a flight with the same flight number.',
        notPreBooked: 'You cannot confirm a slot which is not booked.'
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
        notFound: 'We could not find the airport you are trying to fly from or to. Check the ICAO codes and try again.'
      },
    },
    splash: {
      title: 'Experience the best that flight simulation has to offer!',
      subtitle: 'Manage your bookings on a modern, fast and intuitive way.',
      explore: 'Explore Flights!'
    },
    events: {
      found_zero: 'No events here, check again later.',
      found_one: '{{ count }} evento encontrado',
      found_other: '{{ count }} eventos encontrados',
      soon: 'Soon...'
    },
    info: {
      pilotBriefing: {
        title: 'Pilot Briefing',
        description: 'This document provides guidance for pilots and cabin crew about specific procedures for this event. Reading it is required.',
      },
      atcBriefing: {
        title: 'ATC Briefing',
        description: 'This document provides guidance for air traffic controllers about specific procedures for this event. Reading it is required.',
      },
      sceneries: {
        title: 'Sceneries',
        description: 'Here you can find recommended sceneries for this event.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator 2004: A Century of Flight is a flight simulation video game released in 2003, and is part of the Microsoft Flight Simulator video game series.'
          },
          fsx: {
            description: 'Microsoft Flight Simulator X is a 2006 flight simulation video game originally developed by Aces Game Studio and published by Microsoft Game Studios for Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D (pronounced “prepared”) is a visual simulation platform that allows users to create training scenarios across aviation, maritime and ground domains.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator (colloquially known as MS2020) is an amateur flight simulator developed by Asobo Studio and published by Xbox Game Studios. It is an entry in the Microsoft Flight Simulator series which began in 1982, and was preceded by Microsoft Flight Simulator X in 2006.'
          },
          xp11: {
            description: 'X-Plane 11 is the detailed, realistic, and modern simulator you’ve been waiting for.'
          }
        },
      },
    },
    flights: {
      search: 'Search Flights',
      arrivals: 'Arrivals',
      departures: 'Departures',
      privateSlots: 'Private Slots',
      flightNumber: 'Flight Number',
      eobt: 'EOBT',
      gate: 'Stand',
      bookFlight: 'Book Flight',
      loadMore: 'Load more flights',
      filter: {
        call: 'Tabla de filtros',
        title: 'Filtro',
        aircraft: 'Aeronave',
        airline: 'Aerolinea',
        origin: 'Origen',
        destination: 'Destination',
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

export default esEsTranslations;