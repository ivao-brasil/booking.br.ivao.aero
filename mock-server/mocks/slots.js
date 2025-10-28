module.exports = {
  build: (app) => {
    app.get('/api/event/2/slot/count', (req, res) => {
      res.send({
        "departure": 92,
        "landing": 84,
        "departureLanding": 0,
        "privateDeparture": 7,
        "privateLanding": 7
      });
    });
    app.get('/api/event/2/slot', (req, res) => {
      res.send({
        "data": [
          {
            "id": 614,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": null,
            "isFixedSlotTime": 0,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 615,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": null,
            "isFixedSlotTime": 0,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 616,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": null,
            "isFixedSlotTime": 0,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 617,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": "2025-11-23 20:25:00",
            "isFixedSlotTime": true,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 618,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": "2025-11-23 20:25:00",
            "isFixedSlotTime": true,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 619,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": "2025-11-23 20:25:00",
            "isFixedSlotTime": true,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 620,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": "2025-11-23 20:25:00",
            "isFixedSlotTime": true,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          },
          {
            "id": 621,
            "flightNumber": "",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": "2025-11-23 20:25:00",
            "isFixedSlotTime": true,
            "gate": "APRON 12",
            "aircraft": "",
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 14,
            "bookingTime": null,
            "bookingStatus": "free",
            "owner": null
          }
        ],
        "page": 1,
        "perPage": 25,
        "total": 8
      });
    });
    app.patch('/api/slot/3856/book', (req, res) => res.status(204).send());

    app.get('/api/event/:id/slot/mine', (req, res) => {
      res.send({
        "data": [
          {
            "id": 614,
            "flightNumber": "TAM8484",
            "isFixedFlightNumber": 0,
            "origin": "SBCT",
            "isFixedOrigin": 0,
            "destination": "SBGR",
            "isFixedDestination": 1,
            "slotTime": "2025-11-23 20:25:00",
            "isFixedSlotTime": true,
            "gate": "APRON 12",
            "aircraft": "A320",
            "isFixedAircraft": 0,
            "pilotId": 22,
            "eventId": 14,
            "bookingTime": "2025-10-22T23:45:34+00:00",
            "bookingStatus": "prebooked",
            "event": {
              "id": 14,
              "division": "BR",
              "dateStart": "2025-11-23T18:00:00+00:00",
              "dateEnd": "2025-11-24T02:00:00+00:00",
              "eventName": "Guarulhos RFO",
              "status": "scheduled",
              "createdBy": 22,
              "description": "https:\/\/forum.ivao.aero\/forums\/eventos.758\/",
              "banner": "https:\/\/admin.br.ivao.aero\/storage\/images\/qRCedpe6Ek4IpPuhfCxB2rzhqASTXSRHzGtnJN6K.png",
              "atcBooking": "https:\/\/tools.ivao.aero\/event\/BR",
              "atcBriefing": "https:\/\/wiki.br.ivao.aero\/pt-br\/atcops\/mops\/sbse\/GuarulhosRFO2025",
              "pilotBriefing": "https:\/\/wiki.br.ivao.aero\/pt-br\/atcops\/mops\/sbse\/Pilot_Briefing_GuarulhosRFO2025",
              "public": 0,
              "created_at": "2025-10-22T03:36:10.000000Z",
              "updated_at": "2025-10-22T03:36:49.000000Z",
              "type": "rfo",
              "allowBookingAfterStart": 0,
              "has_started": false,
              "has_ended": false,
              "can_confirm_slots": false
            }
          }
        ],
        "page": 1,
        "perPage": 25,
        "total": 1
      });
    });
  }
}
