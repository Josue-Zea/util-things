const express = require('express')
// Si fuera necesario realizar autenticación por jsonwebtoken descomentar estas lineas
// Esta para verificar que el token es valido
// const { checkAuth } = require('../middleware/auth.js');
// Esta para verificar que el usuario tenga acceso a la ruta
// const { checkRoleAuth } = require('../middleware/roleAuth.js');
const api = express.Router();
const controller = require('../controllers/example.controller.js');
// Si es necesario validar los objetos enviados por parámetros usar estos middlewares
// const { validateIdStadium, validateStadium } = require('../validators/estadio.js');

/**
* @swagger
*   components:
*       schemas:
*           Estadio:
*               type: object
*               properties:
*                   nombre:
*                       type: string
*                       description: Nombre del estadio
*                   pais:
*                       type: string
*                       description: Pais en donde reside el estadio
*                   id_pais:
*                       type: integer
*                       description: Id del país donde reside el estadio
*                   id_estadio:
*                       type: integer
*                       description: Id del estadio
*                   capacidad:
*                       type: integer
*                       description: Capacidad del estadio
*/

/**
* @swagger
* /admin/estadio:
*    get:
*       summary: Obtener listado de estadios
*       tags: [Estadios]
*       requestBody:
*           required: false
*       responses:
*           200:
*               description: Petición exitosa
*               content:
*                   application/json:
*                       schema:
*                           type: object
*                           properties:
*                               data:
*                                   type: array
*                                   items:
*                                       $ref: '#/components/schemas/Estadio'
*                                   description: Arreglo de los estadios en el sistema
*                               message:
*                                   type: string
*                                   description: Mensaje para mayor información de la petición
*                           example:
*                               data: [ { "nombre": "Estadio Olímpico", "pais": "Kenya", "id_pais": 108, "id_estadio": 7, "capacidad": 72804 }  ]
*                               message: Petición exitosa
*           400:
*               description: Ha habido algún error en la petición
*               content:
*                   application/json:
*                       schema:
*                           type: object
*                           properties:
*                               data:
*                                   type: array
*                                   description: Arreglo de los estadios
*                               message:
*                                   type: string
*                                   description: Mensaje para mayor información de la petición
*                           example:
*                               data: []
*                               message: Ha ocurrido algún error
*/
//Aquí definimos la ruta a utilizar, pueden agregarse los middlewares
api.get('/example', controller.exampleFunction);

/**
* @swagger
* /admin/estadio/{id_estadio}:
*  get:
*      summary: Obtener un estadio
*      tags: [Estadios]
*      parameters:
*           - in: path
*             name: id_estadio
*             schema:
*               type: integer
*             required: true
*             description: Id del estadio a obtener
*      requestBody:
*           required: false
*      responses:
*           200:
*              description: Petición exitosa
*              content:
*                  application/json:
*                      schema:
*                        type: object
*                        properties:
*                            data:
*                                 type: array
*                                 items:
*                                     $ref: '#/components/schemas/Estadio'
*                                 description: Arreglo que contendra el estadio buscado
*                            message:
*                                 type: string
*                                 description: Mensaje para mayor información de la petición
*                        example:
*                           data: [ { "nombre": "Camp Nou", "pais": "British Indian Ocean Territory", "id_pais": 100, "id_estadio": 1, "capacidad": 95096 } ]
*                           message: Equipo encontrado
*           400:
*              description: Ha habido algún error en la petición
*              content:
*                  application/json:
*                      schema:
*                        type: object
*                        properties:
*                            message:
*                                type: string
*                                description: Mensaje para mayor información de la petición
*                        example:
*                           message: Ha ocurrido algún error
*/
// api.get('/admin/estadio/:id_estadio', validateIdStadium, checkAuth, checkRoleAuth([1, "1", 2, "2"]), controller.getStadium);

/**
* @swagger
* /admin/estadio:
*     post:
*         summary: Crear un nuevo estadio
*         tags: [Estadios]
*         requestBody:
*             required: true
*             content:
*                 application/json:
*                     schema:
*                         type: object
*                         properties:
*                             nombre:
*                                 type: string
*                                 description: Nombre del estadio a crear
*                             id_pais:
*                                 type: integer
*                                 description: Id del pais donde se encuentra el estadio
*                             capacidad:
*                                 type: integer
*                                 description: Capacidad del estadio
*                         example:
*                             nombre: Estadio Erick Barrondo
*                             id_pais: 86
*                             capacidad: 20000
*         responses:
*             200:
*                 description: Petición exitosa
*                 content:
*                     application/json:
*                         schema:
*                             type: object
*                             properties:
*                                 message:
*                                     type: string
*                                     description: Mensaje para mayor información de la petición
*                             example:
*                                message: Se ha creado el estadio correctamente
*             400:
*                 description: Ha habido algún error en la petición
*                 content:
*                     application/json:
*                         schema:
*                             type: object
*                             properties:
*                                 message:
*                                     type: string
*                                     description: Mensaje para mayor información de la petición
*                             example:
*                                 message: Ha ocurrido algún error
*/
// api.post('/admin/estadio', validateStadium, checkAuth, checkRoleAuth([1, "1", 2, "2"]), controller.createStadium);

/**
* @swagger
* /admin/estadio/{id_estadio}:
*     put:
*         summary: Actualizar un estadio
*         tags: [Estadios]
*         parameters:
*             - in: path
*               name: id_estadio
*               schema:
*                 type: integer
*               required: true
*               description: Id del estadio a modificar
*         requestBody:
*              required: true
*              content:
*                 application/json:
*                     schema:
*                         type: object
*                         properties:
*                             nombre:
*                                 type: string
*                                 description: Nombre del estadio a crear
*                             id_pais:
*                                 type: integer
*                                 description: Id del pais donde se encuentra el estadio
*                             capacidad:
*                                 type: integer
*                                 description: Capacidad del estadio
*                         example:
*                             nombre: Estadio Erick Barrondo
*                             id_pais: 86
*                             capacidad: 20000
*         responses:
*             200:
*                 description: Petición exitosa
*                 content:
*                     application/json:
*                         schema:
*                             type: object
*                             properties:
*                                 message:
*                                     type: string
*                                     description: Mensaje para mayor información de la petición
*                             example:
*                                 message: Se ha actualizado el estadio correctamente
*             400:
*                 description: Ha habido algún error en la petición
*                 content:
*                     application/json:
*                         schema:
*                             type: object
*                             properties:
*                                 message:
*                                     type: string
*                                     description: Mensaje para mayor información de la petición
*                             example:
*                                 message: Ha ocurrido algún error
*/
// api.put('/admin/estadio/:id_estadio', validateStadium, validateIdStadium, checkAuth, checkRoleAuth([1, "1", 2, "2"]), controller.updateStadium);

/**
* @swagger
* /admin/estadio/{id_estadio}:
*     delete:
*         summary: Eliminar un estadio
*         tags: [Estadios]
*         parameters:
*             - in: path
*               name: id_estadio
*               schema:
*                 type: integer
*               required: true
*               description: Id del estadio a eliminar
*         requestBody:
*             required: false
*         responses:
*             200:
*                 description: Petición exitosa
*                 content:
*                     application/json:
*                         schema:
*                             type: object
*                             properties:
*                                 message:
*                                     type: string
*                                     description: Mensaje para mayor información de la petición
*                             example:
*                                 message: Se ha eliminado el estadio correctamente
*             400:
*                 description: Ha habido algún error en la petición
*                 content:
*                     application/json:
*                         schema:
*                             type: object
*                             properties:
*                                 message:
*                                     type: string
*                                     description: Mensaje para mayor información de la petición
*                             example:
*                                 message: Ha ocurrido algún error
*/
// api.delete('/admin/estadio/:id_estadio', validateIdStadium, checkAuth, checkRoleAuth([1, "1", 2, "2"]), controller.deleteStadium);

module.exports = api;