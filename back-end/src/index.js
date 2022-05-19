const express = require('express');
const cors = require('cors');
const error = require('./middleware/error');
require('dotenv').config;
const route = require('./Routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', route);

app.use(error);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;