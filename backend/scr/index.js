const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket')
const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://weslei05:tomate@cluster0-neact.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
    useUnifiedTopology: true,

  });

//app.use(cors({origin: 'http:;;localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);


//COMENTARIOS
//AULA 1

// Métodos  HTTP: get , post , put , delete

//Tipo de parâmetros:
//Query params: request.query (Filtros, ordenação, paginação, ....)
//Route params: request.params (Identificar um recuso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB ( banco não relacional)