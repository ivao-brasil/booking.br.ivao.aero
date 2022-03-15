import { Translations } from "types/Translations";

const ptBrTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Back to the beginning',
      back: 'Back',
      soon: 'Coming soon...',
      see: 'See'
    },
    footer: {
      copyrightMessage: '© 2021 International Virtual Aviation Organisation - IVAO Brazil. All Rights Reserved.',
      privacyPolicyName: 'Privacy Policy',
      termsOfUseName: 'Terms of Use',
    },
    beta: {
      title: 'BETA SYSTEM',
      message: '𝗞𝗥𝗢𝗡𝗢𝗦 is a recently launched system and is under constant development. We count on you to report any bugs you find 🐛.'
    },
    cookies: {
      title: 'We use cookies to improve your experience',
      subtitle: 'We need your permission to keep on making our wonderful gingersnaps!',
      authorizeUse: 'Allow us to use cookies',
      continueWithout: 'Continue without cookies',
    },
    errors: {
      general: {
        title: 'Houston, we have a problem! 💥',
        subtitle: 'We are sorry, but our systems indicate some failures on the navigation computer. Reload the page or try again later.',
      },
      notFound: {
        title: "Oh noo...This page has been abducted by aliens! 👽",
        subtitle: 'I think you reached the limit of our universe. The page you called for has not been found.'
      }
    },
    splash: {
      title: 'Experience the best that flight simulation has to offer!',
      subtitle: 'Manage your bookings on a modern, fast and intuitive way.',
      explore: 'Explore Flights!'
    },
    events: {
      found_zero: 'No events here, check again later.',
      found_one: '{{ count }} event found',
      found_other: '{{ count }} events found'
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
            description: 'Microsoft Flight Simulator X (abreviado como FSX) é um simulador de voo de 2006, originalmente desenvolvido pela Aces Game Studio e publicado pela Microsoft Game Studios para Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D (pronounced “prepared”) is a visual simulation platform that allows users to create training scenarios across aviation, maritime and ground domains.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator (colloquially known as MS2020) is an amateur flight simulator developed by Asobo Studio and published by Xbox Game Studios. It is an entry in the Microsoft Flight Simulator series which began in 1982, and was preceded by Microsoft Flight Simulator X in 2006.'
          },
          xp11: {
            description: 'X-Plane 11 is the detailed, realistic, and modern simulator you’ve been waiting for. '
          }
        },
      },
    },
    flights: {
      search: 'Search Flights',
      arrival_zero: 'Nenhuma chegada',
      arrival_one: 'Arrival',
      arrival_other: 'Arrivals',
      departure_zero: 'Nenhuma partida',
      departure_one: 'Departure',
      departure_other: 'Departures',
      privateSlots: 'Private Slots',
      flightNumber: 'Flight Number',
      eobt: 'EOBT',
      gate: 'Stand',
      bookFlight: 'Book Flight',
      filter: {
        call: 'Filter Table',
        title: 'Filter',
        aircraft: 'Aircraft',
        airline: 'Airline',
        origin: 'Origin',
        destination: 'Destination',
        showAvailableOnly: 'Show only available flights',
        reset: 'Reset Filters',
        apply: 'Apply Filters'
      },
      error: {
        noFlightsFound: {
          title: 'Too late 😓... Looks like there is nothing else here for you...',
          subtitle: 'The data might not exist in our system. Check the applied filters or try again later.'
        },
        unableToBook: {
          title: 'We are unable to book this flight...',
          subtitle: 'The data might not exist in our system, or this flight has already been booked by another pilot.'
        },
      } 
    },
    notification: {
      scheduleConfirmation: {
        title: 'Are you sure you want to schedule this flight?',
        subtitle: 'Before confirming, take a look at the details and make sure that this is the flight you want.',
        alert: 'Scheduling does not mean your flight is booked. You need to confirm your schedule between three to seven days before the event. Your schedule will be cancelled if you do not confirm at least 72 hours before the flight.',
        button: 'Schedule'
      },
      scheduled: {
        title: 'Flight Scheduled!',
        subtitle: 'Remember: you must confirm the schedule between three to seven days before the event. Your schedule will be cancelled if you do not confirm at least 72 hours before the flight.'
      },
      booked: {
        title: 'Flight Booked!',
        subtitle: 'Your flight has been confirmed sucesfully. Get your flight plan and aircraft ready, make sure you comply with your timing and gate number and, most important of all: have fun!',
      },
      cancelled: {
        title: 'Schedule Cancelled!',
        subtitle: 'Your schedule has been cancelled. We are sorry to see you go... Maybe another time?'
      }
    },
    myFlights: {
      title: 'My flights',
      subtitle: 'See your whole schedule',
      search: 'Find Schedule',
      pilotBriefing: {
        title: 'Pilot Briefing',
        description: 'This document provides guidance for pilots and cabin crew about specific procedures for this event. Reading it is required.',
      },
      boardingPass: {
        cancelFlight: 'Cancel Flight',
        confirmFlight: 'Confirm Flight',
        disclaimer: 'To fly on the event, you must comply with all instructions made available on the pilot briefing.',
        waitToConfirm: 'Wait to confirm flight.'
      }
    }
  },
};

export default ptBrTranslations;