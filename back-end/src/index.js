const express = require('express');
require('dotenv').config;
const route = require('./Routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/', route);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;