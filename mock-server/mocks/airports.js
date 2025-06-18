module.exports = {
  build: (app) => {
    app.get('/api/airport/details/:icao', (req, res) => {
      res.send({
        "icao": req.params.icao,
        "iata": req.params.icao.substring(1),
        "faaCode": req.params.icao.substring(1),
        "name": req.params.icao + " International Airport",
        "state": "AA",
        "countryId": "CT",
        "city": "City Name",
        "centerId": "CNTR",
        "latitude": 25.7953611111,
        "longitude": -80.2901166667,
        "elevation": 9,
        "magnetic": -5,
        "transitionAltitude": 18000,
        "military": false,
        "time_zone": "-05:00",
        "status": true,
        "country": {
          "id": "CT",
          "name": "Name of Country",
          "region": "Continent Name",
          "divisionId": "CT"
        }
      });
    });
  }
}
