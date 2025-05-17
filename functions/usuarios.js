var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
var port = process.env.PORT || 5000;
var app = express();
var usuroutes = require("../../backend/routes/usuariosrutas.js");
import { addTask, getTasks } from "./services/tasks.js";

const example = async () => {
const userId = "usuario123";

await addTask(userId, {
    title: "Mi tarea Firebase",
    completed: false,
    createdAt: new Date()
});

const tareas = await getTasks(userId);
console.log(tareas);
};

example();


//Ejemplo de función con manejo posterior de persistencia
//segundo comentario

app.use(express.json());
app.use(cors());

var router = express.Router();
router.use ("/usuarios",usuroutes);

var handler = app.use ('/.netlify/functions',router);
exports.handler = serverless (app);