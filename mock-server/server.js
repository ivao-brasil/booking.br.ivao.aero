const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();
const port = 3003;

fs.readdirSync(path.join(__dirname, 'mocks')).forEach(file => {
    if (file.endsWith('.js')) {
        const mock = require(`./mocks/${file}`);
        mock.build(app);
    }
});

app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`);
});