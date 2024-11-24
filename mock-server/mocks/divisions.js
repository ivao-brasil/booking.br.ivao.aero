module.exports = {
  build: (app) => {
    app.get("/api/divisions", (_req, res) => {
      res.send({
        data: [
          {
            id: "BR",
            logoUrl: "https://www.ivao.aero/publrelat/branding/svg_logos/br.svg"
          },
          {
            id: "FR",
            logoUrl: "https://www.ivao.aero/publrelat/branding/svg_logos/fr.svg"
          }
        ],
      });
    });
  },
};
