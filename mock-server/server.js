const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();
const port = 3003;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use((req, res, next) => {
  console.log(`Mock received request to: ${req.method} ${req.url}`);
  next();
});

fs.readdirSync(path.join(__dirname, 'mocks')).forEach(file => {
  if (file.endsWith('.js')) {
    const mock = require(`./mocks/${file}`);
    mock.build(app);
  }
});


app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`);
  console.log('Active Mocks:');
  app._router.stack.forEach((middleware) => {
    if (middleware.route) { // if it's a route
      console.log(`- ${middleware.route.path} (${Object.keys(middleware.route.methods).join(', ')})`);
    } else if (middleware.name === 'router') { // if it's a router
      middleware.handle.stack.forEach((handler) => {
        console.log(`- ${handler.route.path} (${Object.keys(handler.route.methods).join(', ')})`);
      });
    }
  });
});
