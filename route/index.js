const datos = require('../backends-grafica');

const controladorDatos = require('../controllers/datos.controller');
const express = require('express');
const app = express.Router();

app.get('/',controladorDatos.getData)

module.exports = app;