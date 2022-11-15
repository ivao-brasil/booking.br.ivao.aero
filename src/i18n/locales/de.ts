import { Translations } from "types/Translations";

const deTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Zurück',
      back: 'Zurück',
      soon: 'Demnächst...',
      see: 'Öffnen'
    },
    footer: {
      copyrightMessage: '© 2022 International Virtual Aviation Organisation - IVAO Brazil. Alle Rechte vorbehalten.',
      privacyPolicyName: 'Datenschutz-Bestimmungen',
      termsOfUseName: 'Nutzungsbedingungen',
    },
    beta: {
      title: 'BETA SYSTEM',
      message: '𝗞𝗥𝗢𝗡𝗢𝗦 ist ein kürzlich eingeführtes Event-System, dass ständig weiterentwickelt wird. Wir zählen auf euch, dass Ihr alle Fehler meldet die Ihr findet.'
    },
    cookies: {
      title: 'Wir verwenden Cookies, um Deine Erfahrung zu verbessern',
      subtitle: 'Wir brauchen deine Erlaubnis, um weiterhin unsere wunderbaren Lebkuchen-cookies zu machen!',
      authorizeUse: 'Erlaub uns Cookies zu verwenden',
      continueWithout: 'Ohne Cookies fortfahren',
    },
    errors: {
      general: {
        title: 'Houston, wir haben ein Problem! 💥',
        subtitle: 'Es tut uns leid, aber unsere Systeme zeigen einige Fehler an. Laden Sie die Seite neu oder versuchen Sie es später erneut.',
      },
      notFound: {
        title: "Oh nein ... Diese Seite wurde von Außerirdischen entführt! 👽",
        subtitle: 'Ich glaube, du hast die Grenze unseres Universums erreicht. Die aufgerufene Seite wurde nicht gefunden.'
      },
      admin: {
        noAdmin: 'Sie sind kein Administrator.',
        eventFinished: 'Dieses Event ist beendet und kann nicht bearbeitet werden.',
        wrongDivision: 'Dieses Event ist nicht von deiner Division.',
        isActive: 'Dieses Event ist aktiv und kann nicht bearbeitet werden.',
        updateAdmin: 'Du kannst keinen anderen Administrator bearbeiten.',
        updateYourself: 'Du kannst dich nicht nicht selbst bearbeiten.'
      },
      book: {
        suspended: 'Sie sind vom System gesperrt und können keinen flug buchen.',
        notOwner: 'Sie sind nicht der Eigentümer dieses Slots.',
        notActive: 'Dieses Event ist nicht aktiv.',
        tooEarly: 'Dieser Slot kann erst 7 Tage vor dem Event bestätigt werden.',
        alreadyBusy: 'Sie haben zur gleichen Zeit bereits einen Slot gebucht.',
        hasStarted: 'Diese Event hat bereits begonnen.',
        hasEnded: 'Diese Event ist bereits beendet.',
        notFound: 'Slot nicht gefunden.',
        duplicateNumber: 'Es gibt bereits einen Flug mit derselben Flugnummer.',
        notPreBooked: 'Sie können einen nicht gebuchten Slot nicht bestätigen.'
      },
      auth: {
        error: 'Fehler beim Authentifizieren des Benutzers.'
      },
      event: {
        notFound: 'Event nicht gefunden.'
      },
      scenery: {
        notFound: 'Szenerie nicht gefunden.'
      },
      aircraft: {
        notFound: 'Flugzeug nicht gefunden.'
      },
      user: {
        notFound: 'Benutzer nicht gefunden.'
      },
      airport: {
        notFound: 'Wir konnten den Abflug-bzw. Anflug-Flughafen nicht finden. Überprüf den ICAO-Code und versuch es erneut.'
      },
    },
    splash: {
      title: 'Erleb das Beste, was die Flugsimulation zu bieten hat!',
      subtitle: 'Verwalt Deine Buchungen modern, schnell und intuitiv.',
      explore: 'Erkunde Flüge!'
    },
    events: {
      found_zero: 'Keine Events hier, schau später nochmal vorbei',
      found_one: '{{ count }} event gefunden',
      found_other: '{{ count }} events gefunden',
      soon: 'Demnächst...'
    },
    info: {
      pilotBriefing: {
        title: 'Piloten Briefing',
        description: 'Dieses erforderliche Dokument enthält Anleitungen für Piloten zu spezifischen Verfahren für diese Event.',
      },
      atcBriefing: {
        title: 'ATC Briefing',
        description: 'Dieses erforderliche Dokument enthält Anleitungen für ATC zu spezifischen Verfahren für diese Event.',
      },
      sceneries: {
        title: 'Szenerien',
        description: 'Hier findest Du empfohlene Szenerien für dieses Event.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator 2004: A Century of Flight ist ein Flugsimulator, der 2003 veröffentlicht wurde und Teil der Microsoft Flight Simulator-Videospielserie ist.'
          },
          fsx: {
            description: 'Microsoft Flight Simulator X ist ein Flugsimulator aus dem Jahr 2006, das ursprünglich von Aces Game Studio entwickelt und von Microsoft Game Studios für Microsoft Windows veröffentlicht wurde.'
          },
          p3d: {
            description: 'Prepar3D (ausgesprochen Prepared) ist eine Flugsimulator, der es Benutzern ermöglicht, Trainingsszenarien in den Bereichen Luftfahrt, Seefahrt und auf Land zu erstellen.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator (umgangssprachlich bekannt als MSFS) ist ein Flugsimulator, der von Asobo Studio entwickelt und von Xbox Game Studios veröffentlicht wurde. Es ist ein Eintrag in der Microsoft Flight Simulator-Serie, die 1982 begann und der 2006 Microsoft Flight Simulator X vorausging.'
          },
          xp11: {
            description: 'X-Plane ist eine Flugsimulations-Engine-Serie, die seit 1995 von Laminar Research entwickelt und veröffentlicht wird.'
          }
        },
      },
    },
    flights: {
      search: 'Flüge suchen',
      arrivals: 'Ankünfte',
      departures: 'Abflüge',
      privateSlots: 'Private Slots',
      flightNumber: 'Flugnummer',
      eobt: 'EOBT',
      gate: 'Stand',
      bookFlight: 'Buchen',
      loadMore: 'Mehr laden',
      filter: {
        call: 'Tabelle filtern',
        title: 'Filter',
        aircraft: 'Flugzeug',
        airline: 'Fluglinie',
        origin: 'Herkunft',
        destination: 'Ziel',
        showAvailableOnly: 'Nur verfügbare Flüge anzeigen',
        reset: 'Filter zurücksetzen',
        apply: 'Filter anwenden'
      },
      error: {
        noFlightsFound: {
          title: 'Zu spät 😓... Sieht so aus, als wäre hier nichts anderes für dich...',
          subtitle: 'Die Daten sind möglicherweise nicht in unserem System vorhanden. Überprüfe die Filter oder versuch es später erneut.'
        },
        unableToBook: {
          title: 'Der Flug konnte nicht gebucht werden',
          subtitle: 'Die Daten sind möglicherweise nicht in unserem System vorhanden oder dieser Flug wurde bereits von einem anderen Piloten gebucht.'
        },
      }
    },
    notification: {
      scheduleConfirmation: {
        title: 'Möchtest Du diesen Flug wirklich reservieren?',
        subtitle: 'Überprüfe die Flugdaten bevor du bestätigst.',
        alert: 'Reservierung bedeutet nicht, dass dein Flug gebucht ist. Du musst die Reservierung drei bis sieben Tage vor dem Event bestätigen. Deine Reservierung wird storniert, wenn Du ihn nicht mindestens 72 Stunden vor dem Flug bestätigst.',
        button: 'Reservieren'
      },
      scheduled: {
        title: 'Flug reserviert!',
        subtitle: 'Denke daran: Du musst die Reservierung drei bis sieben Tage vor dem Event bestätigen. Deine Reservierung wird storniert, wenn Du ihn nicht mindestens 72 Stunden vor dem Flug bestätigst.'
      },
      booked: {
        title: 'Flug gebucht!',
        subtitle: 'Dein Flug wurde erfolgreich bestätigt. Bereiten dein Flugplan und Flugzeug vor, achte auf die Einhaltung der Abflug- und Anflugzeiten, Gate-Nummer und vor allem: Viel Spaß!',
      },
      cancelled: {
        title: 'Reservierung storniert!',
        subtitle: 'Deine Reservierung wurde storniert.'
      }
    },
    myFlights: {
      title: 'Meine Flüge',
      subtitle: 'Alle Reservierungen anzeigen',
      search: 'Reservierung suchen',
      pilotBriefing: {
        title: 'Piloten-Briefing',
        description: 'Dieses erforderliche Dokument enthält Anleitungen für Piloten zu spezifischen Verfahren für diese Event.',
      },
      boardingPass: {
        cancelFlight: 'Flug stornieren',
        cancelFlightConfirmation: 'Möchtest Du diesen Flug wirklich stornieren?',
        confirmFlight: 'Flug bestätigen',
        disclaimer: 'Um bei dem Event mitzufliegen musst Du alle Anweisungen befolgen die in dem Piloten-Briefing zur Verfügung gestellt werden.',
        waitToConfirm: 'Warten um Flug zu bestätigen.'
      }
    },
    sidebarPanel: {
      information: 'Allgemeine Information',
      flights: 'Flüge suchen',
      myFlights: 'Meine Flüge',
      changeTheme: 'Design ändern',
      logout: 'Logout',
      eventsHome: 'Alle Events'
    }
  },
};

export default deTranslations;