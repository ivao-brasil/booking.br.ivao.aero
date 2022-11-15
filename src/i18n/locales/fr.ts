import { Translations } from "types/Translations";

const frTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Retourner au début',
      back: 'Retour',
      soon: 'À venir...',
      see: 'Voir'
    },
    footer: {
      copyrightMessage: '© 2022 International Virtual Aviation Organisation - IVAO Brazil. Tous droits réservés.',
      privacyPolicyName: 'Politique de confidentialité',
      termsOfUseName: 'Conditions Générales d\'Utilisation',
    },
    beta: {
      title: 'SYSTÈME EN BÊTA',
      message: '𝗞𝗥𝗢𝗡𝗢𝗦 est un système lancé récemment et est toujours en développement constant. Nous comptons sur vous pour nous rapporter chaque bugs que vous rencontrerez 🐛.'
    },
    cookies: {
      title: 'Nous utilisons les cookies afin d\'améliorer votre expérience',
      subtitle: 'Nous avons besoin de votre permission pour continuer à faire nos magnifiques biscuits au gingembre!',
      authorizeUse: 'Nous autoriser à utiliser les cookies',
      continueWithout: 'Continuer sans autoriser les cookies',
    },
    errors: {
      general: {
        title: 'Houston, nous avons un problème! 💥',
        subtitle: 'Nous sommes désolé, mais nos systèmes indiquent des soucis au niveau de l\'ordinateur de navigation. Rafraîchissez la page ou réessayez plus tard.',
      },
      notFound: {
        title: "Oh non... Cette page a été enlevée par des aliens! 👽",
        subtitle: 'Je pense que vous avez atteint la limite de notre univers. La page que vous cherchez n\'a pas été trouvée.'
      },
      admin: {
        noAdmin: 'Vous n\'êtes pas administrateur.',
        eventFinished: 'Cet évenement est terminé et il ne peut pas être modifié.',
        wrongDivision: 'Cet évenement n\'est pas de votre division.',
        isActive: 'Cet évenement est actif et ne peut être modifié.',
        updateAdmin: 'Vous ne pouvez pas éditer un autre administrateur.',
        updateYourself: 'Vous ne pouvez pas vous auto-modifier.'
      },
      book: {
        suspended: 'Vous êtes suspendu du système et ne pouvez donc pas réserver.',
        notOwner: 'Vous n\'êtes pas propriétaire de ce slot.',
        notActive: 'Cet évenement n\'est pas actif.',
        tooEarly: 'Cet évenement ne peut être validé que seulement 7 jours avant l\'évenement.',
        alreadyBusy: 'Vous avez déjà un slot de réservé au même moment.',
        hasStarted: 'Cet évenement a déjà commencé.',
        hasEnded: 'Cet évenement est déjà terminé.',
        notFound: 'Slot non trouvé.',
        duplicateNumber: 'Il y a déjà un vol avec le même numéro de vol.',
        notPreBooked: 'Vous ne pouvez pas confirmer un slot qui n\'a pas été réservé.'
      },
      auth: {
        error: 'Erreur lors de l\'authentification de l\'utilisateur.'
      },
      event: {
        notFound: 'Évenement non trouvé.'
      },
      scenery: {
        notFound: 'Décor non trouvé.'
      },
      aircraft: {
        notFound: 'Aéronef non trouvé.'
      },
      user: {
        notFound: 'Utilisateur non trouvé.'
      },
      airport: {
        notFound: 'Nous n\'avons pas pu trouver l\'aéroport vers lequel vous essayez de décoller ou atterrir. Vérifiez les codes ICAO et réessayez.'
      },
    },
    splash: {
      title: 'Expérimentez le meilleur que la simulation de vol a à offrir!',
      subtitle: 'Gérez vos réservations d\'une façon moderne, rapide et intuitive.',
      explore: 'Explorez les vols!'
    },
    events: {
      found_zero: 'Aucun évenement pour le moment, revenez plus tard.',
      found_one: '{{ count }} évenement trouvés.',
      found_other: '{{ count }} évenements trouvés',
      soon: 'Bientôt...'
    },
    info: {
      pilotBriefing: {
        title: 'Briefing du pilote',
        description: 'Ce document donne les indications pour les pilotes et les membres d\'équipage à propos des procédures pour cet évenement. Le lire est requis.',
      },
      atcBriefing: {
        title: 'Brifeing de l\'ATC',
        description: 'Ce document donne les indications pour les contrôleurs du trafic aérien à propos des procédures pour cet évenement. Le lire est requis.',
      },
      sceneries: {
        title: 'Décors',
        description: 'Vous pouvez trouver ici les décors recommandés pour cet évenement.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator 2004: A Century of Flight est un simulateur de vol sorti en 2003, et fait partie de la série des jeux-vidéos Microsoft Flight Simulator.'
          },
          fsx: {
            description: 'Microsoft Flight Simulator X est un jeux-vidéo simulateur de vol sorti en 2006 développé par Aces Game Studio et publié par Microsoft Game Studios pour Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D (prononcé en anglais “prepared”) est une plateforme de simulation visuelle qui permet aux utilisateurs de créer des scénarios d\'entraînement dans les domaines de l\'aviation, du maritime et au sol.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator (plus connu sous l\'abréviation de MS2020) est un simulateur de vol amateur développé par Asobo Studio et publié par Xbox Game Studios. C\'est un volet de la série des Microsoft Flight Simulator qui a commencé en 1982, et précédé par Microsoft Flight Simulator X en 2006.'
          },
          xp11: {
            description: 'X-Plane 11 est le simulateur moderne, réalistique et détaillé que vous aviez toujours attendu.'
          }
        },
      },
    },
    flights: {
      search: 'Cherchez les vols',
      arrivals: 'Arrivées',
      departures: 'Départs',
      privateSlots: 'Slots privés',
      flightNumber: 'Numéro de vol',
      eobt: 'EOBT',
      gate: 'Stand',
      bookFlight: 'Réserver le vol',
      loadMore: 'Charger plus de vols',
      filter: {
        call: 'Filtrer le tableau',
        title: 'Filtrer',
        aircraft: 'Aéronef',
        airline: 'Compagnie',
        origin: 'Origine',
        destination: 'Destination',
        showAvailableOnly: 'Ne montrer que les vols disponibles',
        reset: 'Réinitialiser les filtres',
        apply: 'Appliquer les filtres'
      },
      error: {
        noFlightsFound: {
          title: 'Trop tard 😓... Apparemment il ne reste plus rien pour vous...',
          subtitle: 'Cette donnée n\'existe pas dans nos systèmes. Vérifiez les filtres appliqués ou réessayez plus tard.'
        },
        unableToBook: {
          title: 'Nous n\'avons pas pu réserver le vol...',
          subtitle: 'Cette donnée n\'existe pas dans nos systèmes, ou ce vol a été réservé par un autre pilote.'
        },
      }
    },
    notification: {
      scheduleConfirmation: {
        title: 'Êtes-vous sûr de vouloir programmer ce vol?',
        subtitle: 'Avant de confirmer, regardez les détails et soyez sûrs que c\'est un vol que vous voulez.',
        alert: 'La programmation ne signifie pas que le vol est réservé. Vous devez confirmer votre programmation entre 3 et 7 jours avant l\'évenement. Votre réservation sera annulée si vous ne le confirmez pas 72h avant le vol.',
        button: 'Programmer'
      },
      scheduled: {
        title: 'Vol programmé!',
        subtitle: 'Rappel: vous devez confirmer votre programmation entre 3 et 7 jours avant l\'évenement. Votre réservation sera annulée si vous ne le confirmez pas 72h avant le vol.'
      },
      booked: {
        title: 'Vol réservé!',
        subtitle: 'Votre vol a été confirmé avec succès. Ayez votre plan de vol ainsi que votre aéronef de préparé, et soyez sûr d\'être en accord avec votre timing et le numéro de porte, et surtout: amusez-vous!',
      },
      cancelled: {
        title: 'Vol annulé!',
        subtitle: 'Votre programmation a été annulée. Nous sommes désolés de vous voir partir... Peut-être une autre fois?'
      }
    },
    myFlights: {
      title: 'Mes vols',
      subtitle: 'Voir toutes vos programmations',
      search: 'Chercher une programmation',
      pilotBriefing: {
        title: 'Briefing du pilote',
        description: 'Ce document donne les indications pour les pilotes et les membres d\'équipage à propos des procédures pour cet évenement. Le lire est requis.',
      },
      boardingPass: {
        cancelFlight: 'Annuler le vol',
        cancelFlightConfirmation: 'Êtes vous sûr de vouloir annuler ce vol?',
        confirmFlight: 'Confirmer le vol',
        disclaimer: 'Pour voler lors de cet évenement, vous devez être en accords avec les instructions rendues disponibles dans le briefing du pilote.',
        waitToConfirm: 'Attendez pour confirmer le vol.'
      }
    },
    sidebarPanel: {
      information: 'Informations générales',
      flights: 'Chercher les vols',
      myFlights: 'Mes vols',
      changeTheme: 'Changer le thème actuel',
      logout: 'Se déconnecter',
      eventsHome: 'Aller à la liste d\'évenements'
    }
  },
};

export default frTranslations;