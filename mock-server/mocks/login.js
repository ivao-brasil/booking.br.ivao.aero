const jwt = require('jsonwebtoken');

module.exports = {
    build: (app) => {
        app.get('/login', (req, res) => {
            res.sendfile('mock-server/mocks/login.html');
        });

        app.get('/complete-login', (req, res) => {
            const destination = decodeURIComponent(req.query.urlRedirection);
            res.redirect(destination);
        });

        app.post('/api/auth', (req, res) => {
            const payload = {
                sub: {
                    vid: "123456",
                    id: 1234,
                    firstName: "FirstName",
                    lastName: "LastName",
                },
                iss: "https://localhost:3003",
                aud: "https://localhost:3003",
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + (10 * 60)
            };

            const secret = "secret";
            const token = jwt.sign(payload, secret, { algorithm: 'HS256' });

            res.send({ jwt: token });
        });

      app.get('/api/auth', (req, res) => {
        res.send({
          "id": 1234,
          "vid": "123456",
          "firstName": "FirstName",
          "lastName": "LastName",
          "atcRating": 4,
          "pilotRating": 5,
          "division": "BR",
          "country": "BR",
          "admin": 1,
          "suspended": 0
        });
      });
    }
}
