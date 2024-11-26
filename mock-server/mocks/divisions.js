module.exports = {
  build: (app) => {
    app.get("/api/divisions", (_req, res) => {
      res.send({
        data: [
          {
            id: "BR",
          },
          {
            id: "FR",
          },
          {
            id: "DE",
          },
          {
            id: "ES",
          },
        ],
      });
    });
  },
};
