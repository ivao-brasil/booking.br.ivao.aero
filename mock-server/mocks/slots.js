module.exports = {
  build: (app) => {
    app.get('/api/event/2/slot/count', (req, res) => {
      res.send({"departure": 25, "landing": 25, "private": 0});
    });
    app.get('/api/event/2/slot', (req, res) => {
      res.send({
        "data": [
          {
            "id": 3414,
            "flightNumber": "CMP205",
            "origin": "MPTO",
            "destination": "SBBR",
            "type": "landing",
            "private": 1,
            "slotTime": "1900",
            "gate": "2",
            "aircraft": "B738",
            "pilotId": 1348,
            "eventId": 36,
            "bookingTime": "2025-03-16T06:17:55+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 18468,
            "distance": 2409,
            "timestamps": {
              "departure": 1744552372,
              "arrival": 1744570840
            },
            "owner": null
          },
          {
            "id": 3419,
            "flightNumber": "GLO1721",
            "origin": "SBRB",
            "destination": "SBBR",
            "type": "takeoff",
            "private": 1,
            "slotTime": "1900",
            "gate": "9",
            "aircraft": "B38M",
            "pilotId": 514,
            "eventId": 36,
            "bookingTime": "2025-03-22T01:15:32+00:00",
            "bookingStatus": "booked",
            "flight_time": 10007.999999999998,
            "distance": 1252,
            "timestamps": {
              "departure": 1744560833,
              "arrival": 1744570840
            },
            "owner": null
          },
          {
            "id": 3418,
            "flightNumber": "AZU4745",
            "origin": null,
            "destination": "SBBR",
            "type": "landing",
            "private": 1,
            "slotTime": "1900",
            "gate": "19",
            "aircraft": "E295",
            "pilotId": 987,
            "eventId": 36,
            "bookingTime": "2025-03-13T13:56:07+00:00",
            "bookingStatus": "booked",
            "flight_time": 3455.9999999999995,
            "distance": 431,
            "timestamps": {
              "departure": 1744567385,
              "arrival": 1744570840
            },
            "owner": null
          },
          {
            "id": 3444,
            "flightNumber": "PTB2321",
            "origin": "SBRP",
            "destination": null,
            "type": "takeoff",
            "private": 1,
            "slotTime": "2035",
            "gate": "12",
            "aircraft": "AT76",
            "pilotId": null,
            "eventId": 36,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 4140,
            "distance": 316,
            "timestamps": {
              "departure": 1744572400,
              "arrival": 1744576540
            },
            "owner": null
          },
          {
            "id": 3421,
            "flightNumber": null,
            "origin": null,
            "destination": null,
            "type": "landing",
            "private": 1,
            "slotTime": "1915",
            "gate": "27",
            "aircraft": null,
            "pilotId": 1078,
            "eventId": 36,
            "bookingTime": "2025-04-11T13:57:13+00:00",
            "bookingStatus": "booked",
            "flight_time": 7236,
            "distance": 906,
            "timestamps": {
              "departure": 1744564504,
              "arrival": 1744571740
            },
            "owner": null
          },
          {
            "id": 3422,
            "flightNumber": "GLO1725",
            "origin": "SBSP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1915",
            "gate": "11",
            "aircraft": "B737",
            "pilotId": 69,
            "eventId": 36,
            "bookingTime": "2025-03-15T21:48:17+00:00",
            "bookingStatus": "booked",
            "flight_time": 3780,
            "distance": 471,
            "timestamps": {
              "departure": 1744567960,
              "arrival": 1744571740
            },
            "owner": {
              "id": 69,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 2,
              "pilotRating": 4,
              "division": "FR",
              "country": "FR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3231,
            "flightNumber": "PTB2321",
            "origin": "SBRP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "2035",
            "gate": "12",
            "aircraft": "AT76",
            "pilotId": null,
            "eventId": 36,
            "bookingTime": null,
            "bookingStatus": "free",
            "flight_time": 4140,
            "distance": 316,
            "timestamps": {
              "departure": 1744572400,
              "arrival": 1744576540
            },
            "owner": null
          },
          {
            "id": 3423,
            "flightNumber": "GLO1859",
            "origin": "SBSV",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1925",
            "gate": "15",
            "aircraft": "B38M",
            "pilotId": 1991,
            "eventId": 36,
            "bookingTime": "2025-04-08T21:44:30+00:00",
            "bookingStatus": "booked",
            "flight_time": 4824,
            "distance": 603,
            "timestamps": {
              "departure": 1744567516,
              "arrival": 1744572340
            },
            "owner": {
              "id": 1991,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 4,
              "pilotRating": 7,
              "division": "FR",
              "country": "FR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3424,
            "flightNumber": "AZU6004",
            "origin": "SBSP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1930",
            "gate": "20",
            "aircraft": "E295",
            "pilotId": 1958,
            "eventId": 36,
            "bookingTime": "2025-03-24T19:40:30+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 3780,
            "distance": 471,
            "timestamps": {
              "departure": 1744568860,
              "arrival": 1744572640
            },
            "owner": {
              "id": 1958,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 3,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3425,
            "flightNumber": "TAM3761",
            "origin": "SBMO",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1930",
            "gate": "36",
            "aircraft": "B738",
            "pilotId": 1521,
            "eventId": 36,
            "bookingTime": "2025-03-20T14:46:41+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 6300,
            "distance": 822,
            "timestamps": {
              "departure": 1744566340,
              "arrival": 1744572640
            },
            "owner": {
              "id": 1521,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 5,
              "pilotRating": 4,
              "division": "IT",
              "country": "IT",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3426,
            "flightNumber": "TAM3713",
            "origin": "SBBV",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1930",
            "gate": "24",
            "aircraft": "A20N",
            "pilotId": 1545,
            "eventId": 36,
            "bookingTime": "2025-03-18T23:10:07+00:00",
            "bookingStatus": "booked",
            "flight_time": 10872,
            "distance": 1359,
            "timestamps": {
              "departure": 1744561768,
              "arrival": 1744572640
            },
            "owner": {
              "id": 1545,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 4,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3427,
            "flightNumber": "GLO1598",
            "origin": "SBGR",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1935",
            "gate": "12",
            "aircraft": "B38M",
            "pilotId": 1859,
            "eventId": 36,
            "bookingTime": "2025-04-13T18:22:06+00:00",
            "bookingStatus": "booked",
            "flight_time": 3708.0000000000005,
            "distance": 462,
            "timestamps": {
              "departure": 1744569232,
              "arrival": 1744572940
            },
            "owner": {
              "id": 1859,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 2,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3428,
            "flightNumber": "TAM3787",
            "origin": "SBRJ",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1935",
            "gate": "25",
            "aircraft": "A319",
            "pilotId": 135,
            "eventId": 36,
            "bookingTime": "2025-03-13T05:17:28+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 4068,
            "distance": 510,
            "timestamps": {
              "departure": 1744568872,
              "arrival": 1744572940
            },
            "owner": {
              "id": 135,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 5,
              "pilotRating": 5,
              "division": "BR",
              "country": "BR",
              "admin": 1,
              "suspended": 0
            }
          },
          {
            "id": 3485,
            "flightNumber": "MWM5800",
            "origin": "SBKP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1940",
            "gate": "54",
            "aircraft": "B734",
            "pilotId": 1251,
            "eventId": 36,
            "bookingTime": "2025-03-27T23:00:01+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 3528,
            "distance": 431,
            "timestamps": {
              "departure": 1744569712,
              "arrival": 1744573240
            },
            "owner": {
              "id": 1251,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 2,
              "pilotRating": 3,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3429,
            "flightNumber": "TAM3505",
            "origin": "SBJP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1940",
            "gate": "30",
            "aircraft": "B737",
            "pilotId": 269,
            "eventId": 36,
            "bookingTime": "2025-03-24T23:23:46+00:00",
            "bookingStatus": "booked",
            "flight_time": 7488.000000000001,
            "distance": 938,
            "timestamps": {
              "departure": 1744565752,
              "arrival": 1744573240
            },
            "owner": {
              "id": 269,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 5,
              "pilotRating": 7,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3430,
            "flightNumber": "GLO1402",
            "origin": "SBSP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1940",
            "gate": "14",
            "aircraft": "B738",
            "pilotId": 1199,
            "eventId": 36,
            "bookingTime": "2025-03-19T02:43:56+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 3600,
            "distance": 471,
            "timestamps": {
              "departure": 1744569640,
              "arrival": 1744573240
            },
            "owner": {
              "id": 1199,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 3,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3431,
            "flightNumber": "TAM3769",
            "origin": "SBMQ",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1940",
            "gate": "34",
            "aircraft": "A320",
            "pilotId": 1259,
            "eventId": 36,
            "bookingTime": "2025-03-25T13:52:11+00:00",
            "bookingStatus": "booked",
            "flight_time": 7776.000000000002,
            "distance": 974,
            "timestamps": {
              "departure": 1744565464,
              "arrival": 1744573240
            },
            "owner": {
              "id": 1259,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 4,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3434,
            "flightNumber": "AZU4126",
            "origin": "SBCF",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1945",
            "gate": "18",
            "aircraft": "E195",
            "pilotId": 1459,
            "eventId": 36,
            "bookingTime": "2025-03-13T22:45:34+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 2736,
            "distance": 327,
            "timestamps": {
              "departure": 1744570804,
              "arrival": 1744573540
            },
            "owner": {
              "id": 1459,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 2,
              "pilotRating": 4,
              "division": "XM",
              "country": "JO",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3433,
            "flightNumber": "GLO1418",
            "origin": "SBGR",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1945",
            "gate": "6",
            "aircraft": "B738",
            "pilotId": 1271,
            "eventId": 36,
            "bookingTime": "2025-03-13T00:15:53+00:00",
            "bookingStatus": "booked",
            "flight_time": 3528,
            "distance": 462,
            "timestamps": {
              "departure": 1744570012,
              "arrival": 1744573540
            },
            "owner": {
              "id": 1271,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 5,
              "pilotRating": 5,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3432,
            "flightNumber": "TAM3754",
            "origin": "SBGO",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1945",
            "gate": "37",
            "aircraft": "A320",
            "pilotId": 34,
            "eventId": 36,
            "bookingTime": "2025-03-12T17:06:09+00:00",
            "bookingStatus": "booked",
            "flight_time": 720,
            "distance": 91,
            "timestamps": {
              "departure": 1744572820,
              "arrival": 1744573540
            },
            "owner": {
              "id": 34,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 5,
              "pilotRating": 6,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3435,
            "flightNumber": "TAM3867",
            "origin": "SBVT",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1950",
            "gate": "35",
            "aircraft": "A319",
            "pilotId": 1320,
            "eventId": 36,
            "bookingTime": "2025-03-13T00:04:38+00:00",
            "bookingStatus": "booked",
            "flight_time": 4211.999999999999,
            "distance": 528,
            "timestamps": {
              "departure": 1744569629,
              "arrival": 1744573840
            },
            "owner": {
              "id": 1320,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 5,
              "pilotRating": 7,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3436,
            "flightNumber": "TAM3581",
            "origin": "SBSP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "1955",
            "gate": "38",
            "aircraft": "A320",
            "pilotId": 1936,
            "eventId": 36,
            "bookingTime": "2025-03-17T01:00:10+00:00",
            "bookingStatus": "booked",
            "flight_time": 3780,
            "distance": 471,
            "timestamps": {
              "departure": 1744570360,
              "arrival": 1744574140
            },
            "owner": {
              "id": 1936,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 4,
              "pilotRating": 4,
              "division": "CO",
              "country": "CO",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3415,
            "flightNumber": "GLO7749",
            "origin": "KMIA",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "2010",
            "gate": "2",
            "aircraft": "B38M",
            "pilotId": 1280,
            "eventId": 36,
            "bookingTime": "2025-03-20T21:36:40+00:00",
            "bookingStatus": "booked",
            "flight_time": 25344,
            "distance": 3166,
            "timestamps": {
              "departure": 1744549696,
              "arrival": 1744575040
            },
            "owner": {
              "id": 1280,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 4,
              "pilotRating": 4,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3437,
            "flightNumber": "GLO1452",
            "origin": "SBSP",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "2010",
            "gate": "8",
            "aircraft": "B38M",
            "pilotId": 280,
            "eventId": 36,
            "bookingTime": "2025-04-13T11:13:16+00:00",
            "bookingStatus": "booked",
            "flight_time": 3780,
            "distance": 471,
            "timestamps": {
              "departure": 1744571260,
              "arrival": 1744575040
            },
            "owner": {
              "id": 280,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 2,
              "pilotRating": 4,
              "division": "IT",
              "country": "IT",
              "admin": 0,
              "suspended": 0
            }
          },
          {
            "id": 3439,
            "flightNumber": "GLO1735",
            "origin": "SBSL",
            "destination": "SBBR",
            "type": "landing",
            "private": 0,
            "slotTime": "2015",
            "gate": "9",
            "aircraft": "B38M",
            "pilotId": 1309,
            "eventId": 36,
            "bookingTime": "2025-03-23T17:50:41+00:00",
            "bookingStatus": "booked",
            "flight_time": 6624,
            "distance": 827,
            "timestamps": {
              "departure": 1744568716,
              "arrival": 1744575340
            },
            "owner": {
              "id": 1309,
              "vid": "123456",
              "firstName": "FIRST",
              "lastName": "LAST",
              "atcRating": 2,
              "pilotRating": 3,
              "division": "BR",
              "country": "BR",
              "admin": 0,
              "suspended": 0
            }
          }
        ],
        "page": 1,
        "perPage": 25,
        "total": 74
      });
    });
    app.patch('/api/slot/3444/book', (req, res) => res.status(204).send());

    app.get('/api/event/:id/slot/mine', (req, res) => {
      res.send({
        "data": [
          {
            "id": 3504,
            "flightNumber": "GLO1756",
            "origin": "SBBR",
            "destination": "SBCT",
            "type": "takeoff",
            "private": 0,
            "slotTime": "1925",
            "gate": "10",
            "aircraft": "B738",
            "pilotId": 1049,
            "eventId": 36,
            "bookingTime": "2025-05-29T03:24:37+00:00",
            "bookingStatus": "prebooked",
            "flight_time": 4464,
            "distance": 585,
            "timestamps": {
              "departure": 1744572340,
              "arrival": 1744576804
            },
            "event": {
              "id": 36,
              "division": "BR",
              "dateStart": "2026-04-13T19:00:40+00:00",
              "dateEnd": "2026-04-13T23:00:26+00:00",
              "eventName": "Bras\u00edlia RFO 2025",
              "privateSlots": 0,
              "status": "scheduled",
              "createdBy": 19,
              "description": "Bras\u00edlia Real Flight Operations 2025",
              "banner": "https:\/\/admin.br.ivao.aero\/storage\/images\/MleniXywXbXw6nH9TcVnjghsWaWfbsIqRJBSMNZw.png",
              "atcBooking": "https:\/\/tools.ivao.aero\/event\/BR",
              "atcBriefing": "https:\/\/wiki.br.ivao.aero\/pt-br\/atcops\/mops\/sbbs\/briefing-brasilia-rfo",
              "pilotBriefing": "https:\/\/forum.ivao.aero\/forums\/eventos.758\/",
              "public": 0,
              "created_at": "2025-03-05T23:31:00.000000Z",
              "updated_at": "2025-04-13T13:31:21.000000Z",
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
