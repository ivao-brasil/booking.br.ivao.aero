module.exports = {
  build: (app) => {
    app.get('/api/event', (req, res) => {
      res.send({
        data: [
          {
            "id": 1,
            "division": "NU",
            "dateStart": "2013-04-16T07:19:04+00:00",
            "dateEnd": "2018-09-11T13:23:11+00:00",
            "eventName": "Bulldozer Operator",
            "privateSlots": 0,
            "status": "created",
            "createdBy": 1,
            "description": "Animi voluptatem assumenda voluptatum quia sit dignissimos ipsa. Blanditiis et velit nostrum laborum quos libero enim aliquid. Sapiente molestias repellendus qui facere reprehenderit accusamus commodi. Assumenda officia cupiditate quia et.",
            "banner": "https:\/\/wallpapercave.com\/wp\/wp4728116.jpg",
            "atcBooking": "http:\/\/www.koelpin.com\/",
            "atcBriefing": "http:\/\/www.mante.com\/saepe-molestiae-praesentium-quaerat-odio-veniam-perferendis-aspernatur",
            "pilotBriefing": "http:\/\/www.conroy.com\/",
            "public": true,
            "created_at": "2022-01-01T17:18:51.000000Z",
            "updated_at": "2022-01-01T17:18:51.000000Z"
          },
          {
            "id": 2,
            "division": "WS",
            "dateStart": "2025-03-16T07:17:11+00:00",
            "dateEnd": "2025-03-19T05:48:10+00:00",
            "eventName": "Insulation Worker",
            "privateSlots": 0,
            "status": "scheduled",
            "createdBy": 1,
            "description": "Iste doloremque ab magni pariatur libero libero qui. Eum ipsum quo dolorem aliquid laborum enim maiores. Veritatis nulla assumenda soluta cupiditate. Ratione ut officia deserunt eius consequatur.",
            "banner": "https:\/\/wallpapercave.com\/wp\/wp4728116.jpg",
            "atcBooking": "https:\/\/www.prohaska.com\/dolorem-cum-harum-dolor-possimus-et-assumenda-qui",
            "atcBriefing": "http:\/\/www.beatty.info\/esse-tenetur-non-qui-ea-vero-ut-error.html",
            "pilotBriefing": "http:\/\/www.gorczany.net\/",
            "public": 1,
            "created_at": "2022-01-01T17:18:52.000000Z",
            "updated_at": "2022-01-01T17:18:52.000000Z"
          },
          {
            "id": 3,
            "division": "CK",
            "dateStart": "1999-10-29T21:36:17+00:00",
            "dateEnd": "1976-01-20T10:18:04+00:00",
            "eventName": "Private Detective and Investigator",
            "privateSlots": 1,
            "status": "scheduled",
            "createdBy": 1,
            "description": "Perferendis velit dolores itaque perferendis qui magni. Natus saepe illo ipsam iure vero quas. Nobis qui consequatur id sequi voluptatem atque rerum. Assumenda ut veritatis laborum quia. Maiores neque accusamus dignissimos ut omnis laboriosam.",
            "banner": "https:\/\/wallpapercave.com\/wp\/wp4728116.jpg",
            "atcBooking": "http:\/\/www.waelchi.com\/recusandae-iusto-odit-earum-voluptatem-quod-eos",
            "atcBriefing": "http:\/\/www.considine.com\/a-rem-modi-voluptatem-dolorum-fugiat",
            "pilotBriefing": "https:\/\/kirlin.net\/consequatur-eveniet-dolorum-accusantium-fuga-et-et.html",
            "public": 0,
            "created_at": "2022-01-01T17:18:53.000000Z",
            "updated_at": "2022-01-01T17:18:53.000000Z"
          },
          {
            "id": 4,
            "division": "MM",
            "dateStart": "1980-02-14T01:38:41+00:00",
            "dateEnd": "2005-09-02T17:37:30+00:00",
            "eventName": "Agricultural Sciences Teacher",
            "privateSlots": 0,
            "status": "created",
            "createdBy": 1,
            "description": "Unde ea dolores non nam. Explicabo quaerat et iste. Ipsa ratione aut eum ex vel. Dolor aut totam sit optio. Debitis qui fugiat dolore voluptatem sit ut.",
            "banner": "https:\/\/wallpapercave.com\/wp\/wp4728116.jpg",
            "atcBooking": "http:\/\/www.strosin.biz\/repudiandae-dolorem-suscipit-omnis-ut-fugit-sint-sint.html",
            "atcBriefing": "http:\/\/langworth.com\/consectetur-at-atque-et-repudiandae",
            "pilotBriefing": "http:\/\/www.stoltenberg.info\/ratione-quo-fugit-perferendis-id-harum-doloribus",
            "public": 1,
            "created_at": "2022-01-01T17:18:54.000000Z",
            "updated_at": "2022-01-01T17:18:54.000000Z"
          }
        ]
      });
    });

    app.get('/api/event/2', (req, res) => {
      res.send({
        "id": 2,
        "division": "BR",
        "dateStart": "2026-04-13T19:00:40+00:00",
        "dateEnd": "2026-04-13T23:00:26+00:00",
        "eventName": "Brasília RFO 2025",
        "privateSlots": 0,
        "status": "scheduled",
        "createdBy": 19,
        "description": "Brasília Real Flight Operations 2025",
        "banner": "https://admin.br.ivao.aero/storage/images/MleniXywXbXw6nH9TcVnjghsWaWfbsIqRJBSMNZw.png",
        "atcBooking": "https://tools.ivao.aero/event/BR",
        "atcBriefing": "https://wiki.br.ivao.aero/pt-br/atcops/mops/sbbs/briefing-brasilia-rfo",
        "pilotBriefing": "https://forum.ivao.aero/forums/eventos.758/",
        "public": 0,
        "created_at": "2025-03-05T23:31:00.000000Z",
        "updated_at": "2025-04-13T13:31:21.000000Z",
        "type": "rfo",
        "allowBookingAfterStart": 0,
        "has_started": true,
        "has_ended": true,
        "can_confirm_slots": false,
        "airports": [
          {
            "id": 298,
            "eventId": 2,
            "icao": "SBBR",
            "created_at": "2025-04-13T13:31:21.000000Z",
            "updated_at": "2025-04-13T13:31:21.000000Z",
            "sceneries": [
              {
                "id": 19,
                "title": "AxScenery",
                "license": "freeware",
                "link": "https://axscenery.com/sbbr-5-0-brasilia/",
                "simulator": "xp11",
                "icao": "SBBR"
              },
              {
                "id": 20,
                "title": "Flightsim.to",
                "license": "freeware",
                "link": "https://flightsim.to/file/63131/braslia-international-airport-sbbr",
                "simulator": "msfs",
                "icao": "SBBR"
              }
            ]
          }
        ]
      });
    });
  }
}
