// adicionar as bibliotecas
const express = require('express');
const server = express();
server.use(express.json());

var lista = [
    {
        id: 1,
        nome: "sabão em pó",
        quantidade:2
    }]

    server.get('/lista', function (request, response) {
        return response.json(lista)
    });

    server.get('/lista:id', function (request, response) {
    // colocar uma variável diferente para nao conflitar com a lista inicial
    const id = request.params.id;
    const item = item.filter(i => i.id == id);
    return response.json(item);
    });

    server.post('/lista', function (request, response) {
        const item = request.body;
        item.push(item);
        return response.status(201).send();
    });

    server.put('/lista', function .......)


    server.listen(3000);
