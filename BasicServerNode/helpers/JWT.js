const jwt = require("jsonwebtoken");
const { SERVER_CONFIG } = require("../config/config");

// Para validar que el token sea correcto
const verifyToken = async ( token ) => {
    try {
        return jwt.verify( token, SERVER_CONFIG.JWT_KEY );
    } catch (e) {
        return null;
    }
};

module.exports = {
    verifyToken
}