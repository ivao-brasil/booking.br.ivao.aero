module.exports = {
    build: (app) => {
        app.get('/login', (req, res) => {
            res.sendfile('mock-server/mocks/login.html');
        });
        
        app.get('/complete-login', (req, res) => {
            const destination = decodeURIComponent(req.query.urlRedirection);
            res.redirect(destination);
        });
    }
}