module.exports = {
  build: (app) => {
    app.get('/api/logo/airline/*', (req, res) => {
      res.sendfile('mock-server/mocks/QTR.gif');
    });
  }
}
