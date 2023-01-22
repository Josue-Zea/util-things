require('dotenv').config();
//Si es necesario usar swagger, descomentar esto
// const path = require("path");

// const SWAGGER_CONFIG = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "API - Microservicio administrador G5",
//             version: "1.0.0"
//         },
//         components: {
//             securitySchemes: {
//                 bearerAuth: {
//                     type: 'http',
//                     scheme: 'bearer',
//                     bearerFormat: 'JWT',
//                 }
//             }
//         },
//         security: [{
//             bearerAuth: []
//         }]
//     },
//     apis: [
//         `${path.join(__dirname, "../routes/*.js")}`
//     ]
// }

const SERVER_CONFIG = {
    SERVER_PORT: "3000",
    // En caso de necesitarse un JWT manejarlo desde las variables de entorno o una de ejemplo
    JWT_KEY: "9351f1790db00da7134c80aa3ea6656befb41b4cf8eedd55d65d918e111c7588a5814e9095292174f9302e1b486d4b56ce406b21d1b9731f562d4fcdb45344a1"
}

module.exports = {
    // SWAGGER_CONFIG,
    SERVER_CONFIG,
}