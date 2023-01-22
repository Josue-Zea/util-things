const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const { SERVER_CONFIG } = require("./config/config");

// const swaggerSpec = variables.SWAGGER_CONFIG;

//Swagger configurations
// const swaggerUI = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/example.routes'));

// app.use("/admin-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.get("/", (req, res) => {
  res.send({
    "mensaje": `Servidor en puerto ${port}`
  });
});

const port = SERVER_CONFIG.SERVER_PORT;
const server = http.createServer(app);

server.listen(port, async () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app