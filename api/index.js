const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors());

app.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

app.listen('3000', () => {
    console.log('Ping me at localhost:3000');
});
