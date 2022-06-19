import { StringMap } from "i18next"

export interface Translations {
  generics: {
    backToBeginning: string,
    back: string,
    soon: string,
    see: string
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
    },
    admin: {
      noAdmin: string,
      eventFinished: string,
      wrongDivision: string,
      isActive: string,
      updateAdmin: string,
      updateYourself: string
    },
    book: {
      suspended: string,
      notOwner: string,
      notActive: string,
      tooEarly: string,
      alreadyBusy: string,
      hasStarted: string,
      hasEnded: string,
      notFound: string,
      duplicateNumber: string,
      notPreBooked: string
    },
    auth: {
      error: string
    },
    event: {
      notFound: string
    },
    scenery: {
      notFound: string
    },
    aircraft: {
      notFound: string
    },
    user: {
      notFound: string
    },
    airport: {
      notFound: string
    }
  },
  splash: {
    title: string,
    subtitle: string,
    explore: string
  },
  events: {
    found_zero: string,
    found_one: string,
    found_other: string,
    soon: string
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
    arrivals: string,
    departures: string,
    privateSlots: string,
    flightNumber: string,
    eobt: string,
    gate: string,
    bookFlight: string,
    loadMore: string,
    filter: {
      call: string,
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
      cancelFlightConfirmation: string,
      confirmFlight: string,
      disclaimer: string,
      waitToConfirm: string
    }
  },
  sidebarPanel: {
    information: string,
    flights: string,
    myFlights: string,
    changeTheme: string,
    logout: string,
    eventsHome: string
  }
}