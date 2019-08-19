const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.get('/ping', (req, res) => {
    const date = new Date();
    res.status(200).send(`pong - ${date.toISOString()}`);
});

app.listen(PORT, () => {
    console.log(`Ping me at localhost:${PORT}`);
});
