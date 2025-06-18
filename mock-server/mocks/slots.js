module.exports = {
  build: (app) => {
    app.get('/api/event/2/slot/count', (req, res) => {
      res.send({"departure": 0, "landing": 0, "departureLanding": 26});
    });
    app.get('/api/event/2/slot', (req, res) => {
      res.send({
        "data": [
          {
            "id": 3856,
            "flightNumber": "FDX1421",
            "isFixedFlightNumber": 0,
            "origin": "SBPA",
            "isFixedOrigin": 1,
            "destination": "SBFL",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1800",
            "gate": "N/A",
            "aircraft": "B738",
            "isFixedAircraft": 0,
            "pilotId": 69,
            "eventId": 39,
            "bookingTime": "2025-06-06T19:53:25+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 1620,
            "distance": 210,
            "timestamps": {
              "departure": 1750010400,
              "arrival": 1750010401
            },
            "owner": {
              "id": 69,
              "vid": "123456",
              "firstName": "AAAAA",
              "lastName": "BBBBBB",
              "atcRating": 2,
              "pilotRating": 4,
              "division": "FR",
              "country": "FR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3863,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBFL",
            "isFixedOrigin": 1,
            "destination": "SBCT",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1808",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 134,
            "timestamps": {
              "departure": 1750010880,
              "arrival": 1750010881
            },
            "owner": null
          },
          {
            "id": 3862,
            "flightNumber": "NOK080",
            "isFixedFlightNumber": 0,
            "origin": "SBPA",
            "isFixedOrigin": 1,
            "destination": "SBFL",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1808",
            "gate": "N/A",
            "aircraft": "MD82",
            "isFixedAircraft": 0,
            "pilotId": 1904,
            "eventId": 39,
            "bookingTime": "2025-06-06T18:16:27+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 1692,
            "distance": 210,
            "timestamps": {
              "departure": 1750010880,
              "arrival": 1750010881
            },
            "owner": {
              "id": 1904,
              "vid": "123456",
              "firstName": "AAAAAA",
              "lastName": "BBBBBBB",
              "atcRating": 4,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3865,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBFL",
            "isFixedOrigin": 1,
            "destination": "SBPA",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1812",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 210,
            "timestamps": {
              "departure": 1750011120,
              "arrival": 1750011121
            },
            "owner": null
          },
          {
            "id": 3866,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBCT",
            "isFixedOrigin": 1,
            "destination": "SBFL",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1812",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 134,
            "timestamps": {
              "departure": 1750011120,
              "arrival": 1750011121
            },
            "owner": {
              "id": 1904,
              "vid": "123456",
              "firstName": "AAAAAA",
              "lastName": "BBBBBBB",
              "atcRating": 4,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3867,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBPA",
            "isFixedOrigin": 1,
            "destination": "SBCT",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1812",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 293,
            "timestamps": {
              "departure": 1750011120,
              "arrival": 1750011121
            },
            "owner": null
          },
          {
            "id": 3870,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBCT",
            "isFixedOrigin": 1,
            "destination": "SBPA",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1816",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 293,
            "timestamps": {
              "departure": 1750011360,
              "arrival": 1750011361
            },
            "owner": null
          },
          {
            "id": 3869,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBFL",
            "isFixedOrigin": 1,
            "destination": "SBCT",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1816",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 134,
            "timestamps": {
              "departure": 1750011360,
              "arrival": 1750011361
            },
            "owner": null
          },
          {
            "id": 3868,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBPA",
            "isFixedOrigin": 1,
            "destination": "SBFL",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1816",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 210,
            "timestamps": {
              "departure": 1750011360,
              "arrival": 1750011361
            },
            "owner": null
          },
          {
            "id": 3878,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBCT",
            "isFixedOrigin": 1,
            "destination": "SBFL",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1828",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 134,
            "timestamps": {
              "departure": 1750012080,
              "arrival": 1750012081
            },
            "owner": null
          },
          {
            "id": 3879,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBPA",
            "isFixedOrigin": 1,
            "destination": "SBCT",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1828",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 293,
            "timestamps": {
              "departure": 1750012080,
              "arrival": 1750012081
            },
            "owner": null
          },
          {
            "id": 3881,
            "flightNumber": null,
            "isFixedFlightNumber": 0,
            "origin": "SBFL",
            "isFixedOrigin": 1,
            "destination": "SBCT",
            "isFixedDestination": 1,
            "type": "departureLanding",
            "slotTime": "1832",
            "gate": "N/A",
            "aircraft": null,
            "isFixedAircraft": 0,
            "pilotId": null,
            "eventId": 39,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 1,
            "distance": 134,
            "timestamps": {
              "departure": 1750012320,
              "arrival": 1750012321
            },
            "owner": null
          }
        ],
        "page": 1,
        "perPage": 25,
        "total": 135
      });
    });
    app.patch('/api/slot/3856/book', (req, res) => res.status(204).send());

    app.get('/api/event/:id/slot/mine', (req, res) => {
      res.send({
        "data": [
          {
            "id": 3856,
            "flightNumber": "A320",
            "isFixedFlightNumber": 0,
            "origin": "",
            "isFixedOrigin": 1,
            "destination": "",
            "isFixedDestination": 1,
            "type": "takeoff_landing",
            "slotTime": "1800",
            "gate": "N\/A",
            "aircraft": "SASA",
            "isFixedAircraft": 0,
            "pilotId": 1049,
            "eventId": 39,
            "bookingTime": "2025-06-05T20:16:11+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 1,
            "distance": 1,
            "timestamps": [
              1,
              1
            ],
            "event": {
              "id": 39,
              "division": "BR",
              "dateStart": "2025-06-15T18:00:00+00:00",
              "dateEnd": "2025-06-15T22:00:00+00:00",
              "eventName": "Southern Capitals MSE",
              "privateSlots": 0,
              "status": "scheduled",
              "createdBy": 19,
              "description": "N\u00f3s convidamos voc\u00ea para voar conosco no dia 15 de Junho de 2025 no Southern Capitals MSE!",
              "banner": "https:\/\/admin.br.ivao.aero\/storage\/images\/RpovInDnr6HMpgKojJHVhrRzAhBOr4NrLRfdOhAj.png",
              "atcBooking": "https:\/\/tools.ivao.aero\/event\/BR\/",
              "atcBriefing": "https:\/\/forum.ivao.aero\/threads\/southern-capitals-mse.382463\/",
              "pilotBriefing": "https:\/\/forum.ivao.aero\/threads\/southern-capitals-mse.382463\/",
              "public": 0,
              "created_at": "2025-06-05T02:49:16.000000Z",
              "updated_at": "2025-06-05T02:52:49.000000Z",
              "type": "mse",
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
