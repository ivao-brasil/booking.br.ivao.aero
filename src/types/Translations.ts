export interface Translations {
  generics: {
    backToBeginning: string,
    back: string,
    soon: string
  },
  footer: {
    copyrightMessage: string,
    privacyPolicyName: string,
    termsOfUseName: string
  },
  beta: {
    title: string,
    message: string
  },
  cookies: {
    title: string,
    subtitle: string,
    authorizeUse: string,
    continueWithout: string
  },
  errors: {
    general: {
      title: string,
      subtitle: string,
    },
    notFound: {
      title: string,
      subtitle: string
    }
  },
  splash: {
    title: string,
    subtitle: string,
    explore: string
  },
  events: {
    found: string
  },
  info: {
    pilotBriefing: {
      title: string,
      description: string,
    },
    atcBriefing: {
      title: string,
      description: string,
    },
    sceneries: {
      title: string,
      description: string,
      sims: {
        fs9: {
          description: string
        },
        fsx: {
          description: string
        },
        p3d: {
          description: string
        },
        msfs: {
          description: string
        },
        xp11: {
          description: string
        }
      },
    },
  },
  flights: {
    search: string,
    arrival_one: string,
    arrival_other: string,
    departure_one: string,
    departure_other: string,
    privateSlots: string,
    flightNumber: string,
    eobt: string,
    gate: string,
    bookFlight: string,
    filter: {
      title: string,
      aircraft: string,
      airline: string,
      origin: string,
      destination: string,
      showAvailableOnly: string,
      reset: string,
      apply: string
    },
    error: {
      noFlightsFound: {
        title: string,
        subtitle: string
      },
      unableToBook: {
        title: string,
        subtitle: string
      },
    } 
  },
  notification: {
    scheduleConfirmation: {
      title: string,
      subtitle: string,
      alert: string,
      button: string
    },
    scheduled: {
      title: string,
      subtitle: string
    },
    booked: {
      title: string,
      subtitle: string,
    },
    cancelled: {
      title: string,
      subtitle: string
    }
  },
  myFlights: {
    title: string,
    subtitle: string,
    search: string,
    pilotBriefing: {
      title: string,
      description: string,
    },
    boardingPass: {
      cancelFlight: string,
      confirmFlight: string,
      disclaimer: string
    }
  }
}