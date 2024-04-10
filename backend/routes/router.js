const express = require('express');
const routes = require.router();

const cliente = require('../src/controllers/clientes');

routes.get('/', (req, res) => {
    res.json("backend alugueel de imovel")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

module.exports = routes;