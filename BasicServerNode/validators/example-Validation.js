const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateStadium = [
    check("nombre")
        .exists()
        .not()
        .isEmpty(),
    check("capacidad")
        .exists()
        .isNumeric(),
    check("id_pais")
        .exists()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

const validateIdStadium = [
    check("id_estadio")
        .exists()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = {
    validateStadium,
    validateIdStadium
};

/**
 * Ejemplo de validaciones más fuertes
*/
// [
//     verifyToken,
//     check("correo").not().isEmpty().withMessage("Correo es requerido"),
//     check("correo")
//         .isEmail()
//         .withMessage("El correo electronico no posee formato valido"),
//     check("clave_acceso")
//         .not()
//         .isEmpty()
//         .withMessage("Contraseña es requerida"),
//     check("clave_acceso")
//         .isStrongPassword({
//             minLength: 8,
//             minLowercase: 1,
//             minUppercase: 1,
//             minNumbers: 1,
//             minSymbols: 0,
//         })
//         .withMessage(
//             "La contraseña es muy debil (8 caracteres, 1 mayuscula, 1 minuscula y 1 numro"
//         ),
//     check("nombre").not().isEmpty().withMessage("El nombre es requerido"),
//     check("telefono")
//         .isMobilePhone()
//         .withMessage("El valor de telefono tiene un formato invalido"),
//     check("id_pais")
//         .isNumeric()
//         .withMessage("El id_pais debe ser un valor numerico"),
//     check("id_genero")
//         .isNumeric()
//         .withMessage("El id_genero debe ser un valor numerico"),
//     check("id_genero")
//         .isFloat({ min: 1, max: 2 })
//         .withMessage("El tipo de usuario es numerico, 1 o 2"),
//     check("fecha_nac")
//         .isDate()
//         .withMessage(
//             "La fecha de nacimiento no cumple con el formato YYYY-MM-DD"
//         ),
//     check("id_rol")
//         .not()
//         .isEmpty()
//         .withMessage("El tipo de usuario es requerido"),
//     check("id_rol")
//         .isNumeric()
//         .withMessage("El tipo de usuario debe ser numerico"),
//     check("id_rol")
//         .isFloat({ min: 1, max: 3 })
//         .withMessage("El tipo de usuario es numerico de 1 a 3"),
// ],